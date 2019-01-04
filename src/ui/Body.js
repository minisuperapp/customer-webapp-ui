import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductsPage } from "./1_products";
import { QuantityPage } from "./2_quantity";
import {styles} from "./styles"

class Body extends Component {
  render() {
    return (
      <Router>
        <div style = {styles.body}>
          <Route exact path="/" render={() => <ProductsPage {...this.props} />} />
          <Route exact path="/quantity" render={() => <QuantityPage {...this.props} />} />
        </div>
      </Router>
    );
  }
}

export default Body;
