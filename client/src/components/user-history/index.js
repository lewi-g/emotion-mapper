import React from 'react'
import {connect} from 'react-redux'

import {fetchUserEntries} from '../../actions/getEntries'

import './index.css'

class UserHistory extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUserEntries())
  }
  render () {
    const entryList = this.props.userEntries.map((entry, i) => {
      const { emotion, comment, timeOfEvent } = entry;
      return (
      <div className="entry">
        <div className="data emotion-div"><p><strong>Emotion: </strong>{emotion.charAt(0).toUpperCase() + emotion.slice(1)}</p></div>
        <div className="data comment-div"><p><strong>Comment: </strong>{comment}</p></div>
        <div className="data time-div"><p><strong>Time of Event: </strong>{timeOfEvent}</p></div>
      </div>
      );
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
