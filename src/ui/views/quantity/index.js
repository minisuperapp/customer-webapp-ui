import React from 'react'
import _ from 'lodash'
import { QuantityForm } from './QuantityForm'
import { set_selected_quantity } from 'src/state/actions/cart_actions'
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

  goToAssignedOffer = () => {
    const { history, set_selected_quantity } = this.props
    set_selected_quantity(this.state.quantity)
    history.push(paths.assigned_offer)
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
        goToAssignedOffer={this.goToAssignedOffer}
        addQuantity={this.addQuantity}
        goToProducts={this.goToProducts}
        subtractQuantity={this.subtractQuantity}
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
  set_selected_quantity,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityView)
