import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import FirstEmotion from '../first-emotion'
import SubmitPage from '../submit-page'

import './index.css'


class EmotionParent extends React.Component {
  render() {
    return (
      <div className="emotion-parent">
        <h1>How are you feeling?</h1>
        <Route exact path="/emotions/" component={FirstEmotion} />
        <Route exact path="/emotions/submit-page" component={SubmitPage} />
      </div>
    )
  }
}

export default connect()(EmotionParent)
