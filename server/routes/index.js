const express = require('express');
const router = express.Router();
const models = require('../../db/index')

router.use('/users', require('./users'))
router.use('/journalEntries', require('./journalEntries'))

router.get('/', (req, res, next) => {
  res.send("this route was reached")
})

module.exports = router;
