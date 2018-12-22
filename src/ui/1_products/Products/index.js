import React from 'react'
import { Product } from './Product'

export class Products extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          {this.props.products.map(p =>
              <Product {...p} />
          )}
        </div>
    )
  }
}
