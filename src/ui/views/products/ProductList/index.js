import React from 'react'
import { Product } from './Product'
import Style from './style'
import ProductWish  from './ProductWish'
import { Map } from './Map'

export class ProductList extends React.Component {
  render() {
    const {
      lowest_price_by_product,
      handleProductSelection,
      by_product,
      location,
      go_to_location,
    } = this.props
    return (
      <Style>
        <div className="container">
          {/*<div className="map_container">*/}
          {/*  <Map offers={by_product} location={location} go_to_location={go_to_location} />*/}
          {/*</div>*/}
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
