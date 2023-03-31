const mongoose = require('mongoose')
const user = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
})

const User = new mongoose.model('User', user)
module.exports = User