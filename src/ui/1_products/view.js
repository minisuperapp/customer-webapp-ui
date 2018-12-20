import React from 'react'

export class ProductsView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          {this.props.products.map(p =>
              <p>{p.name}</p>
          )}
        </div>
    )
  }
}
