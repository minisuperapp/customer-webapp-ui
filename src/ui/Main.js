import React, {Component} from "react";
import Header from "./Header";
import {ProductsPage} from "./1_products";
import {QuantityPage} from "./2_quantity";

class Main extends Component {
  steps = {
    PRODUCTS: {
      page: ProductsPage,
      nextStep: this.QUANTITY
    },
    QUANTITY: {
      page: QuantityPage
    }
  }
  constructor() {
    super()
    this.state = {
      step: this.steps.PRODUCTS
    }
  }

  onStepDone = () => {
    debugger
    this.setState({
      step: this.state.step.nextStep
    })
  }

  render() {
    return (
        <div>
          <Header/>
          <this.state.step.page {...this.props} onStepDone={this.onStepDone}/>
        </div>
    );
  }
}

export default Main;
