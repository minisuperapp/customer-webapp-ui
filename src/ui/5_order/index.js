import React from "react";
import { views } from 'src/ui/Views'

export class OrderView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <p>Tu pedido esta en camino.</p>
      <p>Tu repartidor: {this.props.params.offer.deliverer.name}</p>
      <p>Tu orden:</p>
      <p>{this.props.params.order.productQuantity} {this.props.params.product.quantityType} de {this.props.params.product.name}</p>
      <p>Total: ${this.props.params.order.total}</p>
    </div>
  }

}
