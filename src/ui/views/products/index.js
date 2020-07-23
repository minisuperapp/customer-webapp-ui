import React, { Component } from 'react'
import { connect } from 'react-redux'
import { set_selected_product } from 'src/state/actions/cart_actions'
import { get_current_orders_request } from 'src/state/actions/order_actions'
import { search_product_request } from 'src/state/actions/product_actions'
import { ProductList } from './components/ProductList'
import { LoadingList } from './components/LoadingList'
import { paths } from 'src/constants'

class ProductsView extends Component {
  async componentDidMount() {
    const { get_current_orders_request } = this.props
    get_current_orders_request()
  }

  handleProductSelection = product => () => {
    const { history, set_selected_product } = this.props
    set_selected_product(product)
    history.push(paths.quantity)
  }

  handleProductSearch = event => {
    const { value } = event.target
    const { search_product_request } = this.props
    search_product_request(value)
  }

  render() {
    const { products, lowest_price_by_product } = this.props
    if (!products.length) {
      return <LoadingList />
    }
    return (
      <ProductList
        products={products}
        lowest_price_by_product={lowest_price_by_product}
        handleProductSelection={this.handleProductSelection}
        handleProductSearch={this.handleProductSearch}
      />
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
    filtered_by_code: products.filtered.by_code,
  }
}

const mapDispatchToProps = {
  set_selected_product,
  get_current_orders_request,
  search_product_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)
