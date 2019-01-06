import React from "react";
import { views } from 'src/ui/views/index'

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
