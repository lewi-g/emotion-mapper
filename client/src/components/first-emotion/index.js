import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Link} from 'react-router-dom'

import {goDeeper} from '../../actions'
import {postUserEntry} from '../../actions/postEntry'

class FirstEmotion extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params)
  }
  processEmotion(emotion){
    this.props.dispatch(goDeeper(emotion))
  }
  submitEntry(e){
    e.preventDefault();
    const inputBody = this.input;
    this.props.dispatch(postUserEntry(inputBody));
  }

  render() {
    if (this.props.emoChoices === null) {
        return (
          <div>
            <p>{this.props.emoTiers[2]}</p>
            <form onSubmit={e => this.submitEntry(e)}>
              <fieldset>
                <input type="text" name="userEntry" id="userEntry"
                  className="text" placeholder="Add your Entry" required
                  ref={input => this.input = input} />
                   <button type="submit" id="entryButton" className="button" name="submit">Submit Entry</button>
              </fieldset>
            </form>
          </div>
        )
      } else {
        return (
          <div className="first-emotion">

            <form onSubmit={e => e.preventDefault()}>
              <fieldset>
                {this.props.emoChoices.map((emotion, index) =>
                  <button onClick={e => this.processEmotion(emotion)} type="submit" key={index}>{emotion}</button>
                )}
              </fieldset>
            </form>
          </div>
        )
      }
  }
}
const mapStateToProps = (state) => ({
    emoTiers: state.emoReducer.emoTiers,
    emoChoices: state.emoReducer.emoChoices
});
export default connect(mapStateToProps)(FirstEmotion)
