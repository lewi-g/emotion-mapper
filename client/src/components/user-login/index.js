import React from 'react'
import { connect } from 'react-redux'

class UserLogin extends React.Component {

  submitUser(event) {
    event.preventDefault()
    const userName = this.input
    const passWord = this.passwordInput
  }

  render() {
    return (
      <div className="user-login">
        <form onSubmit={e => this.submitUser(e)}>
          <fieldset>
            <label for="username">Username:</label>
            <input type="text" name="username" id="username"
              className="username-input" required
              ref={input => this.input = input} />
            <label for="password">Password:</label>
            <input type="text" name="password" id="password"
              className="password-input" required
              ref={passwordInput => this.input = passwordInput} />
            <button type="submit" id="user-submit-button" className="button" name="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect()(UserLogin)
