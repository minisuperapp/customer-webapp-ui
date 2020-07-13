import React, { Component } from 'react'
import { connect } from 'react-redux'
import { set_selected_product } from 'src/state/actions/cart_actions'
import { get_current_orders_request } from 'src/state/actions/order_actions'
import { ProductList } from './components/ProductList'
import { LoadingList } from './components/LoadingList'

import Style from './style'

class ProductsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offersByProduct: {},
      lowestPriceByProduct: {},
      error: '',
      locationDisabled: false,
    }
  }

  async componentDidMount() {
    const { get_current_orders_request } = this.props
    get_current_orders_request()
  }

  handleProductSelection = (product) => () => {
    const { history, set_selected_product } = this.props
    set_selected_product(product)
    history.push('/quantity')
  }

  handleNavigateToOrdersList = () => {
    const { history } = this.props
    history.push('/orders_list')
  }

  render() {
    const { products, lowest_price_by_product, orders } = this.props
    if (this.state.locationDisabled === true) {
      return 'Habilita tu localización'
    }
    if (!products.length) {
      return <LoadingList />
    }
    return (
      <Style>
        <ProductList
          products={products}
          lowest_price_by_product={lowest_price_by_product}
          handleProductSelection={this.handleProductSelection}
        />
        {!!orders.length && (
          <button className="ordersButton" onClick={this.handleNavigateToOrdersList}>
            Ver órdenes ({orders.length})
          </button>
        )}
      </Style>
    )
  }
}

function mapStateToProps(state) {
  const {
    products,
    offers: { lowest_price_by_product },
    orders,
  } = state
  return {
    products: products.list,
    lowest_price_by_product,
    orders,
  }
}

const mapDispatchToProps = {
  set_selected_product,
  get_current_orders_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)
