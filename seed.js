'use strict';

const Promise = require('bluebird');
const db = require('./db/_db')
const models = require('./db/models')
const User = require('./db/models/user')
const JournalEntry = require('./db/models/journalEntry')

// syncs data to db
db.sync({force: true})
.then( () => {
  return User.bulkCreate([
    { name: 'Jen Tam', email: 'Jen@Jen.com' },
    { name: 'Beyonce Knowles', email: 'Beyonce@Beyonce.com'  },
    { name: 'Sandy Loo', email: 'Sandy@Sandy.com' },
    { name: 'Wendy Lane', email: 'Wendy@Wendy.com'  },
    { name: 'Melissa Schwartz', email: 'Melissa@Melissa.com'  },
    { name: 'Diana Voltz', email: 'Diana@Diana.com' },
    { name: 'Ryan Flemming', email: 'Ryan@Ryan.com' },
    { name: 'Jason Chang', email: 'Jason@Jason.com' },
    { name: 'Christine Wright', email: 'Christine@Christine.com'  },
    { name: 'Dora Brighton', email: 'Dora@Dora.com' }
  ])
})

.then( () => {
  return JournalEntry.bulkCreate([
    { title: 'Days go by', content: 'And days go by, I can feel them flying.', userId: 1 },
    { title: 'Days go by more', content: 'I can write for days.', userId: 1 },
    { title: 'Diva', content: 'I\'m-a a diva (hey)', userId: 2 },
    { title: 'Stop the track; let me state facts', content: 'I told you give me a minute and I\'ll be right back', userId: 3 },
    { title: 'A B C', content: 'It\'s easy as, 1 2 3', userId: 4 },
    { title: 'Reading, writing, arithmetic', content: 'Are the branches of the learning tree', userId: 5 },
    { title: 'This is my first entry', content: 'Sing a simple melody', userId: 6 },
    { title: 'Money in the bank', content: 'Don\'t mean a thing', userId: 7 },
    { title: '2,4,6,8', content: 'Who do you appriciate?', userId: 8 },
    { title: 'Lovely as a summer day', content: 'Distant as the Milky Way', userId: 9 },
    { title: 'Stand!', content: 'For the things you know are right.', userId: 10 },
  ])
})

.then( () => console.log('seed complete'))
