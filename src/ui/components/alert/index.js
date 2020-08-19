import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hide_alert_message } from '../../../state/actions/alert_actions'
import Style from './style'

class Alert extends Component {
  hideAlert = () => {
    const { hide_alert_message } = this.props
    hide_alert_message()
  }
  render() {
    const {
      alert: { message },
    } = this.props
    if (message) {
      return (
        <Style>
          <div className="alert-box">
            <button className="close" onClick={this.hideAlert}>
              X
            </button>
            <br />
            {message}
          </div>
        </Style>
      )
    }
    return null
  }
}

function mapStateToProps(state) {
  const { alert } = state
  return {
    alert,
  }
}

<<<<<<< HEAD
const mapDispatchToProps = {
  hide_alert_message,
}
=======
const mapDispatchToProps = {}
>>>>>>> origin/master

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
