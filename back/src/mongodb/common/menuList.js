const config = require('../../config/config')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { find } = require('../utils/mongodb')
const { myRes } = require('../utils/res')
const $axios = require('axios')

// 声明一个导航菜单相关的类
class MENULIST {
  constructor() {
    this.app = global.app

    // 删除 menuList 每层多余空数组 children 时的查询次数
    this.checkTime = 3

    // 用户数据结构
    this.menuListSchema = new Schema({
      title: String,
      permission: String,
      children: Array | null,
      buttons: Array | null,
      order: Number
    })

    // 数据库连接状态
    this.db = mongoose.createConnection('mongodb://127.0.0.1:27017/formalAdminCommon', { useUnifiedTopology: true, useNewUrlParser: true })

    // 用户数据模型 => 对应到数据库的某张表
    this.menuListModel = this.db.model('menulist', this.menuListSchema)

    // 创建类时最后调取开启 api 的方法
    this.openApi()
  }

  /**
   * 根据已有的用户权限，匹配出用户应有的权限菜单
   * @param { 用户已有权限 } hasPermission 
   * @param { 所有的导航菜单 } menuList 
   */
  _matchPermissionMenuList(hasPermission, menuList) {
    const len = menuList.length
    for (let i = len - 1; i >= 0; i--) {
      /**
       * 防止某些权限id的名称包含了要查询的权限id，造成的数据混乱
       * eg: 权限id -> GRAGGER-BUTTON1，而要查询的却是 DRAGGER
       * 因此不建议使用 includes 直接查找，而是将用户权限id字符串转为数据，在进行精准匹配
       */
      if (!hasPermission.split(',').filter((k) => k === menuList[i].permission).length) {
        menuList.splice(i, 1)
        continue;
      } else {
        if (menuList[i].children && menuList[i].children.length) {
          this._matchPermissionMenuList(hasPermission, menuList[i].children)
        } else if (menuList[i].buttons && menuList[i].buttons.length) {
          this._matchPermissionMenuList(hasPermission, menuList[i].buttons)
        }
      }
    }
  }
  
  /**
   * 删除 menuList 每层多余空数组 children
   * @param { 需要处理的权限菜单 } menuList 
   */
  _delEmptyArray(menuList) {
    for (let t = 0; t < this.checkTime; t++) {
      for (let i = menuList.length - 1; i >= 0; i--) {
        if (menuList[i].children !== null) {
          if (menuList[i].children && menuList[i].children.length) {
            this._delEmptyArray(menuList[i].children);
          } else {
            menuList.splice(i, 1);
          }
        }
      }
    }
  }

  /**
   * 查询已有的所有菜单
   * 用于创建用户时，给用户添加权限
   */
  checkAllMenuList() {
    this.app.get('/api/checkAllMenuList', (req, res, next) => {
      find(this.menuListModel)
        .then((doc) => {
          myRes(res, doc, 0, '查询成功')
        })
    })
  }

  /**
   * 根据单个用户 token / id 查询某个用户的权限菜单
   * 接收一个参数 token / id
   * 用于前端生成导航菜单
   */
  checkUserPermissionMenuList() {
    this.app.get('/api/checkUserPermissionMenuList', (req, res, next) => {
      const { id = '' } = req.query
      const { token } = req.signedCookies
      if (!token && !id) {
        myRes(res, null, 400, '参数不能为空')
      } else {
        // 优先 id 查询
        const conditions = id ? { _id: id } : { token }
        // 先获取用户的权限
        $axios.get(`http://127.0.0.1:${config.PORT}/api/checkUserInfo`, { params: conditions })
          .then((response) => {
            const { result, code } = response.data
            if (code === 0) {
              const { hasPermission } = result
              // 查询已有的所有菜单
              $axios.get(`http://127.0.0.1:${config.PORT}/api/checkAllMenuList`)
                .then((response) => {
                  const { result, code } = response.data
                  if (code === 0) {
                    const menulist = result
                    this._matchPermissionMenuList(hasPermission, menulist)
                    this._delEmptyArray(menulist)
                    myRes(res, menulist, 0, 'axios 查看所有的菜单信息成功')
                  } else {
                    myRes(res, null, 400, 'axios 查看所有的菜单信息成功，但 code 不为 0')
                  }
                })
            } else {
              myRes(res, null, 400, 'axios 查看用户信息成功，但 code 不为 0')
            }
          })
          .catch((err) => {
            console.log(err)
            myRes(res, null, 400, 'axios 查看用户信息失败')
          })
      }
    })
  }

  // 开启 api
  openApi() {
    this.checkAllMenuList()
    this.checkUserPermissionMenuList()
  }
}

const menuList = new MENULIST()
