import React from 'react'
import { OrdersList } from './components/OrdersList'
import * as orderService from "../../../services/orders/index";

export class OrdersListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
    }
  }
  async componentDidMount() {
    const orders = await orderService.getOrdersPendingToDeliver()
    this.setState({ orders })
  }
  render() {
    return <OrdersList {...this.state} changeView={this.props.changeView} />
  }
}
