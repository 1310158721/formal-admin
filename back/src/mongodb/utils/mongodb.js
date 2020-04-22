const { myRes } = require('./res')

class MONGODB {
  constructor() {}

  async find(model, conditions = {}, filters = {}, res) {
    return new Promise((resolve) => {
      model.find(conditions, filters)
        .then((doc) => {
          resolve(doc)
        })
        .catch((err) => {
          myRes(res, err, 500, '数据库出错了')
        })
    })
  }
}

const myMongodb = new MONGODB()
module.exports = myMongodb
