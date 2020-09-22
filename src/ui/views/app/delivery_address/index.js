import React from 'react'
import DeliveryAddressForm from './DeliveryAddressForm'
import { connect } from 'react-redux'
import { add_customer_address_request } from 'src/state/actions/address_actions'
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
    history.push(paths.app.checkout)
  }

  on_accept = () => {
    const { history, add_customer_address_request, set_selected_customer_location } = this.props
    add_customer_address_request(this.state, customer_address => {
      set_selected_customer_location(customer_address.id)
      history.push(paths.app.checkout)
    })
  }

  on_cancel = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    return (
      <DeliveryAddressForm
        history={this.props.history}
        handleChange={this.handleChange}
        on_accept={this.on_accept}
        on_cancel={this.on_cancel}
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
    apartment_number,
    neighborhood,
    city,
    postal_code,
    //state,
  } = state
  return {
    name: name,
    street: street,
    number: number,
    apartment_number: apartment_number,
    neighborhood: neighborhood,
    city: city,
    postal_code: postal_code,
    state: 'Chihuahua',
    country: 'Mexico',
  }
}

const mapDispatchToProps = {
  add_customer_address_request,
  set_selected_customer_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressView)
