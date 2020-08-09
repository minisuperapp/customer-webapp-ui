import React from 'react'
import DeliveryAddressForm from './DeliveryAddressForm'
import { connect } from 'react-redux'
import { add_customer_location_request } from 'src/state/actions/location_actions'
import { set_selected_customer_location } from 'src/state/actions/cart_actions'
import { paths } from 'src/constants'

class DeliveryAddressView extends React.Component {
  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  go_to_verify_order = () => {
    const { history } = this.props
    history.push(paths.assigned_offer)
  }

  on_accept = () => {
    const { history, add_customer_location_request, set_selected_customer_location } = this.props
    add_customer_location_request(this.state, customer_location => {
      set_selected_customer_location(customer_location.id)
      history.push(paths.assigned_offer)
    })
  }

  render() {
    return (
      <DeliveryAddressForm
        history={this.props.history}
        handleChange={this.handleChange}
        on_accept={this.on_accept}
        go_to_verify_order={this.props.go_to_verify_order}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    name,
    street,
    number,
    //apartment_number,
    neighborhood,
    city,
    postal_code,
    //state,
  } = state
  return {
    name: name,
    street: street,
    number: number,
    //apartment_number: '',
    neighborhood: neighborhood,
    city: city,
    postal_code: postal_code,
    state: 'Chihuahua',
    country: 'Mexico',
  }
}

const mapDispatchToProps = {
  add_customer_location_request,
  set_selected_customer_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressView)
