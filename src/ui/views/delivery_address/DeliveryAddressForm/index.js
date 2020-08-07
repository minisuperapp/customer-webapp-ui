import React from 'react'
import { connect } from 'react-redux'
import { add_customer_location_request } from 'src/state/actions/location_actions'
import { set_selected_customer_location } from 'src/state/actions/cart_actions'
import Style from './style'
import { paths } from 'src/constants'

class DeliveryAddressForm extends React.Component {
  state = {
    name: '',
    street: '',
    number: '',
    apartment_number: '',
    neighborhood: '',
    city: '',
    postal_code: '33000',
    state: 'Chihuahua',
    country: 'Mexico',
  }

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
    const {
      name,
      street,
      number,
      apartment_number,
      neighborhood,
      city,
      postal_code,
      state,
    } = this.state
    return (
      <Style>
        <div className="title">Ingresa el lugar de entrega</div>
        <div className="body">
          <div className="name">
            <label htmlFor="name">Tipo de lugar</label>
            <input
              name="name"
              placeholder="ej. casa, oficina, taller"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="street">
            <label htmlFor="street">Calle</label>
            <input
              name="street"
              placeholder="calle"
              type="text"
              value={street}
              onChange={this.handleChange}
            />
          </div>
          <div className="exterior-number">
            <label htmlFor="number">Número</label>
            <input
              name="number"
              placeholder="número exterior"
              type="number"
              value={number}
              onChange={this.handleChange}
            />
          </div>
          <div className="neighboorhood">
            <label htmlFor="neighborhood">Colonia</label>
            <input
              name="neighborhood"
              placeholder="colonia"
              type="text"
              value={neighborhood}
              onChange={this.handleChange}
            />
          </div>
          <div className="city">
            <label htmlFor="city">Ciudad</label>
            <input
              name="city"
              placeholder="ciudad"
              type="text"
              value={city}
              onChange={this.handleChange}
            />
          </div>
          <div className="zip-code">
            <label htmlFor="postal_code">Código Postal</label>
            <input
              name="postal_code"
              placeholder="código postal"
              type="number"
              value={postal_code}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="btn">
          <button className="accept_button" onClick={this.on_accept}>
            Agregar lugar de entrega
          </button>
        </div>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  add_customer_location_request,
  set_selected_customer_location,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressForm)
