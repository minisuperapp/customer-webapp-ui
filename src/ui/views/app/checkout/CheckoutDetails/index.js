import React from 'react'
import Style from './style'
import { Link } from 'react-router-dom'
import { paths } from 'src/constants'

export class CheckoutDetails extends React.Component {
  render() {
    const {
      cart,
      products_index,
      customer_addresses,
      on_cancel,
      place_order,
      on_customer_location_change,
    } = this.props
    const offers_index = cart.offers.index
    const offers_quantities = cart.offers.quantities
    const selected_customer_location =
      customer_addresses.find(loc => Number(loc.id) === Number(cart.customer_address_id)) || {}
    const disableButton = !customer_addresses.length
    return (
      <Style>
        <div className="title">Verifica tu pedido</div>
        <div className="text_title">{'ENTREGAR EN: '}</div>
        <div className="address_container">
          <div className="address_selection">
            <select
              className="address_list"
              onChange={on_customer_location_change}
              value={cart.customer_address_id || ''}>
              {customer_addresses.map(location => {
                return (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                )
              })}
            </select>
            <Link className="add_address_link" to={paths.app.delivery_address}>
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
        <div className="text_title">{'TU ORDEN: '}</div>
        <div className="offers_container">
          {Object.keys(offers_index).map(offer_code => {
            const offer = offers_index[offer_code]
            const quantity = Number(offers_quantities[offer_code])
            const unit_price = Number(offer.unit_price)
            const total = (quantity * unit_price).toFixed(2)
            return (
              <div key={offer_code} className="offer_item">
                * {quantity} {products_index[offer.product_code].quantity_type}{' '}
                {products_index[offer.product_code].name} - <i>${total}</i>
                <hr />
              </div>
            )
          })}
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
            className={disableButton ? 'disabled_button' : 'accept_button'}
            onClick={place_order}
            disabled={disableButton}>
            Enviar Orden
          </button>
        </div>
      </Style>
    )
  }
}
