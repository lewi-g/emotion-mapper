import React from 'react'
import {connect} from 'react-redux'

class FirstEmotion extends React.Component {
  render() {
    return (
      <div className="first-emotion">
        <ul>
          <li>Happy</li>
          <li>Sad</li>
          <li>Surpised</li>
          <li>Bad</li>
          <li>Disgusted</li>
          <li>Fearful</li>
          <li>Angry</li>
        </ul>
      </div>
    )
  }
}

export default connect()(FirstEmotion)
