import React from "react";

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          {this.props.product.name} - ${this.props.lowestPrice}
          {this.props.lowestPrice &&
          <button onClick={() => this.props.onStepDone({product: this.props.product })}>Comprar</button>}
        </div>
    );
  }
}
