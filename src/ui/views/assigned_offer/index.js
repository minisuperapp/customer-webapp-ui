import { place_order_request } from 'src/state/actions/order_actions'
import React from 'react'
import { AssignedOfferForm } from './AssignedOfferForm'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import { set_selected_customer_location } from 'src/state/actions/cart_actions'
import { show_alert_message } from '../../../state/actions/alert_actions'

class AssignedOfferView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer_location_id: null,
      errors: null,
    }
  }
  async componentDidMount() {
    const { customer_locations, set_selected_customer_location } = this.props
    if (customer_locations.length) {
      set_selected_customer_location(customer_locations[0].id)
    }
  }

  changeDeliverer = async () => {
    const { history } = this.props
    history.push(paths.change_deliverer)
  }

  onCustomerLocationChange = event => {
    const { set_selected_customer_location } = this.props
    set_selected_customer_location(event.target.value)
  }

  order = async () => {
    const { cart, place_order_request } = this.props
    const offer = cart.offer
    place_order_request({
      deliverer_id: offer.deliverer_id,
      offer_code: offer.code,
      quantity: cart.quantity,
      customer_location_id: cart.customer_location_id,
    })
  }

  onCancel = async () => {
    const { history } = this.props
    history.push(paths.quantity)
  }

  render() {
    const { errors } = this.state
    const { show_alert_message } = this.props
    if (errors && errors.length && errors[0].message === 'no.offers.available') {
      show_alert_message('El producto ya no esta disponible. Intenta mas tarde.')
    }
    const { cart, total, customer_locations } = this.props
    const offer = cart.offer
    if (Number(cart.offer.available_quantity) < Number(cart.quantity)) {
      show_alert_message(
        `El repartidor solo cuenta con ${cart.offer.available_quantity} ${cart.product.quantity_type} ${cart.product.name}`,
      )
    }
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
  show_alert_message,
  place_order_request,
  set_selected_customer_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignedOfferView)
