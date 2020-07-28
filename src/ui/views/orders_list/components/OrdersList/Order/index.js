import React from 'react'
import Style from './style'
import * as images from 'src/ui/views/common/images'

export class Order extends React.Component {
  render() {
    const { order, products_by_code } = this.props
    const product = products_by_code[order.product_code] || {}
    const status = {
      STARTED: 'Iniciada',
      PLACED: 'Ordenada',
      IN_TRANSIT: 'En camino',
      ARRIVED: 'En puerta!',
      DELIVERED: 'Recibida',
      CANCELED_BY_CUSTOMER: 'Cancelada por el cliente',
      CANCELED_BY_DELIVERER: 'Cancelada por el proveedor',
    }
    const style = {
      backgroundImage: `url(${images.getProductImageURL(product.code)})`,
      backgroundPosition: 'center',
    }
    return (
      <Style>
        <div className="header">{status[order.status]}</div>
        <div className="content">
          <div className="info">
            <div>#{order.id}</div>
            <div>{product.name}</div>
            <div>
              {order.product_quantity} {product.quantity_type}
            </div>
          </div>
          <div className="image" style={style} />
        </div>
      </Style>
    )
  }
}
