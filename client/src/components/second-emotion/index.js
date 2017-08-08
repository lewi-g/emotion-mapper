import React from 'react'
import {connect} from 'react-redux'

class SecondEmotion extends React.Component {
  render () {
    return (
      <p>second page stuff!</p>
    )
  }
}

export default connect()(SecondEmotion)
