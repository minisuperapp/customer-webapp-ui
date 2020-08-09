import React from 'react'
import Style from './style'
import Label from 'src/ui/components/Label'
import * as images from 'src/ui/views/common/images'

export class QuantityForm extends React.Component {
  render() {
    const {
      cart: { product },
      price,
    } = this.props
    const style = {
      backgroundImage: `url(${images.getProductImageURL(product.code)})`,
      backgroundPosition: 'center',
    }
    return (
      <Style>
        <div className="title">Ingresa la cantidad</div>
        <div className="image" style={style} />
        <div className="productName">{product.name}</div>
        <Label value={'$' + price + ' / ' + product.quantity_type + ' (aprox.)'} />
        <div className="quantity">Cantidad</div>
        <div className="spinners">
          <button className="subtractButton" onClick={this.props.subtractQuantity}>
            -
          </button>
          <input
            className="input"
            type="Text"
            pattern="[0-9]*"
            value={this.props.quantity}
            onChange={this.props.changeQuantity.bind(this)}
          />
          <button className="addButton" onClick={this.props.addQuantity}>
            +
          </button>
        </div>
        <div className="totalContainer">
          <div className="total">Total</div>
          <div className="total">${this.props.total} (aprox.)</div>
        </div>
        <div className="buttonContainer">
          <button className="backButton" onClick={this.props.goToProducts}>
            Cancelar
          </button>
          <button className="button" onClick={this.props.go_to_search_best_offer}>
            Continuar
          </button>
        </div>
      </Style>
    )
  }
}
