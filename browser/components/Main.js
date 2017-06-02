import React, {Component} from 'react';
import axios from 'axios';
import UserForm from './UserForm'
import JournalForm from './JournalForm'
import AllUsers from './AllUsers'
import AllJournalEntries from './AllJournalEntries'
import store, { loadUsers, loadJournalEntries } from './redux'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      journalEntries: []
    }
  }

  componentDidMount() {
    // listen for changes in redux store state. whenever changes occur, also update local state with state in redux store

    this.unsubscribe = store.subscribe( () => this.setState(store.getState())) //since store not passed in cannot put this.state.

    Promise.all([
      axios.get('/api/users'),
      axios.get('/api/journalEntries')
    ])
    .then( responses => responses.map( res => res.data))
    .then(([users, journalEntries]) => {
      store.dispatch(loadUsers(users));
      store.dispatch(loadJournalEntries(journalEntries))
    })
    .catch(console.error.bind(console));
  }
  //   axios.get('/api/users')
  //   .then(res => res.data)
  //   .then( users => store.dispatch(loadUsers(users))) //store.dispatch takes action object and calls reducer function with loadUsers value. new state updated and sent to redux store
  //   .catch(err => console.error(err))
  // }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    return (
    <div>
      <UserForm />
      <AllUsers users={this.state.users} />
      <JournalForm users={this.state.users} />
      <AllJournalEntries
        users={this.state.users}
        journalEntries={this.state.journalEntries} />
    </div>
    )
  }
}

export default Main;


// once users state updated, AllUsers page will rerender component with new state
