import React from 'react'
import _ from 'lodash'
import Style from './style'
import * as images from 'src/ui/views/common/images'
import { Link } from 'react-router-dom'
import { paths } from 'src/constants'

export class AssignedOfferForm extends React.Component {
  render() {
    const {
      cart,
      customer_locations,
      on_cancel,
      place_order,
      on_customer_location_change,
    } = this.props
    const selected_customer_location =
      customer_locations.find(loc => Number(loc.id) === Number(cart.customer_location_id)) || {}
    const disableButton = !customer_locations.length
    return (
      <Style>
        <div className="title">Verifica tu pedido</div>
        <div className="address_container">
          <div className="text_title">{'ENTREGAR EN: '}</div>
          <div className="address_selection">
            <select
              className="address_list"
              onChange={on_customer_location_change}
              value={cart.customer_location_id || ''}>
              {customer_locations.map(location => {
                return (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                )
              })}
            </select>
            <Link className="add_address_link" to={paths.delivery_address}>
              Agregar lugar
            </Link>
          </div>
          <div className="address">
            <div>
              {selected_customer_location.street} {selected_customer_location.number}
            </div>
            <div>{selected_customer_location.neighborhood}</div>
            <div>{selected_customer_location.city}</div>
          </div>
        </div>

        <div className="total_container">
          <div className="total">Total:</div>
          <div className="total">${cart.total}</div>
        </div>
        <div className="button_container">
          <button className="cancel_button" onClick={on_cancel}>
            Ver Carrito
          </button>
          <button
            className={disableButton ? 'disabledButton' : 'accept_button'}
            onClick={place_order}
            disabled={disableButton}>
            Pedir
          </button>
        </div>
      </Style>
    )
  }
}
