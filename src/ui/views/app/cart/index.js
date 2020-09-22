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
    history.push({ pathname: paths.app.quantity, search: `?product_code=${product.code}` })
  }

  go_to_checkout = () => {
    const { history, customer_addresses } = this.props
    if (!customer_addresses.length) {
      history.push({ pathname: paths.app.delivery_address })
    } else {
      history.push({ pathname: paths.app.checkout })
    }
  }

  go_to_products = () => {
    const { history } = this.props
    history.push({ pathname: paths.app.index })
  }

  remove_product = product_code => () => {
    const { remove_product } = this.props
    remove_product(product_code)
  }

  render() {
    const { cart, total, products_index } = this.props
    return (
      <ProductList
        cart={cart}
        total={total}
        products_index={products_index}
        handle_product_selection={this.handle_product_selection}
        go_to_checkout={this.go_to_checkout}
        go_to_products={this.go_to_products}
        remove_product={this.remove_product}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    cart,
    customer_addresses,
    products: { by_code },
  } = state

  return {
    cart,
    products_index: by_code,
    total: cart.total,
    customer_addresses,
  }
}

const mapDispatchToProps = {
  remove_product,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
