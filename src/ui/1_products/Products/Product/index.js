import React from "react";
import { views } from 'src/ui/Views'

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          {this.props.product.name} - ${this.props.lowestPrice}
          {this.props.lowestPrice &&
          <button onClick={() => this.props.changeView(views.QUANTITY, {
            product: this.props.product,
            lowestPrice: this.props.lowestPrice
          })}>Comprar</button>}
        </div>
    );
  }
}
