import React, { Component } from "react";
import { ProductsPage } from "./1_products";
import { QuantityPage } from "./2_quantity";

class Body extends Component {
  render() {
    return (
      <div>
        <ProductsPage {...this.props} />
        <QuantityPage {...this.props} />
      </div>
    );
  }
}

export default Body;
