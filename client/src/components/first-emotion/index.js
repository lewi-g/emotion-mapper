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
    return (
      <div className="first-emotion">
      <Link to="/emotions/cheese"><p>Link</p></Link>
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

const mapStateToProps = (state) => ({
  emoChoices: state.emoReducer.emoChoices
})
export default connect(mapStateToProps)(FirstEmotion)
