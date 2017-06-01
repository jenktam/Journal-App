const router = require('express').Router();
module.exports = router;

const User = require('../../db/models/user');
const JournalEntry = require('../../db/models/journalEntry');

router.param('id', (req, res, next, id) => {
  JournalEntry.findById(id)
  .then( journalEntry => {
    if(!journalEntry) {
      const err = Error('Journal entry doesn\'t exist!')
      err.status = 404;
      throw err;
    }
    req.journalEntry = journalEntry;
    next();
    return null;
  })
  .catch(next);
});

const logErr = console.error.bind(console);

router.get('/', (req, res, next) => {
  JournalEntry.findAll()
  .then(res.send.bind(res))
  .catch(logErr)
})

router.post('/', (req, res, next) => {
  JournalEntry.create(req.body)
  .then( res.send.bind(res))
  .catch(logErr)
})

router.get('/:id', (req, res, next) => {
  res.send(req.journalEntry)
})

router.put('/:id', (req, res, next) => {
  req.journalEntry.update(res.body)
  .then( updatedJournalEntry => {
    res.status(200).send(updatedJournalEntry)
  })
  .catch(logErr)
})

router.delete('/:id', (req, res, next) => {
  req.journalEntry.destroy()
  .then(() => res.status(204).end())
  .catch(logErr)
})
