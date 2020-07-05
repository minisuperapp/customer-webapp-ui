import React from 'react'
import css from './styles.module.css'
import Deliverer from './Deliverer'

export class ChangeDeliverer extends React.Component {
  render() {
    return (
      <div>
        {this.props.offers.length
          ? this.props.offers.map((o) => <Deliverer offer={o} key={o.id} />)
          : 'Buscando repartidores...'}
        <button className={css.backButton} onClick={this.props.goToAssignedOffer}>
          Volver a Revisión de Orden
        </button>
      </div>
    )
  }
}
