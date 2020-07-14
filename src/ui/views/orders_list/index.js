import React from 'react'
import { OrdersList } from './components/OrdersList'
import * as orderService from '../../../state/services/orders/index'
import { connect } from 'react-redux'
import { get_current_orders_request } from '../../../state/actions/order_actions'

class OrdersListView extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    const { get_current_orders_request } = this.props
    get_current_orders_request()
  }
  render() {
    const { orders } = this.props
    return <OrdersList orders={orders} />
  }
}

function mapStateToProps(state) {
  const { orders } = state
  return {
    orders,
  }
}

const mapDispatchToProps = {
  get_current_orders_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersListView)
