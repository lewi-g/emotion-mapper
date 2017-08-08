import React from 'react'
import {connect} from 'react-redux'

class SubmitPage extends React.Component {
  render() {
    return (
      <p>Submit sturf</p>
    )
  }
}

export default connect()(SubmitPage)
