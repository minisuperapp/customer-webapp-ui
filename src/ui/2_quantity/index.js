import * as productsService from "src/services/products";
import * as offersService from "src/services/offers";
import React from "react";

export class QuantityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.params.product.minimumBuyingQuantity,
      total: Number(props.params.product.minimumBuyingQuantity * props.params.lowestPrice)
    }
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value,
      total: Number(event.target.value) * Number(this.props.params.lowestPrice)
    });
  }

  render() {
    return <div>
      <input type="text" value={this.state.quantity} onChange={this.handleChange}/> {this.props.params.product.quantityType} de {this.props.params.product.name}
      <div>Total: ${this.state.total}</div>
      <button>Buscar repartidor</button>
    </div>
  }

}
