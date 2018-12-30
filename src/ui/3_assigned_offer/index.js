import * as productsService from "src/services/products";
import * as offersService from "src/services/offers";
import React from "react";

export class AssignedOfferView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div>
      <p>Assigned Offer</p>
      Product {this.props.params.product.name}
      Quantity {this.props.params.quantity}
    </div>
  }

}
