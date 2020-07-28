import React from 'react'
import Deliverer from './Deliverer'
import Style from './style'

class DelivererList extends React.Component {
  render() {
    const { offers } = this.props
    return (
      <Style>
        {offers.map(offer => (
          <Deliverer offer={offer} key={offer.code} />
        ))}
      </Style>
    )
  }
}

export default DelivererList
