import React, { Component } from 'react'

import Style from './style'
import * as images from 'src/ui/views/common/images'

export class Product extends Component {
  render() {
    const style = {
      backgroundImage: `url(${images.getProductImageURL(this.props.product.code)})`,
    }
    const price = this.props.lowestPrice
      ? `$${this.props.lowestPrice}  ${this.props.product.quantity_type}`
      : 'No disponible'
    return (
      <Style>
        <div className="image" style={style} />
        <div className="mainPanel">
          <div className="textTitle"> {this.props.product.name}</div>
          <div className="buyPanel">
            <div className="price">{price}</div>
          </div>
          {this.props.lowestPrice ? (
            <button
              className="button"
              onClick={this.props.handleProductSelection(this.props.product)}>
              Comprar
            </button>
          ) : (
            <button className="requestButton" onClick={() => alert('Producto solicitado.')}>
              Solicitar
            </button>
          )}
        </div>
      </Style>
    )
  }
}
