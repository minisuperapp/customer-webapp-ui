import React from 'react'
import Style from './style'
import DelivererList from './DelivererList'

export class ChangeDeliverer extends React.Component {
  render() {
    const { cancel, offers } = this.props
    return (
      <Style>
        <div className="title">Selecciona tu repartidor</div>
        <DelivererList offers={offers} />
        <button className="cancel_button" onClick={cancel}>
          Cancelar
        </button>
      </Style>
    )
  }
}
