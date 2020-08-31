import React from 'react'
import { OrdersList } from './OrdersList'
import { connect } from 'react-redux'
import { get_current_orders_request } from 'src/state/actions/order_actions'
import EmptyOrdersMessage from './EmptyOrdersMessage'
import { paths } from 'src/constants'

class OrdersListView extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    const { get_current_orders_request } = this.props
    get_current_orders_request()
  }
  go_to_products = () => {
    const { history } = this.props
    history.push(paths.home)
  }

  render() {
    const { orders, products_by_code } = this.props
    if (!Object.keys(orders).length) {
      return <EmptyOrdersMessage />
    }
    return (
      <OrdersList
        orders={orders}
        products_by_code={products_by_code}
        go_to_products={this.go_to_products}
      />
    )
  }
}

function mapStateToProps(state) {
  const { orders, products } = state
  return {
    orders,
    products_by_code: products.by_code,
  }
}

const mapDispatchToProps = {
  get_current_orders_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersListView)
