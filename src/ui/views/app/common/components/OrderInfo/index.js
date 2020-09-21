import React from 'react'
import Style from './style'
import * as images from 'src/ui/views/app/common/images'

export class OrderInfo extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${images.getProductImageURL(this.props.params.product.code)})`,
      backgroundPosition: 'center',
    }
    return (
      <Style>
        <div className="delivererContainer">
          <div className="textTitle">TU REPARTIDOR:</div>
          <div className="delivererName">{this.props.params.offer.deliverer.name}</div>
          <button className="trackDelivererButton" onClick={this.props.changeDeliverer}>
            Rastrear repartidor
          </button>
        </div>

        <div className="offerContainer">
          <div className="textTitle">TU ORDEN:</div>
          <div className="productContainer">
            <div className="image" style={style} />
            <div className="productDetailsContainer">
              <div className="productName">{this.props.params.product.name}</div>
              <div className="productPrice">
                Precio Unitario: ${this.props.params.offer.unitPrice}
              </div>
              <div className="productPrice">Cantidad: {this.props.params.quantity}</div>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div>Total:</div>
          <div>${this.props.params.order.total}</div>
        </div>
      </Style>
    )
  }
}
