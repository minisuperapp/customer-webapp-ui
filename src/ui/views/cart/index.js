import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import { get_current_orders_request } from 'src/state/actions/order_actions'
import { ProductList } from './ProductList'
import {paths} from "../../../constants";

class CartView extends Component {
  constructor(props) {
    super(props)
  }

  handle_product_selection = product => () => {
    const { history } = this.props
    history.push({pathname: paths.quantity, search: `?product_code=${product.code}`})
  }

  render() {
    const { cart, products_index, lowest_price_by_product } = this.props
    return (
      <ProductList
        cart={cart}
        products_index={products_index}
        lowest_price_by_product={lowest_price_by_product}
        handle_product_selection={this.handle_product_selection}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    cart,
    products: { by_code },
    best_offers,
  } = state
  return {
    cart,
    products_index: by_code,
    lowest_price_by_product: best_offers.lowest_price_by_product,
  }
}

const mapDispatchToProps = {
  get_current_orders_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
