import React, { Component } from "react";
import Header from "./Header";
import { ProductsPage } from "./1_products";
import { QuantityPage } from "./2_quantity";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductsPage {...this.props} />
        <QuantityPage {...this.props} />
      </div>
    );
  }
}

export default Main;
