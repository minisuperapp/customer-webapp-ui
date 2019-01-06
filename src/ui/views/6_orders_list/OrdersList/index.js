import React from "react";
import { index } from 'src/ui/views/index'

export class OrdersList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      {this.props.orders.map(o => {
        return o.productQuantity + " " 
      })}
    </div>
  }

}
