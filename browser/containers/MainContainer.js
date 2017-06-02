import Main from '../components/Main'
import { connect } from 'react-redux'
import { fetchUsers, fetchJournalEntries } from '../redux'

// pass an object with state
const mapStateToProps = state => ({
  users: state.users,
  journalEntries: state.journalEntries
})

// object that dispatches regular action creators/ thunk action creators
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchJournalEntries: () => dispatch(fetchJournalEntries())
})

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
