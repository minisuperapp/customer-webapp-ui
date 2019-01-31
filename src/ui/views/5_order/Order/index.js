import React from 'react'
import { views } from 'src/ui/views/index'
import { styles } from './styles'

export class Order extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
<<<<<<< HEAD
    return <div>
      {this.props.status === 'STARTED' && 'Tu pedido se ha enviado.'}
      {this.props.status === 'IN_TRANSIT' && 'Tu pedido esta en camino!'}
      <p>Tu repartidor: {this.props.params.offer.deliverer.name}</p>
      <p>Tu orden:</p>
      <p>{this.props.params.order.productQuantity} {this.props.params.product.quantityType} de {this.props.params.product.name}</p>
      <p>Total: ${this.props.params.order.total}</p>
      <button style={styles.backButton} onClick={this.props.goToProducts}>
          Volver a productos
        </button>
    </div>
=======
    return (
      <div style={styles.container}>
        <div style={styles.textTilte}>
          {this.props.status === 'STARTED' && 'Tu pedido se ha enviado.'}
          {this.props.status === 'IN_TRANSIT' && 'Tu pedido esta en camino!'}
        </div>
        <div style={styles.textTilte}>Tu repartidor: {this.props.params.offer.deliverer.name}</div>
        <div style={styles.textTilte}>
          Tu orden: {this.props.params.order.productQuantity}{' '}
          {this.props.params.product.quantityType} de {this.props.params.product.name}
        </div>
        <div style={styles.textTilte}>Total: ${this.props.params.order.total}</div>
        <button style={styles.backButton}>Volver</button>
      </div>
    )
>>>>>>> origin/master
  }
}
