import React from 'react'
import {connect} from 'react-redux'

import {fetchUserEntriesSuccess} from '../../actions/getEntries'
import {fetchUserEntries} from '../../actions/getEntries'

class UserHistory extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserEntries())
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.userEntries.map(entry => <li>{entry}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEntries: state.getEntries.userEntries
})
export default connect(mapStateToProps)(UserHistory)
