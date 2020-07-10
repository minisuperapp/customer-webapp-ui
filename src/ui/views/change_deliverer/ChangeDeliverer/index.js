import React from 'react'
import Style from './style'
import Deliverer from './Deliverer'

export class ChangeDeliverer extends React.Component {
  render() {
    return (
      <Style>
        {this.props.offers.length
          ? this.props.offers.map((o) => <Deliverer offer={o} key={o.id} />)
          : 'Buscando repartidores...'}
        <button className="backButton" onClick={this.props.goToAssignedOffer}>
          Volver a Revisión de Orden
        </button>
      </Style>
    )
  }
}
