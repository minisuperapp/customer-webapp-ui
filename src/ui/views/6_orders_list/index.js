import React from 'react'
import { OrdersList } from './OrdersList/index'
import * as orderService from "../../../services/orders/index";

export class OrdersListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
    }
  }
  async componentDidMount() {
    const pendingOrders = await orderService.getOrdersPendingToDeliver()
    const orders = pendingOrders.data.orders
    this.setState({ orders })
  }
  render() {
    return <OrdersList {...this.state} />
  }
}
