import React from 'react'
import {connect} from 'react-redux'

class UserHistory extends React.Component {
  render () {
    return (
      <p>User history stuff!</p>
    )
  }
}

export default connect()(UserHistory)
