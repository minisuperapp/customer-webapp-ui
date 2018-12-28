import React from 'react'
import { Link } from "react-router-dom";

export class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          {this.props.product.name} - ${this.props.lowestPrice}
          {this.props.lowestPrice && (
              <Link to="/quantity">
                <button>
                  Comprar
                </button>
              </Link>
          )}
        </div>
    )
  }
}
