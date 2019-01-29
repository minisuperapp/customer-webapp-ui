import React, { Component } from 'react'

export default class Label extends Component {
  render() {
    return (
      <div>
        <label>{this.props.value}</label>
      </div>
    )
  }
}
