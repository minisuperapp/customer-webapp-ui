import React from 'react'
import _ from 'lodash'
import Style from './style'
import * as images from 'src/ui/views/common/images'
import {Link} from 'react-router-dom'
import {paths} from 'src/constants'
import customer_locations from '../../../../state/reducers/customer_locations_reducer'

export class AssignedOfferForm extends React.Component {
  render() {
    const {
      cart,
      offer,
      customer_locations,
      changeDeliverer,
      onCancel,
      order,
      onCustomerLocationChange,
    } = this.props

    const deliverer_name = _.get(offer, 'deliverer_name', 'Buscando...')
    const disableButton = deliverer_name === '-' || !customer_locations.length
    const selected_customer_location = customer_locations.find(
      loc => loc.id === cart.customer_location_id,
    )
    const style = {
      backgroundImage: `url(${images.getProductImageURL(cart.product.code)})`,
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

            <Link to={paths.delivery_address}>Agregar lugar de entrega</Link>
            <div>
              {customer_locations.map(location => {
                return (
                  <div style={{padding: '10px'}} key={location.id}>
                    Verifica tus datos de entrega:
                    <div>{location.street}</div>
                    <div>{location.number}</div>
                    <div>{location.neighborhood}</div>
                    <div>{location.city}</div>
                  </div>
                )
              })}
            </div>
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
            <div className="image" style={style}/>
            <div className="productDetailsContainer">
              <div className="productName">{cart.product.name}</div>
              <div className="productPrice">Precio Unitario: ${offer.unit_price}</div>
              <div className="productPrice">Cantidad: {cart.quantity}</div>
            </div>
          </div>
        </div>
        <div className="total_container">
          <div>Total:</div>
          <div>${this.props.total}</div>
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
