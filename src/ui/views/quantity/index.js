import React from 'react'
import { QuantityForm } from './components/QuantityForm'
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
    // this.props.changeView(views.ASSIGNED_OFFER, {
    //   quantity: this.state.quantity,
    // })
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityView)
