import React, {Component} from 'react';
import UserForm from './UserForm'
import JournalForm from './JournalForm'
import AllUsers from './AllUsers'
import AllJournalEntries from './AllJournalEntries'

class Main extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchJournalEntries()
  }

  render() {
    return (
    <div>
      <UserForm />
      <AllUsers users={this.props.users} />
      <JournalForm users={this.props.users} />
      <AllJournalEntries
        journalEntries={this.props.journalEntries} />
    </div>
    )
  }
}

export default Main;


// once users state updated, AllUsers page will rerender component with new state
