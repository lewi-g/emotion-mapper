import React from 'react'
import {connect} from 'react-redux'

import {fetchUserEntriesSuccess} from '../../actions/getEntries'
import {fetchUserEntries} from '../../actions/getEntries'

class UserHistory extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserEntries())
  }
  render () {
    const entryList = this.props.userEntries.map((entry, i) => {
      const {id, emotion, comment }=entry;
      return <li key={id}>{emotion} </li>
    })
    return (
      <div>
        <ul>
          {entryList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEntries: state.getEntries.userEntries
})
export default connect(mapStateToProps)(UserHistory)
