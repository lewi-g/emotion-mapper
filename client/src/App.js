import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import EmotionParent from './components/emotion-parent'
import UserHistory from './components/user-history'
{/*import UserLogin from './components/user-login'*/}


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Man Up!</h1>
            <h2><Link to="/user-history">See My History</Link></h2>
          </header>
            <main>
              {/*<Route exact path="/login" component={UserLogin} />*/}
              <Route path="/emotions" component={EmotionParent} />
              <Route exact path="/user-history" component={UserHistory} />
            </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
