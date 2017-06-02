import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';

// actions/constants
export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';

export const LOAD_JOURNAL_ENTRIES = 'LOAD_JOURNAL_ENTRIES';
export const ADD_JOURNAL_ENTRY = 'ADD_JOURNAL_ENTRY';

// action creators
export const loadUsers = users => ({
  type: LOAD_USERS,
  users: users
})

export const addUser = user => ({
  type: ADD_USER,
  user: user
})

export const loadJournalEntries = journalEntries => ({
  type: LOAD_JOURNAL_ENTRIES,
  journalEntries: journalEntries
});

export const addJournalEntry = journalEntry => ({
  type: ADD_JOURNAL_ENTRY,
  journalEntry: journalEntry
})

// thunks
export const postJournalEntry = entryInfo => dispatch => {
  axios.post('api/journalEntries', entryInfo)
  .then(res => res.data)
  .then( journalEntries => store.dispatch(addJournalEntry(journalEntries)))
  .catch(console.error.bind(console))
}


const initialState = {
  users: [],
  journalEntries: []
}

const reducer = ( state = initialState, action ) => {

  const newState = Object.assign({}, state); //cannot change previous state, and therefore create new object, updating the newly created state

  switch(action.type) {
    case LOAD_USERS:
      newState.users = action.users;
      break;
    case ADD_USER:
      newState.users.push(action.user)
      break;
    case LOAD_JOURNAL_ENTRIES:
      newState.journalEntries = action.journalEntries;
      break;
    case ADD_JOURNAL_ENTRY:
      newState.journalEntry = action.journalEntry;
      break;
    default:
      return state;
  }
  return newState;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
// )

export default store;
