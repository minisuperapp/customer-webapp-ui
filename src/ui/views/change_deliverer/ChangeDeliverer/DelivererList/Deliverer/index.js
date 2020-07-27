import React from 'react'
import Style from './style'

class Provider extends React.Component {
  render() {
    const { offer } = this.props

    return (
      <Style>
        <div>
          <h1>{offer.deliverer_name}</h1>
        </div>
        <div>
          <h2>$ {offer.unit_price}</h2>
        </div>
        <div>
          <button>Seleccionar</button>
        </div>
      </Style>
    )
  }
}

export default Provider
