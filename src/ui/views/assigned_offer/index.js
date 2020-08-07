import { place_order_request } from 'src/state/actions/order_actions'
import { assign_best_offer_request } from 'src/state/actions/offer_actions'
import React from 'react'
import { AssignedOfferForm } from './AssignedOfferForm'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class AssignedOfferView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer_location_id: null,
    }
  }
  async componentDidMount() {
    const { cart, assign_best_offer_request } = this.props
    if (!cart.offer.id) {
      assign_best_offer_request({
        product_code: cart.product.code,
        quantity: cart.quantity,
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.customer_location_id && this.props.customer_locations.length) {
      this.setState({
        customer_location_id: this.props.customer_locations[0].id
      })
    }
  }

  changeDeliverer = async () => {
    const { history } = this.props
    history.push(paths.change_deliverer)
  }

  onCustomerLocationChange = (event) => {
    this.setState({
      customer_location_id: Number(event.target.value),
    })
  }

  order = async () => {
    const { cart, place_order_request, customer_locations } = this.props
    const offer = cart.offer
    place_order_request({
      offerId: offer.code,
      quantity: cart.quantity,
      customer_location_id: this.state.customer_location_id,
    })
  }

  onCancel = async () => {
    const { history } = this.props
    history.push(paths.quantity)
  }

  render() {
    const { cart, total, customer_locations } = this.props
    const offer = cart.offer
    return (
      <AssignedOfferForm
        cart={cart}
        offer={offer}
        total={total}
        customer_locations={customer_locations}
        changeDeliverer={this.changeDeliverer}
        order={this.order}
        onCancel={this.onCancel}
        onCustomerLocationChange={this.onCustomerLocationChange}
      />
    )
  }
}

function mapStateToProps(state) {
  const { cart, customer_locations } = state
  const total = Number(cart.offer.unit_price) * Number(cart.quantity)
  return {
    cart,
    total,
    customer_locations,
  }
}

const mapDispatchToProps = {
  place_order_request,
  assign_best_offer_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignedOfferView)
