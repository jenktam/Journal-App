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
    beforeCreate: journalEntry => journalEntry.title = journalEntry.title.toUpperCase()
    }
})

module.exports = JournalEntry;
