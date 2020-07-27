import React from 'react'
import Style from './style'
import Deliverer from './Deliverer'

export class ChangeDeliverer extends React.Component {
  render() {
    const { cancel, offers } = this.props
    return (
      <Style>
        {offers.map(offer => (
          <Deliverer offer={offer} key={offer.code} />
        ))}
        <button onClick={cancel}>
          Volver a Revisión de Orden
        </button>
      </Style>
    )
  }
}
