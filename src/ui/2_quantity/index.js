import React from "react";
import { views } from 'src/ui/Views'

export class QuantityView extends React.Component {
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

  changeView = () => {
    this.props.changeView(views.ASSIGNED_OFFER, {
      product: this.props.params.product,
      quantity: this.state.quantity
    })
  }

  render() {
    return <div>
      <input type="text" value={this.state.quantity} onChange={this.handleChange}/> {this.props.params.product.quantityType} de {this.props.params.product.name}
      <div>Total: ${this.state.total}</div>
      <button onClick={this.changeView}>Buscar repartidor</button>
    </div>
  }

}
