import React from 'react'
import { QuantityForm } from './components/QuantityForm'

class QuantityView extends React.Component {
  constructor(props) {
    super(props)
    if (props.previousState) {
      this.state = props.previousState
    } else {
      this.state = {
        quantity: props.params.product.minimum_buying_quantity,
        total: Number(props.params.product.minimum_buying_quantity * props.params.lowestPrice),
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value,
      total: Number(event.target.value) * Number(this.props.params.lowestPrice),
    })
  }

  goToAssignedOffer = () => {
    // this.props.changeView(views.ASSIGNED_OFFER, {
    //   product: this.props.params.product,
    //   quantity: this.state.quantity,
    // })
  }

  addQuantity = () => {
    this.setState({
      quantity: Number(this.state.quantity) + Number(1),
      total: (Number(this.state.quantity) + Number(1)) * Number(this.props.params.lowestPrice),
    })
  }

  goToProducts = () => {
    // this.props.changeView(views.PRODUCTS)
  }

  subtractQuantity = () => {
    if (this.state.quantity > this.props.params.product.minimum_buying_quantity) {
      this.setState({
        quantity: Number(this.state.quantity) - Number(1),
        total: (Number(this.state.quantity) - Number(1)) * Number(this.props.params.lowestPrice),
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
    return (
      <QuantityForm
        {...this.state}
        {...this.props}
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

export default QuantityView
