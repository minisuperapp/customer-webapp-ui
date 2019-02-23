import React from 'react'
import { views } from 'src/ui/views/index'
import { Quantity } from './Quantity'

export class QuantityView extends React.Component {
  constructor(props) {
    super(props)
    if (props.previousState) {
      this.state = props.previousState
    } else {
      this.state = {
        quantity: props.params.product.minimumBuyingQuantity,
        total: Number(props.params.product.minimumBuyingQuantity * props.params.lowestPrice),
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
    this.props.changeView(views.ASSIGNED_OFFER, {
      product: this.props.params.product,
      quantity: this.state.quantity,
    })
  }

  addQuantity = () => {
    this.setState({
      quantity: Number(this.state.quantity) + Number(1),
      total: (Number(this.state.quantity) + Number(1)) * Number(this.props.params.lowestPrice),
    })
  }

  goToProducts = () => {
    this.props.changeView(views.PRODUCTS)
  }

  subtractQuantity = () => {
    if (this.state.quantity > this.props.params.product.minimumBuyingQuantity) {
      this.setState({
        quantity: Number(this.state.quantity) - Number(1),
        total: (Number(this.state.quantity) - Number(1)) * Number(this.props.params.lowestPrice),
      })
    }
  }
  
  changeQuantity = (event) => {
      const quantity = (event.target.validity.valid) ? event.target.value : this.state.quantity;
          this.setState({
            quantity,
            total: event.target.value * Number(this.props.params.lowestPrice)
      })
    
  }

  render() {
    return (
      <Quantity
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
