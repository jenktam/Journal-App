const db = require('../_db');
const User = require('./user')
const JournalEntry = require('./journalEntry')



// One-To_Many
// User.getJournalEntries/setJournalEntries/addJournalEntries
// journalId
User.hasMany(JournalEntry)


// One-To-One
// JournalEntries.getUser, setUser, removeUser
// userId
JournalEntry.belongsTo(User)

module.exports = {
  db,
  User,
  JournalEntry
};
