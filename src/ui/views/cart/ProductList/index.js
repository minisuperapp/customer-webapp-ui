import React from 'react'
import { Product } from './Product'
import Style from './style'

export class ProductList extends React.Component {
  render() {
    const { cart, products_index, lowest_price_by_product, handle_product_selection } = this.props
    return (
      <Style>
        <div className="title">Mi carrito</div>
        <button className="purchase_button">Finalizar compra</button>
        <div className="container">
          {Object.keys(cart.products).map(code => {
            const product = products_index[code]
            const quantity = cart.products[code]
            return (
              <Product
                key={code}
                product={product}
                quantity={quantity}
                lowestPrice={lowest_price_by_product[product.code]}
                handle_product_selection={handle_product_selection}
              />
            )
          })}
        </div>
      </Style>
    )
  }
}
