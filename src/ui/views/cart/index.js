import React, { Component } from 'react'
import { connect } from 'react-redux'
import { remove_product } from 'src/state/actions/cart_actions'
import { ProductList } from './ProductList'
import { paths } from 'src/constants'

class CartView extends Component {
  constructor(props) {
    super(props)
  }

  handle_product_selection = product => () => {
    const { history } = this.props
    history.push({ pathname: paths.quantity, search: `?product_code=${product.code}` })
  }

  go_to_search_best_offer = () => {
    const { history } = this.props
    history.push({ pathname: paths.best_offer_searching })
  }

  remove_product = product_code => () => {
    const { remove_product } = this.props
    remove_product(product_code)
  }

  render() {
    const { cart, products_index, lowest_price_by_product } = this.props
    return (
      <ProductList
        cart={cart}
        products_index={products_index}
        lowest_price_by_product={lowest_price_by_product}
        handle_product_selection={this.handle_product_selection}
        go_to_search_best_offer={this.go_to_search_best_offer}
        remove_product={this.remove_product}
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
  remove_product,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)