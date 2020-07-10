import React from 'react'
import Style from './style'
import * as images from 'src/ui/views/common/images'

export class AssignedOfferForm extends React.Component {
  render() {
    const { cart } = this.props
    const style = {
      backgroundImage: `url(${images.getProductImageURL(cart.product.code.toLocaleLowerCase())})`,
    }
    return (
      <Style>
        <div className="delivererContainer">
          <div className="textTitle">TU REPARTIDOR:</div>
          <div className="delivererName">{this.props.offer.deliverer.name}</div>
          <button className="changeDelivererButton" onClick={this.props.changeDeliverer}>
            Cambiar repartidor
          </button>
        </div>

        <div className="offerContainer">
          <div className="textTitle">TU ORDEN:</div>
          <div className="productContainer">
            <div className="image" style={style} />
            <div className="productDetailsContainer">
              <div className="productName">{cart.product.name}</div>
              <div className="productPrice">Precio Unitario: ${this.props.offer.unitPrice}</div>
              <div className="productPrice">Cantidad: {cart.quantity}</div>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div>Total:</div>
          <div>${this.props.total}</div>
        </div>
        <div className="buttonContainer">
          <button className="backButton" onClick={this.props.onCancel}>
            Cancelar
          </button>
          <button
            className={this.props.offer.deliverer.name !== '-' ? 'button' : 'disabledButton'}
            onClick={this.props.order}
            disabled={this.props.offer.deliverer.name === '-'}>
            Pedir
          </button>
        </div>
      </Style>
    )
  }
}
