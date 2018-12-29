import * as productsService from "src/services/products";
import * as offersService from "src/services/offers";
import React from "react";

export class QuantityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.params.product.minimumBuyingQuantity
    }
  }

  render() {
    return <div>
      <input value={this.state.quantity}/> {this.props.params.product.quantityType} de {this.props.params.product.name}
    </div>
  }

}
