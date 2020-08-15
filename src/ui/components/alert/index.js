import React, { Component } from 'react'
import { connect } from 'react-redux'

class Alert extends Component {
  render() {
    const message = this.props.alert
    alert(message)
  }
}

function mapStateToProps(state) {
  const { alert } = state
  return {
    alert,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
