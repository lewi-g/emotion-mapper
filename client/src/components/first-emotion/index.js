import React from 'react'
import './styles.css'

export default class FirstEmotion extends React.Component {
  render() {
    return (
      <div className="first-emotion">
        <h1>How are you feeling?</h1>
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
