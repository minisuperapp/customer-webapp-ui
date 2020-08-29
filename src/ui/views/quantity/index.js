import React from 'react'
import { QuantityForm } from './QuantityForm'
import { show_alert_message } from 'src/state/actions/alert_actions'
import { get_product_by_code } from 'src/state/services/products'
import { add_product } from 'src/state/actions/cart_actions'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import queryString from 'query-string'

class QuantityView extends React.Component {
  state = {
    product: {},
    quantity: 0,
  }

  async componentDidMount() {
    const { cart } = this.props
    const { product_code } = queryString.parse(this.props.location.search)
    const product = await get_product_by_code(product_code)
    const quantity = cart.products[product.code]
      ? cart.products[product.code].quantity
      : product.minimum_buying_quantity
    this.setState({
      quantity,
      product,
    })
  }

  handleChange = event => {
    this.setState({
      quantity: event.target.value,
    })
  }

  add_to_cart = () => {
    const { add_product, history, lowest_price_by_product } = this.props
    const { product } = this.state
    const price = lowest_price_by_product[product.code]
    add_product(product.code, this.state.quantity, price)
    history.push(paths.cart)
  }

  addQuantity = () => {
    this.setState({
      quantity: Number(this.state.quantity) + Number(1),
    })
  }

  cancel = () => {
    this.props.history.goBack()
  }

  subtractQuantity = () => {
    const { product } = this.state
    if (this.state.quantity > product.minimum_buying_quantity) {
      this.setState({
        quantity: Number(this.state.quantity) - Number(1),
      })
    }
  }

  changeQuantity = event => {
    const quantity = event.target.validity.valid ? event.target.value : this.state.quantity
    this.setState({
      quantity,
    })
  }

  render() {
    const { lowest_price_by_product } = this.props
    const { product } = this.state
    const price = lowest_price_by_product[product.code]
    const quantity = Math.max(this.state.quantity, Number(product.minimum_buying_quantity || '0'))
    const total = Number(quantity * price)
    return (
      <QuantityForm
        quantity={quantity}
        total={total}
        product={product}
        price={price}
        handleChange={this.handleChange}
        changeQuantity={this.changeQuantity}
        addQuantity={this.addQuantity}
        cancel={this.cancel}
        subtractQuantity={this.subtractQuantity}
        add_to_cart={this.add_to_cart}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    cart,
    best_offers: { lowest_price_by_product },
  } = state
  return {
    cart,
    lowest_price_by_product,
  }
}

const mapDispatchToProps = {
  show_alert_message,
  add_product,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityView)
