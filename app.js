const Koa = require('koa')

// 这是一些常量的配置文件
const config = require('./config')

const mongoos = require('mongoose')

const app = new Koa()

mongoos.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) {
    console.error('Failed to connect to database')
  } else {
    console.log('Connecting database successfully')
  }
})

const example_router = require('./routes/api/example_router')

app.use(example_router.routes()).use(example_router.allowedMethods())

app.listen(config.port)