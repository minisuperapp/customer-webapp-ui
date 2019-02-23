import React from 'react'
import css from './styles.module.css'

export class AssignedOffer extends React.Component {
  render() {
    const productImages = {
      ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
      RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
      CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`,
    }
    const style = {
      backgroundImage: productImages[this.props.params.product.code],
    }

    return (
      <div className={css.container}>
        <div className={css.textTitle}>Revise su orden</div>
        <div className={css.image} style={style}/>
        <div className={css.space}>
          <div className={css.normalText}>Producto:</div>
          <div className={css.priceText}>{this.props.params.product.name}</div>
        </div>
        <div className={css.space}>
          <div className={css.normalText}>Cantidad:</div>
          <div className={css.priceText}>{this.props.params.quantity}</div>
        </div>
        <div className={css.space}>
          <div className={css.normalText}>Precio:</div>
          <div className={css.priceText}>${this.props.offer.unitPrice}</div>
        </div>
        <div className={css.space}>
          <div className={css.normalText}>Total:</div>
          <div className={css.priceText}>${this.props.total}</div>
        </div>
        <div className={css.space}>
          <div className={css.normalText}>Proveedor:</div>
          <div className={css.priceText}>{this.props.offer.deliverer.name}</div>
        </div>
        <button className={css.button} onClick={this.props.changeDeliverer}>
          Cambiar proveedor
        </button>
        <p />
        <button className={css.button} onClick={this.props.order}>
          Pedir
        </button>
        <button className={css.backButton} onClick={this.props.onCancel}>
          Volver
        </button>
      </div>
    )
  }
}
