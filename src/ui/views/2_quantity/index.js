import React from 'react'
import { views } from 'src/ui/views/index'
import { styles } from './Quantity/styles'
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

  render() {
    const productImages = {
      ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
      RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
      CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`,
    }
    styles.image = {
      display: 'flex',
      marginTop: '50px',
      justifyContent: 'center',
      backgroundImage: productImages[this.props.params.product.code],
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '100px',
      width: '100px',
    }

    return (
      <Quantity
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        goToAssignedOffer={this.goToAssignedOffer}
        addQuantity={this.addQuantity}
        goToProducts={this.goToProducts}
        subtractQuantity={this.subtractQuantity}
      />
    )
  }
}
