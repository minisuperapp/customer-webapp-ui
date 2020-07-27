import React from 'react'
import Style from './style'
import DelivererList from './DelivererList'

export class ChangeDeliverer extends React.Component {
  render() {
    const { cancel, offers } = this.props
    return (
      <Style>
        <DelivererList offers={offers} />
        <button onClick={cancel}>Cancelar</button>
      </Style>
    )
  }
}
