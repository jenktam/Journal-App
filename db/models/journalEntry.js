const db = require('../_db')
const Sequelize = require('sequelize')

const JournalEntry = db.define("journalEntry", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
},
{
  hooks: {
    beforeCreate: entry => entry.title = entry.title.toUpperCase()
    }
})

module.exports = JournalEntry;
