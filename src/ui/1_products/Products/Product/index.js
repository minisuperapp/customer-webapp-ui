import React from 'react'

export class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          {this.props.product.name} - ${this.props.lowestPrice}
          {this.props.lowestPrice && (
              <button>
                Comprar
              </button>
          )}
        </div>
    )
  }
}
