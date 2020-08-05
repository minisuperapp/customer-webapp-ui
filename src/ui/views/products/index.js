import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import { set_selected_product } from 'src/state/actions/cart_actions'
import { get_current_orders_request } from 'src/state/actions/order_actions'
import { ProductList } from './components/ProductList'
import { LoadingList } from './components/LoadingList'
import { paths } from 'src/constants'

class ProductsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: null,
    }
  }
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
    this.setState({
      query: _.toLower(value),
    })
  }

  go_to_location = () => {
    const { history } = this.props
    history.push(paths.location)
  }

  render() {
    const { products, lowest_price_by_product, by_product, location } = this.props
    if (!location.latitude || !location.longitude) {
      return <Redirect to={paths.location} />
    }
    const { query } = this.state
    const products_to_show = query
      ? products.filter(
          product =>
            _.toLower(product.name).includes(query) ||
            _.toLower(product.description).includes(query),
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
        handleProductSearch={this.handleProductSearch}
        by_product={by_product}
        location={location}
        go_to_location={this.go_to_location}
      />
    )
  }
}

function mapStateToProps(state) {
  const { products, best_offers, orders, location } = state
  return {
    products: products.list,
    lowest_price_by_product: best_offers.lowest_price_by_product,
    by_product: best_offers.by_product,
    orders,
    location,
  }
}

const mapDispatchToProps = {
  set_selected_product,
  get_current_orders_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)
