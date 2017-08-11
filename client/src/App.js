import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css'
import EmotionParent from './components/emotion-parent'
import UserHistory from './components/user-history'
{/*import UserLogin from './components/user-login'*/}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1><Link to="/emotions">Man Up!</Link></h1>
            <h2><Link to="/user-history">See My History</Link></h2>
          </header>
          <main>
            <div className="main-div">
              {/*<Route exact path="/login" component={UserLogin} />*/}
              <Route path="/emotions" component={EmotionParent} />
              <Route exact path="/user-history" component={UserHistory} />
            </div>
          </main>
        </div>
      </Router>
    );
  }
}


