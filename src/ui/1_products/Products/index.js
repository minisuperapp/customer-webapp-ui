import React from 'react'
import { Product } from './Product'

export class Products extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('this.props: ', this.props)
    return (
        <div>
          {this.props.products.map(p =>
              <Product product={p} lowestPrice={this.props.lowestPriceByProduct[p.code]}/>
          )}
        </div>
    )
  }
}
