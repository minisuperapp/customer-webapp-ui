import React from 'react'
import css from './styles.module.css'

export class Order extends React.Component {
  render() {
    return <div>
      {this.props.status === 'STARTED' && 'Tu pedido se ha enviado.'}
      {this.props.status === 'IN_TRANSIT' && 'Tu pedido esta en camino!'}
      <p>Tu repartidor: {this.props.params.offer.deliverer.name}</p>
      <p>Tu orden:</p>
      <p>{this.props.params.order.productQuantity} {this.props.params.product.quantityType} de {this.props.params.product.name}</p>
      <p>Total: ${this.props.params.order.total}</p>
      <button className={css.backButton} onClick={this.props.goToProducts}>
          Volver a productos
        </button>
    </div>
  }
}
