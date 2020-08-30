import { place_order_request } from 'src/state/actions/order_actions'
import React from 'react'
import { CheckoutDetails } from './CheckoutDetails'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import { set_selected_customer_location } from 'src/state/actions/cart_actions'
import { assign_best_offer_request } from 'src/state/actions/offer_actions'

class CheckoutView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer_location_id: null,
      errors: null,
    }
  }
  async componentDidMount() {
    const {
      cart,
      customer_locations,
      set_selected_customer_location,
      assign_best_offer_request,
    } = this.props
    if (customer_locations.length) {
      set_selected_customer_location(customer_locations[0].id)
    }
    assign_best_offer_request(cart.products, errors => {
      this.setState({ errors })
    })
  }

  on_customer_location_change = event => {
    const { set_selected_customer_location } = this.props
    set_selected_customer_location(event.target.value)
  }

  place_order = async () => {
    const { cart, place_order_request } = this.props
    const offers = cart.offers.quantities
    place_order_request({
      offers,
      customer_location_id: cart.customer_location_id,
    })
  }

  on_cancel = async () => {
    const { history } = this.props
    history.push({ pathname: paths.cart })
  }

  render() {
    const { cart, customer_locations, products_index } = this.props
    return (
      <CheckoutDetails
        cart={cart}
        customer_locations={customer_locations}
        products_index={products_index}
        place_order={this.place_order}
        on_cancel={this.on_cancel}
        on_customer_location_change={this.on_customer_location_change}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    cart,
    customer_locations,
    products: { by_code },
  } = state
  return {
    cart,
    customer_locations,
    products_index: by_code,
  }
}

const mapDispatchToProps = {
  assign_best_offer_request,
  place_order_request,
  set_selected_customer_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutView)
