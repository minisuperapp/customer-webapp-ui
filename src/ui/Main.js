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

  changeView = (view, params) => {
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
                           changeView={this.changeView}
                           params={this.state.nextStepParams}
          />
        </div>
    );
  }
}

export default Main;
