import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hide_alert_message } from 'src/state/actions/alert_actions'
import Style from './style'

class Alert extends Component {
  handle_accept = () => {
    const {
      hide_alert_message,
      alert: { on_accept },
    } = this.props
    hide_alert_message()
    on_accept && on_accept()
  }
  render() {
    const {
      alert: { message, ok_button_name },
    } = this.props
    if (message) {
      return (
        <Style>
          <div className="message">{message}</div>
          <button className="close" onClick={this.handle_accept}>
            {ok_button_name}
          </button>
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

const mapDispatchToProps = {
  hide_alert_message,
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
