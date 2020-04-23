const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { find } = require('../utils/mongodb')
const { myRes } = require('../utils/res')

// 声明一个用户相关信息的类
class USER {
  constructor() {
    this.app = global.app

    // 用户数据结构
    this.userSchema = new Schema({
      account: String,
      password: String,
      token: String
    })

    // 数据库连接状态
    this.db = mongoose.createConnection('mongodb://127.0.0.1:27017/formalAdminCommon', { useUnifiedTopology: true, useNewUrlParser: true })

    // 用户数据模型 => 对应到数据库的某张表
    this.userModel = this.db.model('alluser', this.userSchema)

    // 创建类时最后调取开启 api 的方法
    this.openApi()
  }

  /**
   * 根据 token / id 查看单个用户数据
   * 接受请求参数 token / id
   */
  checkUserInfo() {
    this.app.get('/api/checkUserInfo', (req, res, next) => {
      const { token, id } = req.query
      if (!token && !id) {
        myRes(res, null, 400, '参数不能为空')
      } else {
        const conditions = token ? { token } : { _id: id }
        find(this.userModel, conditions, { _id: 0, token: 0 }, res)
          .then((doc) => {
            if (!doc.length) {
              myRes(res, null, 400, '找不到该用户')
            } else if (doc.length >= 2) {
              myRes(res, null, 400, '数据库存在两个相同的用户，请联系管理员处理')
            } else {
              myRes(res, doc[0], 0, '查询成功')
            }
          })
      }   
    })
  }

  /**
   * 查看所有用户数据，没有查询条件
   */
  checkAllUsersInfo() {
    this.app.get('/api/checkAllUsersInfo', (req, res, next) => {
      find(this.userModel, {}, { _id: 0 }, res)
        .then((doc) => {
          myRes(res, doc, 0, '查询成功')
        })
    })
  }

  /**
   * 用户登录接口
   * 接收 account, password 两个参数
   */
  login() {
    this.app.post('/api/login', (req, res, next) => {
      const { account = '', password = '' } = req.body
      console.log(req.body)
      if (!account || !password) {
        console.log(req.query)
        myRes(res, null, 400, '参数不能为空')
      } else {
        const conditions = { account, password }
        find(this.userModel, conditions, { _id: 0 }, res)
          .then((doc) => {
            if (!doc.length) {
              myRes(res, null, 400, '找不到该用户')
            } else if (doc.length >= 2) {
              myRes(res, null, 400, '数据库存在两个相同的用户，请联系管理员处理')
            } else {
              const { token } = doc[0];
              // cookie 有效期 2h
              res.cookie('token', token, {
                maxAge: 1000 * 60 * 60 * 2,
                signed: true
              });
              myRes(res, doc[0], 0, '查询成功')
            }
          })
      }
    })
  }

  // 表示开启的 api
  openApi() {
    this.checkUserInfo()
    this.checkAllUsersInfo()
    this.login()
  }
}

const user = new USER()
