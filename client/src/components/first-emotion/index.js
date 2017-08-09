import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Link} from 'react-router-dom'

import {goDeeper} from '../../actions'

class FirstEmotion extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params)
  }
  processEmotion(emotion){
    this.props.dispatch(goDeeper(emotion))
  }

  render() {
    if (this.props.emoChoices === null) {
        return (
          <div>
            <p>{this.props.emoTiers[2]}</p>
            <button type="submit">BUTTON</button>
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
