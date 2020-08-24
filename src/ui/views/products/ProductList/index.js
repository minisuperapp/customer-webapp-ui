import React from 'react'
import { Product } from './Product'
import Style from './style'
import ProductWish from './ProductWish'

export class ProductList extends React.Component {
  render() {
    const { lowest_price_by_product, handleProductSelection } = this.props
    return (
      <Style>
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
