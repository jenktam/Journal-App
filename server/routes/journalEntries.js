const router = require('express').Router();
module.exports = router;

const User = require('../../db/models/user');
const JournalEntry = require('../../db/models/journalEntry');

router.get('/', (req, res, next) => {
  res.send("journalEntries / route")
})
