import React from 'react'
import {CheckoutDetails} from './CheckoutDetails'
import {connect} from 'react-redux'
import {paths} from 'src/constants'
import {set_selected_customer_location} from 'src/state/actions/cart_actions'
import {assign_best_offer_request} from 'src/state/actions/offer_actions'
import {place_order_request, get_orders_for_xday_request} from 'src/state/actions/order_actions'
import {show_alert_message} from 'src/state/actions/alert_actions'

class CheckoutView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customer_address_id: null,
      errors: null,
    }
  }

  async componentDidMount() {
    const {
      cart,
      customer_addresses,
      set_selected_customer_location,
      assign_best_offer_request,
    } = this.props
    if (customer_addresses.length) {
      set_selected_customer_location(customer_addresses[0].id)
    }
    assign_best_offer_request(cart.products, errors => {
      this.setState({errors})
    })
  }

  on_customer_location_change = event => {
    const {set_selected_customer_location} = this.props
    set_selected_customer_location(event.target.value)
  }

  place_order = async () => {
    const {
      history,
      cart,
      place_order_request,
      get_orders_for_xday_request,
      show_alert_message,
    } = this.props
    const offers = cart.offers.quantities
    place_order_request(
      {
        offers,
        customer_address_id: cart.customer_address_id,
      },
      () => {
        get_orders_for_xday_request()
        history.push(paths.orders_list)
      },
      (response) => {
        const products = response.data.map(e => `${e.product}(${e.quantity})`).join('\n')
        show_alert_message(
          `No hay suficiente cantidad de estos productos.\n ${products}`,
        )
      },
    )
  }

  on_cancel = async () => {
    const {history} = this.props
    history.push({pathname: paths.cart})
  }

  render() {
    const {cart, customer_addresses, products_index} = this.props
    return (
      <CheckoutDetails
        cart={cart}
        customer_addresses={customer_addresses}
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
    customer_addresses,
    products: {by_code},
  } = state
  return {
    cart,
    customer_addresses,
    products_index: by_code,
  }
}

const mapDispatchToProps = {
  assign_best_offer_request,
  place_order_request,
  set_selected_customer_location,
  get_orders_for_xday_request,
  show_alert_message,
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutView)
