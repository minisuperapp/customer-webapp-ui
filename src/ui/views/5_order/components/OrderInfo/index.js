import React from 'react'
import css from './styles.module.css'
import * as images from 'src/ui/views/common/images'

export class OrderInfo extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${images.getProductImageURL(this.props.params.product.code.toLocaleLowerCase())})`
    }
    return (
      <div className={css.container}>
        <div className={css.delivererContainer}>
          <div className={css.textTitle}>TU REPARTIDOR:</div>
          <div className={css.delivererName}>{this.props.params.offer.deliverer.name}</div>
          <button className={css.trackDelivererButton} onClick={this.props.changeDeliverer}>
            Rastrear repartidor
          </button>
        </div>

        <div className={css.offerContainer}>
          <div className={css.textTitle}>TU ORDEN:</div>
          <div className={css.productContainer}>
            <div className={css.image} style={style}/>
            <div className={css.productDetailsContainer}>
              <div className={css.productName}>{this.props.params.product.name}</div>
              <div className={css.productPrice}>Precio Unitario: ${this.props.params.offer.unitPrice}</div>
              <div className={css.productPrice}>Cantidad: {this.props.params.quantity}</div>
            </div>
          </div>
        </div>
        <div className={css.totalContainer}>
          <div>Total:</div>
          <div>${this.props.params.order.total}</div>
        </div>
        <div className={css.buttonContainer}>
          <button className={css.backButton} onClick={this.props.onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    )
  }
}
