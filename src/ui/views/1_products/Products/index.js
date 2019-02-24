import React from 'react'
import {Product} from './Product/index'
import css from "./styles.module.css";

export class Products extends React.Component {
  render() {
    console.log('this.props: ', this.props)
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
              lowestPrice={this.props.lowestPriceByProduct[p.code]}
              changeView={this.props.changeView}
            />
          ))}
        </div>
      </div>
    )
  }
}
