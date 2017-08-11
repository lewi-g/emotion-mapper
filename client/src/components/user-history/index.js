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
      return <p key={id}>
        ------------------------------------------------------------- <br />
        Emotion: {emotion} <br />
        Comment: {comment} <br />
        Time of Event: {timeOfEvent}
      </p>
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
