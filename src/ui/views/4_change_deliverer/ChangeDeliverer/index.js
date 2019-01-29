import React from 'react'
import { styles } from './styles'

import Provider from './Provider'

export class ChangeDeliverer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.offers.length
          ? this.props.offers.map((o) => (<Provider offer={o} key={o.id} />))
          : 'Buscando repartidores...'}
        <button style={styles.backButton} onClick={this.props.goToAssignedOffer}>
          Volver a Revisión de Orden
        </button>
      </div>
    )
  }
}
