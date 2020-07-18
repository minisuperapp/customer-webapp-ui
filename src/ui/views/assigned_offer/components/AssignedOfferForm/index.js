import React from 'react'
import _ from 'lodash'
import Style from './style'
import * as images from 'src/ui/views/common/images'

export class AssignedOfferForm extends React.Component {
  render() {
    const { cart, offer, changeDeliverer, onCancel, order } = this.props
    const deliverer_name = _.get(offer, 'deliverer.name', 'Buscando...')
    const style = {
      backgroundImage: `url(${images.getProductImageURL(cart.product.code)})`,
    }
    return (
      <Style>
        <div className="title">Verifica tu pedido</div>
        <div className="delivererContainer">
          <div className="textTitle">TU REPARTIDOR:</div>
          <div className="delivererName">{deliverer_name}</div>
          <button className="changeDelivererButton" onClick={changeDeliverer}>
            Cambiar repartidor
          </button>
        </div>

        <div className="offerContainer">
          <div className="textTitle">TU ORDEN:</div>
          <div className="productContainer">
            <div className="image" style={style} />
            <div className="productDetailsContainer">
              <div className="productName">{cart.product.name}</div>
              <div className="productPrice">Precio Unitario: ${offer.unitPrice}</div>
              <div className="productPrice">Cantidad: {cart.quantity}</div>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div>Total:</div>
          <div>${this.props.total}</div>
        </div>
        <div className="buttonContainer">
          <button className="backButton" onClick={onCancel}>
            Cancelar
          </button>
          <button
            className={deliverer_name !== '-' ? 'button' : 'disabledButton'}
            onClick={order}
            disabled={deliverer_name === '-'}>
            Pedir
          </button>
        </div>
      </Style>
    )
  }
}
