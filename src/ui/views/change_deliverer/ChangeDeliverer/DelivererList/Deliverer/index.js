import React from 'react'
import Style from './style'
import * as images from 'src/ui/views/common/images'

class Provider extends React.Component {
  render() {
    const { offer, onChangeOffer } = this.props
    const style = {
      backgroundImage: `url(${images.getProductImageURL(offer.product_code)})`,
      backgroundPosition: 'center',
    }
    return (
      <Style>
        <div className="image" style={style} />
        <div>{offer.deliverer_name}</div>
        <div>$ {offer.unit_price}</div>
        <div>
          <button
            className="select_button"
            onClick={() => {
              onChangeOffer(offer)
            }}>
            Seleccionar
          </button>
        </div>
      </Style>
    )
  }
}

export default Provider
