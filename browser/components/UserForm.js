import React,{ Component } from 'react';
// import store from '../re'
import axios from 'axios'

class UserForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  // handleSubmit makes ajax request to send newUser to db. dispatches addUser action to change state. this.state is data passing along
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/users', this.state)
    .then(res => res.data)
    .then(newUser => {
      // store.dispatch(addUser(newUser))
      console.log("new user dispatched:", newUser)
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <h1>User Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            onChange={ this.handleName }
          />
          <input
            name="email"
            placeholder="Email"
            onChange={ this.handleEmail }
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserForm;
