import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css'
import FirstEmotion from './components/first-emotion'
import UserHistory from './components/user-history'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1><Link to="/">Dig Deep</Link></h1>
          </header>
          <main>
            <div className="main-div">
              <h2><Link to="/emotions">Start New Entry</Link></h2>
              <h2><Link to="/user-history">See My History</Link></h2>
              <Route path="/emotions" component={FirstEmotion} />
              <Route exact path="/user-history" component={UserHistory} />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}


