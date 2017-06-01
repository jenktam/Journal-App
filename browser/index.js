import React from 'react'
import ReactDOM from 'react-dom'
import UserForm from './components/UserForm'
import AllUsers from './components/AllUsers'

ReactDOM.render(
  <div>
    <UserForm />
    <AllUsers />
  </div>,
  document.getElementById('app')
)
