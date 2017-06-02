import React, { Component } from 'react';

const AllJournalEntries = props => {
  console.log("props in AllJournalEntries", props.journalEntries)
  return (
  <div>
    <h1>All Journal Entries</h1>
    <ul>{
      props.journalEntries.map( journalEntry => {
        return (
          <li key={journalEntry.id}><strong>Title:</strong> {journalEntry.title} <strong>By:</strong> {journalEntry.user.name} </li>
        )
      })
    }</ul>
  </div>
)
}

export default AllJournalEntries;
