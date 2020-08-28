import React from 'react'
import _ from 'lodash'
import Style from './style'
import * as images from 'src/ui/views/common/images'
import { Link } from 'react-router-dom'
import { paths } from 'src/constants'

export class AssignedOfferForm extends React.Component {
  render() {
    const {
      quantity,
      total,
      cart,
      product,
      offer,
      customer_locations,
      changeDeliverer,
      onCancel,
      order,
      onCustomerLocationChange,
    } = this.props
    const deliverer_name = _.get(offer, 'deliverer_name', 'Buscando...')
    const disableButton = deliverer_name === '-' || !customer_locations.length
    const selected_customer_location =
      customer_locations.find(loc => Number(loc.id) === Number(cart.customer_location_id)) || {}
    const style = {
      backgroundImage: `url(${images.getProductImageURL(product.code)})`,
      backgroundPosition: 'center',
    }
    return (
      <Style>
        <div className="title">Verifica tu pedido</div>
        <div className="address_container">
          <div className="text_title">
            {'ENTREGAR EN: '}
            <select onChange={onCustomerLocationChange} value={cart.customer_location_id || ''}>
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

        <div className="deliverer_container">
          <div className="text_title">TU REPARTIDOR:</div>
          <div className="delivererName">{deliverer_name}</div>
          <button className="changeDelivererButton" onClick={changeDeliverer}>
            Cambiar repartidor
          </button>
        </div>

        <div className="offer_container">
          <div className="text_title">TU ORDEN:</div>
          <div className="productContainer">
            <div className="image" style={style} />
            <div className="productDetailsContainer">
              <div className="productName">{product.name}</div>
              <div className="productPrice">Precio Unitario: ${offer.unit_price}</div>
              <div className="productPrice">
                Cantidad: {quantity}
              </div>
            </div>
          </div>
        </div>
        <div className="total_container">
          <div className="total">Total:</div>
          <div className="total">${total}</div>
        </div>
        <div className="button_container">
          <button className="cancel_button" onClick={onCancel}>
            Cancelar
          </button>
          <button
            className={disableButton ? 'disabledButton' : 'accept_button'}
            onClick={order}
            disabled={disableButton}>
            Pedir
          </button>
        </div>
      </Style>
    )
  }
}
