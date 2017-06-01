const express = require('express');
const router = express.Router();
const models = require('../../db/models/index')

router.use('/api/users', require('./users'))
router.use('/api/journalEntries', require('./journalEntries'))


module.exports = router;
