import React from 'react'
import css from './styles.module.css'
import * as images from 'src/ui/views/common/images'

export class AssignedOfferForm extends React.Component {
  render() {
    const style = {
      backgroundImage: images.getProductImageURL(this.props.params.product.code.toLocaleLowerCase())
    }
    return (
      <div className={css.container}>
        <div className={css.delivererContainer}>
          <div className={css.textTitle}>TU REPARTIDOR:</div>
          <div className={css.delivererName}>{this.props.offer.deliverer.name}</div>
          <button className={css.changeDelivererButton} onClick={this.props.changeDeliverer}>
            Cambiar repartidor
          </button>
        </div>

        <div className={css.offerContainer}>
          <div className={css.textTitle}>TU ORDEN:</div>
          <div className={css.productContainer}>
            <div className={css.image} style={style}/>
            <div className={css.productDetailsContainer}>
              <div className={css.productName}>{this.props.params.product.name}</div>
              <div className={css.productPrice}>Precio Unitario: ${this.props.offer.unitPrice}</div>
              <div className={css.productPrice}>Cantidad: {this.props.params.quantity}</div>
            </div>
          </div>
        </div>
        <div className={css.totalContainer}>
          <div>Total:</div>
          <div>${this.props.total}</div>
        </div>
        <div className={css.buttonContainer}>
          <button className={css.backButton} onClick={this.props.onCancel}>
            Cancelar
          </button>
          <button className={css.button} onClick={this.props.order}>
            Pedir
          </button>
        </div>
      </div>
    )
  }
}
