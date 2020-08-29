import React from 'react'
import { Product } from './Product'
import Style from './style'

export class ProductList extends React.Component {
  render() {
    const {
      cart,
      products_index,
      lowest_price_by_product,
      handle_product_selection,
      go_to_search_best_offer,
      remove_product,
    } = this.props
    const product_keys = Object.keys(cart.products) || []
    return (
      <Style>
        <div className="title">Mi carrito</div>
        {product_keys.length ? (
          <button onClick={go_to_search_best_offer} className="purchase_button">
            Finalizar compra
          </button>
        ) : (
          <div>Aun no has agregado productos</div>
        )}
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
