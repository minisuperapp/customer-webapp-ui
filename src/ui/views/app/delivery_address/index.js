import React from 'react'
import DeliveryAddressForm from './DeliveryAddressForm'
import { connect } from 'react-redux'
import { add_customer_address_request } from 'src/state/actions/address_actions'
import { set_selected_customer_location } from 'src/state/actions/cart_actions'
import { paths } from 'src/constants'

class DeliveryAddressView extends React.Component {
  state = {
    name: '',
    street: '',
    number: '',
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  go_to_verify_order = () => {
    const { history } = this.props
    history.push(paths.app.checkout)
  }

  on_accept = () => {
    const {
      history,
      location,
      add_customer_address_request,
      set_selected_customer_location,
    } = this.props
    const { postal_area_code, postal_area_name, postal_area_county, postal_area_state } = location
    const address = {
      ...this.state,
      neighborhood: postal_area_name,
      city: postal_area_county,
      state: postal_area_state,
      postal_code: postal_area_code,
      country: 'Mexico'
    }
    add_customer_address_request(address, customer_address => {
      set_selected_customer_location(customer_address.id)
      history.push(paths.app.checkout)
    })
  }

  on_cancel = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { name, street, number } = this.state
    const { location } = this.props
    return (
      <DeliveryAddressForm
        name={name}
        street={street}
        number={number}
        location={location}
        handleChange={this.handleChange}
        on_accept={this.on_accept}
        on_cancel={this.on_cancel}
        go_to_verify_order={this.props.go_to_verify_order}
      />
    )
  }
}

function mapStateToProps(state) {
  const { location } = state
  return {
    location,
  }
}

const mapDispatchToProps = {
  add_customer_address_request,
  set_selected_customer_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressView)
