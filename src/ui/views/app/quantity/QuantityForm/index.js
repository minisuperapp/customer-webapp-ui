import React from 'react'
import Style from './style'
import * as images from 'src/ui/views/app/common/images'

export class QuantityForm extends React.Component {
  render() {
    const { product, price, subtractQuantity, addQuantity, add_to_cart, cancel } = this.props
    const style = {
      backgroundImage: `url(${images.getProductImageURL(product.code)})`,
      backgroundPosition: 'center',
    }
    return (
      <Style>
        <div className="title">Ingresa la cantidad</div>
        <div className="image" style={style} />
        <div className="product_name">{product.name}</div>
        <div className="price"> {'$' + price + ' / ' + product.quantity_type + ' (aprox.)'} </div>
        <div className="quantity_label">Cantidad</div>
        <div className="spinners">
          <button className="subtractButton" onClick={subtractQuantity}>
            -
          </button>
          <input
            className="input"
            type="Text"
            pattern="[0-9]*"
            value={this.props.quantity}
            onChange={this.props.changeQuantity.bind(this)}
          />
          <button className="addButton" onClick={addQuantity}>
            +
          </button>
        </div>
        <div className="total_container">
          <div className="total">Total</div>
          <div className="total">${this.props.total} (aprox.)</div>
        </div>
        <div className="button_container">
          <button className="cancel_button" onClick={cancel}>
            Cancelar
          </button>
          <button className="add_cart_button" onClick={add_to_cart}>
            Agregar a carrito
          </button>
        </div>
      </Style>
    )
  }
}
