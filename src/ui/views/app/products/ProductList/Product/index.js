import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Style from './style'
import * as images from 'src/ui/views/app/common/images'

export class Product extends Component {
  quantity_type_map = {
    PZ: ' ',
  }
  render() {
    const { product } = this.props
    const quantity_type =
      this.quantity_type_map[product.quantity_type] || product.quantity_type
    const price = this.props.lowestPrice
      ? `$${Number(this.props.lowestPrice).toFixed(2)}  ${quantity_type}`
      : 'No disponible'
    return (
      <Style>
        <div className="image_container">
          <LazyLoadImage
            className="image"
            alt={product.name}
            src={images.getProductImageURL(product.code)}
          />
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
