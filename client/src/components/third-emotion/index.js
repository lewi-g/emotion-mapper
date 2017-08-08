import React from 'react'
import {connect} from 'react-redux'

class SecondEmotion extends React.Component {
  render () {
    return (
      <p>third page stuff!</p>
    )
  }
}

export default connect()(SecondEmotion)
