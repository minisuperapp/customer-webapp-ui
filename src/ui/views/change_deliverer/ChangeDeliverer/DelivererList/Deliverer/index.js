import React from 'react'
import Style from './style'

class Provider extends React.Component {
  render() {
    const { offer } = this.props
    return (
      <Style>
        <div>{offer.deliverer_name}</div>
        <div>$ {offer.unit_price}</div>
        <div>
          <button className="select_button">Seleccionar</button>
        </div>
      </Style>
    )
  }
}

export default Provider
