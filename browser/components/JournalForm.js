import React, { Component } from 'react';
import axios from 'axios';
import store, { postJournalEntry } from './redux';

class JournalForm extends Component {
  constructor(props) {
    super(props)

    this.state= {
      user: '',
      title: '',
      content: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleUser=this.handleUser.bind(this);
    this.handleTitle=this.handleTitle.bind(this);
    this.handleContent=this.handleContent.bind(this);
  }

  handleUser(e) {
    this.setState({
      user: e.target.value
    })
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleContent(e){
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    store.dispatch(postJournalEntry(this.state)) //used redux thunk action-creator
    // axios.post('/api/journalEntries')
    // .then( res => res.data)
    // .then( (newJournalEntry) => {
    //   store.dispatch(addJournalEntry(newJournalEntry)) //redux way
    //   // this.setState({journalEntry}) //react way
    //   console.log("new journalEntry dispatched:", newJournalEntry)
    // })
    // .catch(console.error.bind(console));
  }

  render() {

    return(
      <div>
        <h1>New Journal Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <select name="users" placeholder="Users"> {
            this.props.users.map( user => {
              return (
                <option key={user.id} value={user} onChange={this.handleUser} >{user.name}
                </option>
              )
            })
          }
          </select>
          <input name="title" placeholder="Title" onChange={this.handleTitle} />
          <input name="content" placeholder="Content" onChange={this.handleContent} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default JournalForm;

// this.props.users && this.props.users.map( user => <option value={user.id}>{user.name}</option>)
