import React, { Component } from 'react'
import { connect } from 'react-redux'
import _toLower from 'lodash.tolower'
import { get_orders_for_xday_request } from 'src/state/actions/order_actions'
import { show_alert_message } from 'src/state/actions/alert_actions'
import { ProductList } from './ProductList'
import { LoadingList } from './LoadingList'
import { paths } from 'src/constants'

class ProductsView extends Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    const { history, get_orders_for_xday_request, location, show_alert_message } = this.props
    if (!location.latitude || !location.longitude) {
      show_alert_message('Antes de comenzar, es necesario establecer tu ubicación.', () => {
        history.push(paths.location)
      })
    } else {
      get_orders_for_xday_request()
    }
  }

  handleProductSelection = product => () => {
    const { history } = this.props
    history.push({ pathname: paths.quantity, search: `?product_code=${product.code}` })
  }

  go_to_location = () => {
    const { history } = this.props
    history.push(paths.location)
  }

  render() {
    const { products, lowest_price_by_product, by_product, location, query, cart } = this.props

    const products_to_show = query
      ? products.filter(
          product =>
            _toLower(product.name).includes(_toLower(query)) ||
            _toLower(product.description).includes(_toLower(query)),
        )
      : products
    if (!products.length) {
      return <LoadingList />
    }
    return (
      <ProductList
        products={products_to_show}
        lowest_price_by_product={lowest_price_by_product}
        handleProductSelection={this.handleProductSelection}
        by_product={by_product}
        location={location}
        go_to_location={this.go_to_location}
        cart={cart}
      />
    )
  }
}

function mapStateToProps(state) {
  const { products, orders, location, cart } = state
  return {
    products: products.list,
    query: products.query,
    lowest_price_by_product: products.lowest_price_by_product,
    by_product: products.best_offers_by_product,
    orders,
    location,
    cart,
  }
}

const mapDispatchToProps = {
  get_orders_for_xday_request,
  show_alert_message,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)
