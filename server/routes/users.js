const router = require('express').Router();
module.exports = router;

const User = require('../../db/models/user');
const JournalEntry = require('../../db/models/journalEntry');

const logErr = console.error.bind(console);

router.param('id', (req, res, next, id) => {
  User.findById(id)
  .then(user => {
    if(!user) {
      const err = Error('User not found!');
      err.status = 404;
      throw err;
    }
    req.user = user;
    next();
    return null; //silences bluebird warning about promises inside of next
  })
  .catch(next);
})

router.get('/', (req, res, next) => {
  User.findAll()
  .then(res.send.bind(res))
  .catch(logErr)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(createdUser => res.send(createdUser))
  .catch(logErr)
})

router.get('/:id', (req, res, next) => {
  res.send(req.user)
})

router.put('/:id', (req, res, next) => {
  req.user.update(req.body)
  .then(updatedUser => {
    res.status(200).send(updatedUser)
  })
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  req.user.destroy()
  .then(() => res.status(204).end())
  .catch(logErr)
})
