import React from 'react'
import Style from './style'

class Provider extends React.Component {
  render() {
    const { deliverer, unitPrice } = this.props.offer
    return (
      <Style>
        <div className="delivererName">
          <h1>{deliverer.name}</h1>
        </div>
        <div className="delivererOfferPrice">
          <h2>$ {unitPrice}</h2>
        </div>
        <div className="delivererSelect">
          <button>Seleccionar</button>
        </div>
      </Style>
    )
  }
}

export default Provider
