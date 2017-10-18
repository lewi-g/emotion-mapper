import React from 'react';
import {Route} from 'react-router-dom';

import FirstEmotion from '../first-emotion'

import './index.css'


export default class EmotionParent extends React.Component {
  render() {
    return (
      <div className="emotion-parent">
        <Route exact path="/emotions" component={FirstEmotion} />
      </div>
    )
  }
}


