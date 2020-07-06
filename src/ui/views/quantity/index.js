import React from 'react'
import { QuantityForm } from './components/QuantityForm'
import { set_selected_quantity } from 'src/state/actions/cart_actions'
import { connect } from 'react-redux'

class QuantityView extends React.Component {
  state = {
    quantity: 0,
    total: 0,
  }

  componentDidMount() {
    const { selected_product, price } = this.props
    this.setState({
      quantity: selected_product.minimum_buying_quantity,
      total: Number(selected_product.minimum_buying_quantity * price),
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
    history.push('/assigned_offer')
  }

  addQuantity = () => {
    const { price } = this.props
    this.setState({
      quantity: Number(this.state.quantity) + Number(1),
      total: (Number(this.state.quantity) + Number(1)) * Number(price),
    })
  }

  goToProducts = () => {
    this.props.history.push('/')
  }

  subtractQuantity = () => {
    const { selected_product, price } = this.props
    if (this.state.quantity > selected_product.minimum_buying_quantity) {
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
    const { selected_product, price } = this.props
    return (
      <QuantityForm
        {...this.state}
        {...this.props}
        selected_product={selected_product}
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
    cart: { product },
    offers: { lowest_price_by_product },
  } = state
  return {
    selected_product: product,
    price: lowest_price_by_product[product.code],
  }
}

const mapDispatchToProps = {
  set_selected_quantity
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityView)
