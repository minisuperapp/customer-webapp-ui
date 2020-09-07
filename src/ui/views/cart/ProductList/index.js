import React from 'react'
import { Product } from './Product'
import Style from './style'

export class ProductList extends React.Component {
  render() {
    const {
      cart,
      total,
      products_index,
      handle_product_selection,
      go_to_checkout,
      go_to_products,
      remove_product,
    } = this.props
    const product_keys = Object.keys(cart.products) || []
    if (!product_keys.length) {
      return (
        <Style>
          <div className="title">Mi carrito</div>
          <div>Aun no has agregado productos</div>
        </Style>
      )
    }
    return (
      <Style>
        <div className="title">Mi carrito</div>
        <div className="button_container">
          <button onClick={go_to_products} className="keep_buying_button">
            Seguir comprando
          </button>
          <button onClick={go_to_checkout} className="purchase_button">
            Ordenar...
          </button>
        </div>
        <div className="grand_total">Total: ${total}</div>
        <div className="container">
          {product_keys.map(code => {
            const product = products_index[code]
            const quantity = cart.products[code].quantity
            const unit_price = cart.products[code].unit_price
            return (
              <Product
                key={code}
                product={product}
                quantity={quantity}
                unit_price={unit_price}
                handle_product_selection={handle_product_selection}
                remove_product={remove_product}
              />
            )
          })}
        </div>
      </Style>
    )
  }
}
