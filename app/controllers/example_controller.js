// 引入刚才定义的表
const Example_col = require('./../models/example')

// get请求返回所有数据
const getExample = async (ctx, next) => {
  const req = ctx.request.body

  const examples = await Example_col.find({}, { _id: 0 })

  ctx.status = 200
  ctx.body = {
    msg: 'get request!!',
    data: {
      data: req,
      examples
    }
  }
}

// post带一个msg参数，并插入数据库
const postExample = async (ctx, next) => {
  const req = ctx.request.body

  ctx.status = 200
  if (!req.msg || typeof req.msg != 'string') {
    ctx.status = 401
    ctx.body = {
      msg: 'post request!!',
      desc: `parameter error! ! msg: ${req.msg}`,
      data: req
    }
    return
  }

  const result = await Example_col.create({msg: req.msg})

  ctx.body = {
    msg: 'post request!!',
    desc: 'insert success!',
    data: result
  }
}

module.exports = {
  getExample,
  postExample
}