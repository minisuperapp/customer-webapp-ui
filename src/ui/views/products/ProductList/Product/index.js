import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Style from './style'
import * as images from 'src/ui/views/common/images'

export class Product extends Component {
  render() {
    const { product } = this.props
    const price = this.props.lowestPrice
      ? `$${this.props.lowestPrice}  ${product.quantity_type}`
      : 'No disponible'
    return (
      <Style>
        <div className="image_container">
          <LazyLoadImage className="image" alt={product.name} src={images.getProductImageURL(product.code)} />
        </div>
        <div className="main_panel">
          <div className="text_title"> {product.name}</div>
          <div className="price">{price}</div>
          {this.props.lowestPrice ? (
            <div className="buttons">
              <button
                className="select_button"
                onClick={this.props.handleProductSelection(product)}>
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
