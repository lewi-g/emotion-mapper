import React from 'react'
import {connect} from 'react-redux'

import {goDeeper} from '../../actions'
import {postUserEntry} from '../../actions/postEntry'

import './index.css'

class FirstEmotion extends React.Component {

  processEmotion(emotion){
    this.props.dispatch(goDeeper(emotion))
  }
  submitEntry(e){
    e.preventDefault();
    const inputsomething = this.emoInput;
    const inputBody = this.input;
    this.props.dispatch(postUserEntry(inputBody, inputsomething));
  }

  render() {
    if (this.props.emoChoices === null) {
        return (
          <div className="container">
            {this.props.showForm ?
              <form className="form" onSubmit={e => this.submitEntry(e)}>
                <h3>Today, I am feeling... {this.props.emoTiers[2]}</h3>
                <fieldset>
                  <input type="text" name="userEmotion" id="userEmotion"
                    className="userEmotion" hidden value={this.props.emoTiers[2]} required
                    ref={input => this.emoInput = input} />
                  <input type="text" name="userComment" id="userComment"
                    className="text" placeholder="Why are you feeling this way?" required
                    ref={input => this.input = input} />
                  <button type="submit" id="entryButton" className="button" name="submit">Submit Entry</button>
                </fieldset>
              </form>
              : <h1>You have submitted your entry!</h1>
            }
          </div>
        )
      } else {
        return (
          <div className="first-emotion">
            <h1>How are you feeling?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <fieldset>
                {this.props.emoChoices.map((emotion, index) =>
                  <button onClick={e => this.processEmotion(emotion)} type="submit" key={index}>{emotion.toUpperCase()}</button>
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
    emoChoices: state.emoReducer.emoChoices,
    showForm: state.postEntry.showForm
});
export default connect(mapStateToProps)(FirstEmotion)
