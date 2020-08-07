import React, { Component } from 'react'
import Style from './style'

class EmptyOrdersMessage extends Component {
  render() {
    return (
      <Style>
        <div className="message">No tienes ordenes pendientes de recibir</div>
      </Style>
    )
  }
}

export default EmptyOrdersMessage
