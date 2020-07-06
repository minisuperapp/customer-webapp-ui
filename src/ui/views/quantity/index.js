import React from 'react'
import { QuantityForm } from './components/QuantityForm'
import { get_product_request, set_selected_product } from '../../../state/actions/product_actions'
import { get_offers_by_product_request } from '../../../state/actions/offer_actions'
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
    //   product: this.props.params.product,
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
    products: { selected },
    offers: { lowest_price_by_product },
  } = state
  return {
    selected_product: selected,
    price: lowest_price_by_product[selected.code],
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityView)
