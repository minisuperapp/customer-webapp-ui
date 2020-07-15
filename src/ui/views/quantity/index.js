import React from 'react'
import { QuantityForm } from './components/QuantityForm'
import { set_selected_quantity } from 'src/state/actions/cart_actions'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class QuantityView extends React.Component {
  state = {
    quantity: 0,
    total: 0,
  }

  componentDidMount() {
    const { cart, price } = this.props
    this.setState({
      quantity: cart.product.minimum_buying_quantity,
      total: Number(cart.product.minimum_buying_quantity * price),
    })
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value,
      total: Number(event.target.value) * Number(this.props.params.lowestPrice),
    })
  }

  goToAssignedOffer = () => {
    const { history, set_selected_quantity } = this.props
    set_selected_quantity(this.state.quantity)
    history.push(paths.assigned_offer)
  }

  addQuantity = () => {
    const { price } = this.props
    this.setState({
      quantity: Number(this.state.quantity) + Number(1),
      total: (Number(this.state.quantity) + Number(1)) * Number(price),
    })
  }

  goToProducts = () => {
    this.props.history.push(paths.home)
  }

  subtractQuantity = () => {
    const { cart, price } = this.props
    if (this.state.quantity > cart.product.minimum_buying_quantity) {
      this.setState({
        quantity: Number(this.state.quantity) - Number(1),
        total: (Number(this.state.quantity) - Number(1)) * Number(price),
      })
    }
  }

  changeQuantity = (event) => {
    const quantity = event.target.validity.valid ? event.target.value : this.state.quantity
    this.setState({
      quantity,
      total: event.target.value * Number(this.props.params.lowestPrice),
    })
  }

  render() {
    const { cart, price } = this.props
    return (
      <QuantityForm
        quantity={this.state.quantity}
        total={this.state.total}
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
    offers: { lowest_price_by_product },
  } = state
  return {
    cart,
    price: lowest_price_by_product[cart.product.code],
  }
}

const mapDispatchToProps = {
  set_selected_quantity
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityView)
