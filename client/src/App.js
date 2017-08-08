import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import UserLogin from './components/user-login'
import FirstEmotion from './components/first-emotion'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1><Link to="/">Man-Up!</Link></h1>
            <h2><Link to="/">See My History</Link></h2>
          </header>
            <main>
              <Route exact path="/login" component={UserLogin} />
              <Route exact path="/first-page" component={FirstEmotion} />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
