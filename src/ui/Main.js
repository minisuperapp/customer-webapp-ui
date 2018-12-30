import React, {Component} from "react";
import Header from "./Header";
import {views} from './Views'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      view: views.PRODUCTS,
      nextStepParams: {}
    }
  }

  onStepDone = (view, params) => {
    this.setState({
      view,
      nextStepParams: params
    })
  }

  render() {
    return (
        <div>
          <Header/>
          <this.state.view {...this.props}
                           onStepDone={this.onStepDone}
                           params={this.state.nextStepParams}
          />
        </div>
    );
  }
}

export default Main;
