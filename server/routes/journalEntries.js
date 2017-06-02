const router = require('express').Router();
module.exports = router;

const User = require('../../db/models/user');
const JournalEntry = require('../../db/models/journalEntry');

router.param('id', (req, res, next, id) => {
  JournalEntry.findById(id, {
    include: [ User ]
  })
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
  JournalEntry.findAll({
    include: [User] //must apply eager loading to associatiate userId in JournalEntry table to id in User table
  })
  .then(allEntries => res.send(allEntries))
  .catch(next)
})

router.post('/', (req, res, next) => {
  JournalEntry.create(req.body)

    //adds userId in new entry. This is important or Sequelize won't create the association and add a userId to a journalEntry in a post request
  .then(newEntry => newEntry.setUser(+req.body.user))

  // searches journalEntry table for id that matching newEntry's id and userId.
  .then(newEntry => JournalEntry.findById(newEntry.id, {
    include: [ User ]
  }))

  // Then adds newEntry data to DB.
  .then( newEntry => res.send(newEntry))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  res.send(req.journalEntry)
})

router.put('/:id', (req, res, next) => {
  req.journalEntry.update(res.body)
  .then( updatedJournalEntry => {
    res.status(200).send(updatedJournalEntry)
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  req.journalEntry.destroy()
  .then(() => res.status(204).end())
  .catch(next)
})
