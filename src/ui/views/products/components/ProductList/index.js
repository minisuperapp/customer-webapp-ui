import React from 'react'
import {Product} from './Product'
import css from './styles.module.css'

export class ProductList extends React.Component {
  render() {
    return (
      <div>
        <div className={css.textChooseProduct}>
          Elige tu producto
        </div>
        <div className={css.container}>
          {this.props.products.map((p) => (
            <Product
              key={p.id}
              product={p}
              lowestPrice={this.props.lowest_price_by_product[p.code]}
              handleProductSelection={this.props.handleProductSelection}
            />
          ))}
        </div>
      </div>
    )
  }
}
