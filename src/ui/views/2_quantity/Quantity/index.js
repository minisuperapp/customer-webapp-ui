import React from 'react'
import css from './styles.module.css'
import Label from 'src/Components/Label'

export class Quantity extends React.Component {
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
        <div className={css.image} style={style}/>
        <div className={css.productName}>{this.props.params.product.name}</div>
        <Label value={'$' + this.props.params.lowestPrice + ' / ' + this.props.params.product.quantityType}/>
        <div className={css.quantity}>Cantidad</div>
        <div className={css.spinners}>
          <button className={css.subtractButton} onClick={this.props.subtractQuantity}>
            -
          </button>
          <input
            className={css.input}
            type="Text"
            pattern="[0-9]*"
            value={this.props.quantity}
            onInput={this.props.changeQuantity.bind(this)}
          />
          <button className={css.addButton} onClick={this.props.addQuantity}>
            +
          </button>
        </div>
        <div className={css.totalContainer}>
          <div className={css.total}>Total</div>
          <div className={css.total}>${this.props.total}</div>
        </div>
        <button className={css.button} onClick={this.props.goToAssignedOffer}>
          Buscar proveedor
        </button>
        <button className={css.backButton} onClick={this.props.goToProducts}>
          Volver a productos
        </button>
      </div>
    )
  }
}
