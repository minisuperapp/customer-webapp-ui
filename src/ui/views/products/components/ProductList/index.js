import React from 'react'
import { Product } from './Product'
import Style from './style'

export class ProductList extends React.Component {
  render() {
    return (
      <Style>
        <div className="textChooseProduct">Elige tu producto</div>
        <div className="container">
          {this.props.products.map((p) => (
            <Product
              key={p.id}
              product={p}
              lowestPrice={this.props.lowest_price_by_product[p.code]}
              handleProductSelection={this.props.handleProductSelection}
            />
          ))}
        </div>
      </Style>
    )
  }
}
