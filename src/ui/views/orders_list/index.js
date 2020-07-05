import React from 'react'
import { OrdersList } from './components/OrdersList'
import * as orderService from "../../../state/services/orders/index";

class OrdersListView extends React.Component {
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

export default OrdersListView
