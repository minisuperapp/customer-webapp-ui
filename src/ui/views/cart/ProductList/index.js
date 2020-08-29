import React from 'react'
import { Product } from './Product'
import Style from './style'

export class ProductList extends React.Component {
  render() {
    const {
      cart,
      total,
      products_index,
      lowest_price_by_product,
      handle_product_selection,
      go_to_search_best_offer,
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
        <button onClick={go_to_search_best_offer} className="purchase_button">
          Finalizar compra
        </button>
        <div className="grand_total">Total: ${total}</div>
        <div className="container">
          {product_keys.map(code => {
            const product = products_index[code]
            const quantity = cart.products[code]
            return (
              <Product
                key={code}
                product={product}
                quantity={quantity}
                lowestPrice={lowest_price_by_product[product.code]}
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
