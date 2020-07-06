import React, { Component } from 'react'

import css from './styles.module.css'
import * as images from 'src/ui/views/common/images'

export class Product extends Component {
  render() {
    const style = {
      backgroundImage: `url(${images.getProductImageURL(
        this.props.product.code.toLocaleLowerCase(),
      )})`,
    }
    const price = this.props.lowestPrice
      ? `$${this.props.lowestPrice}  ${this.props.product.quantity_type}`
      : 'No disponible'
    return (
      <div className={css.container}>
        <div className={css.image} style={style} />
        <div className={css.mainPanel}>
          <div className={css.textTitle}> {this.props.product.name}</div>
          <div className={css.buyPanel}>
            <div className={css.price}>{price}</div>
          </div>
          {this.props.lowestPrice ? (
            <button
              className={css.button}
              onClick={this.props.handleProductSelection(this.props.product)}>
              Comprar
            </button>
          ) : (
            <button className={css.requestButton} onClick={() => alert('Producto solicitado.')}>
              Solicitar
            </button>
          )}
        </div>
      </div>
    )
  }
}
