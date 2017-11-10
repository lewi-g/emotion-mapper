import React from 'react'
import {connect} from 'react-redux'

export default class LandingPage extends React.Component {
  

  render() {
    return (
      <div className="landing-page">
        <h3>Dig Deep is an app designed to help you find the most 
          specific words to describe your emotions and keep track 
          of the events associated with the your emotional changes
        </h3>
        <h3>Using the emotion-wheel, you will be asked to dig deep,
          layer by layer until you put in your notes for the emotion at the time. 
        </h3>
      </div>
    )
  }
}
