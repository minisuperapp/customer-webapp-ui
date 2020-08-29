import React, { Component } from 'react'
import Style from './style'
import * as images from 'src/ui/views/common/images'

export class Product extends Component {
  render() {
    const { product, quantity, lowestPrice, handle_product_selection, remove_product } = this.props
    const style = {
      backgroundImage: `url(${images.getProductImageURL(product.code)})`,
      backgroundPosition: 'center',
    }
    const total = Number(quantity * lowestPrice).toFixed(2)
    return (
      <Style>
        <div className="image" style={style} />
        <div className="main_panel">
          <div className="text_title"> {product.name}</div>
          <div className="quantity">{`${quantity} ${product.quantity_type}`}</div>
          <div className="price">Precio unitario: ${lowestPrice}</div>
          <div className="total">Total: ${total}</div>
          <div className="buttons">
            <button onClick={remove_product(product.code)}>Eliminar</button>
            <button className="select_button" onClick={handle_product_selection(product)}>
              Modificar
            </button>
          </div>
        </div>
      </Style>
    )
  }
}
