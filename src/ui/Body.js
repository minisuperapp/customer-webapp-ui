import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductsPage } from "./1_products";
import { QuantityPage } from "./2_quantity";

class Body extends Component {
  render() {
    return <Router>
      <div>
        <Route path="/" render={() => <ProductsPage {...this.props}/>} />
        <Route path="/quantity" render={() => <QuantityPage {...this.props}/>} />
      </div>
    </Router>
  }
}

export default Body
