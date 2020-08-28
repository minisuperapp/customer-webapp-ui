import React from 'react'
import _ from 'lodash'
import { QuantityForm } from './QuantityForm'
import { show_alert_message } from 'src/state/actions/alert_actions'
import { set_selected_quantity, add_product } from 'src/state/actions/cart_actions'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class QuantityView extends React.Component {
  state = {
    quantity: 0,
  }

  componentDidMount() {
    const { cart } = this.props
    this.setState({
      quantity: cart.product.minimum_buying_quantity,
    })
  }

  handleChange = event => {
    this.setState({
      quantity: event.target.value,
    })
  }

  go_to_search_best_offer = () => {
    const { history, set_selected_quantity } = this.props
    set_selected_quantity(this.state.quantity)
    history.push(paths.best_offer_searching)
  }

  add_to_cart = () => {
    const { cart, add_product, show_alert_message, history } = this.props
    add_product(cart.product.code, this.state.quantity)
    show_alert_message('Producto agregado!')
    history.push(paths.home)
  }

  addQuantity = () => {
    this.setState({
      quantity: Number(this.state.quantity) + Number(1),
    })
  }

  goToProducts = () => {
    this.props.history.push(paths.home)
  }

  subtractQuantity = () => {
    const { cart } = this.props
    if (this.state.quantity > cart.product.minimum_buying_quantity) {
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
    const { cart, price } = this.props
    const quantity = Math.max(
      this.state.quantity,
      Number(_.get(cart, 'product.minimum_buying_quantity', '0')),
    )
    const total = Number(quantity * price)
    return (
      <QuantityForm
        quantity={quantity}
        total={total}
        cart={cart}
        price={price}
        handleChange={this.handleChange}
        changeQuantity={this.changeQuantity}
        go_to_search_best_offer={this.go_to_search_best_offer}
        addQuantity={this.addQuantity}
        goToProducts={this.goToProducts}
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
    price: lowest_price_by_product[cart.product.code],
  }
}

const mapDispatchToProps = {
  show_alert_message,
  set_selected_quantity,
  add_product,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityView)
