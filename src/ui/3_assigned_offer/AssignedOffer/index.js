import React from "react";
import {views} from 'src/ui/Views'

export class AssignedOffer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <p>Assigned Offer</p>
          <p>Producto {this.props.params.product.name}</p>
          <p>Cantidad {this.props.params.quantity}</p>
          <p>Tu Repartidor {this.props.offer.deliverer.name}</p>
          <p>Precio {this.props.offer.unitPrice}</p>
        </div>
    );
  }
}
