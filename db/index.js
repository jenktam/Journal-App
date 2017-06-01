const db = require('./_db');
const User = require('./models/user')
const JournalEntry = require('./models/journalEntry')



// One-To_Many
// User.getJournalEntries/setJournalEntries/addJournalEntries
User.hasMany(JournalEntry)

// One-To-One
// JournalEntries.getUser, setUser, removeUser
JournalEntry.belongsTo(User)

module.exports = db;
