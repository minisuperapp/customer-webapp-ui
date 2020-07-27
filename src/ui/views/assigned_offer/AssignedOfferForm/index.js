import React from 'react'
import _ from 'lodash'
import Style from './style'
import * as images from 'src/ui/views/common/images'
import { Link } from 'react-router-dom'
import { paths } from 'src/constants'

export class AssignedOfferForm extends React.Component {
  render() {
    const { cart, offer, changeDeliverer, onCancel, order } = this.props
    const deliverer_name = _.get(offer, 'deliverer_name', 'Buscando...')
    const style = {
      backgroundImage: `url(${images.getProductImageURL(cart.product.code)})`,
      backgroundPosition: 'center',
    }
    return (
      <Style>
        <div className="title">Verifica tu pedido</div>

        <div className="address_container">
          <div className="text_title">
            ENTREGAR EN: <Link to={paths.delivery_address}>Indicar lugar de entrega</Link>
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
          <button className="backButton" onClick={onCancel}>
            Cancelar
          </button>
          <button
            className={deliverer_name !== '-' ? 'accept_button' : 'disabledButton'}
            onClick={order}
            disabled={deliverer_name === '-'}>
            Pedir
          </button>
        </div>
      </Style>
    )
  }
}
