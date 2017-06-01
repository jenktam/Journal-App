const db = require('../_db')
const Sequelize = require('sequelize')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

module.exports = User;
