import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from './Product'
import Style from './style'
import ProductWish from './ProductWish'
import { paths } from 'src/constants'

export class ProductList extends React.Component {
  render() {
    const { lowest_price_by_product, handleProductSelection, cart, go_to_checkout } = this.props
    const show_purchase_button = Object.keys(cart.products).length
    return (
      <Style>
        <button
          onClick={go_to_checkout}
          className={`${show_purchase_button ? 'complete_purchase_button' : 'hidden'}`}>
          Listo para ordenar
        </button>
        <div className="container">
          {this.props.products.map(p => (
            <Product
              key={p.id}
              product={p}
              lowestPrice={lowest_price_by_product[p.code]}
              handleProductSelection={handleProductSelection}
            />
          ))}
          <ProductWish />
        </div>
      </Style>
    )
  }
}
