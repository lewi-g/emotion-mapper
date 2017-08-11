import React from 'react'
import {connect} from 'react-redux'

import {fetchUserEntriesSuccess} from '../../actions/getEntries'
import {fetchUserEntries} from '../../actions/getEntries'

import './index.css'

class UserHistory extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUserEntries())
  }
  render () {
    const entryList = this.props.userEntries.map((entry, i) => {
      const {id, emotion, comment, timeOfEvent }=entry;
      return (
      <div className="row entry">
        <div className="emotion-div"><p>Emotion: {emotion}</p></div>
        <div className="comment-div"><p>Comment: {comment}</p></div>
        <div className="time-div"><p>Time of Event: {timeOfEvent}</p></div>
      </div>
      )
    })
    return (
      <div className="container">
        {entryList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEntries: state.getEntries.userEntries
})
export default connect(mapStateToProps)(UserHistory)
