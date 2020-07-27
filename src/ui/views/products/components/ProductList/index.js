import React from 'react'
import { Product } from './Product'
import Style from './style'
import {ProductRequest} from "./RequestProduct";

export class ProductList extends React.Component {
  render() {
    const { lowest_price_by_product, handleProductSelection, handleProductSearch } = this.props
    return (
      <Style>
        <div className="title">Elige tu producto</div>
        <div className="search">
          <input
            autoFocus={true}
            type="text"
            placeholder="Buscar un producto..."
            onChange={handleProductSearch}
          />
        </div>
        <div className="container">
          {this.props.products.map(p => (
            <Product
              key={p.id}
              product={p}
              lowestPrice={lowest_price_by_product[p.code]}
              handleProductSelection={handleProductSelection}
            />
          ))}
          <ProductRequest />
        </div>
      </Style>
    )
  }
}
