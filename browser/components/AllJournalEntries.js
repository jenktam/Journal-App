import React, { Component } from 'react';

const AllJournalEntries = props => {
  console.log("props.journalEntries", props.journalEntries);
  return (
  <div>
    <h1>All Journal Entries</h1>
    <ul>{
      props.journalEntries.map( journalEntry => {
        return (
          <li key={journalEntry.id}>{journalEntry.title} </li>
        )
      })
    }</ul>
  </div>
)
}

export default AllJournalEntries;
