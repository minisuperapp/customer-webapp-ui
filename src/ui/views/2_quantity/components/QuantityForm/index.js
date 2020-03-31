import React from 'react'
import css from './styles.module.css'
import Label from 'src/Components/Label'
import * as images from 'src/ui/views/common/images'

export class QuantityForm extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${images.getProductImageURL(this.props.params.product.code.toLocaleLowerCase())})`
    }
    return (
      <div className={css.container}>
        <div className={css.image} style={style}/>
        <div className={css.productName}>{this.props.params.product.name}</div>
        <Label
          value={'$' + this.props.params.lowestPrice + ' / ' + this.props.params.product.quantity_type + ' (aprox.)'}/>
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
          <div className={css.total}>${this.props.total} (aprox.)</div>
        </div>
        <div className={css.buttonContainer}>
          <button className={css.backButton} onClick={this.props.goToProducts}>
            Cancelar
          </button>
          <button className={css.button} onClick={this.props.goToAssignedOffer}>
            Continuar
          </button>
        </div>
      </div>
    )
  }
}
