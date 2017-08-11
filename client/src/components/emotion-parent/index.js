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
        <Route exact path="/emotions" component={FirstEmotion} />
        <Route exact path="/submitted" component={SubmitPage} />
      </div>
    )
  }
}

export default connect()(EmotionParent)
