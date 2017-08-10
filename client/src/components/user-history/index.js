import React from 'react'
import {connect} from 'react-redux'

class UserHistory extends React.Component {
  componentDidMount() {
    fetchUserEntries()
  }
  render () {
    return (
      <div>
        {this.props.dispatch()}
      </div>
    )
  }
}

export default connect()(UserHistory)
