import React, { Component } from 'react'

import Style from './style'
import * as images from 'src/ui/views/common/images'

export class Product extends Component {
  render() {
    const style = {
      backgroundImage: `url(${images.getProductImageURL(this.props.product.code)})`,
      backgroundPosition: 'center',
    }
    const price = this.props.lowestPrice
      ? `$${this.props.lowestPrice}  ${this.props.product.quantity_type}`
      : 'No disponible'
    return (
      <Style>
        <div className="image" style={style} />
        <div className="main_panel">
          <div className="text_title"> {this.props.product.name}</div>
          <div className="price">{price}</div>
          {this.props.lowestPrice ? (
            <div className="buttons">
              <button
                className="select_button"
                onClick={this.props.handleProductSelection(this.props.product)}>
                Seleccionar
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Style>
    )
  }
}
