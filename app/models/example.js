const mongoose = require('mongoose')

const Schema = mongoose.Schema
const exampleSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
}, {
  collection: 'example', // 这里是为了避免新建的表会带上s后缀
  versionKey: false // 不需要__v字段，默认是加上的
})

module.exports = mongoose.model('example', exampleSchema)