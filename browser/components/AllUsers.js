import React, { Component } from 'react'
import axios from 'axios'

const AllUsers = props => (
  <div>
    <h1>Users</h1>
    <ul>
      { props.users.map(user => {
        return <li key={user.id}>{ user.name }</li>
      })}
    </ul>
  </div>
)

export default AllUsers;


/*  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/users')
    .then(res => res.data)
    .then( users => this.setState({ users }))
    .catch(err => console.error(err))
  }*/
