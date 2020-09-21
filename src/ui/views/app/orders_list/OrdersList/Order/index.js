import React from 'react'
import Style from './style'

export class Order extends React.Component {
  render() {
    const { order, order_details, products_by_code } = this.props
    const status = {
      STARTED: 'Iniciada',
      PLACED: 'Ordenada',
      IN_TRANSIT: 'En camino',
      ARRIVED: 'En puerta!',
      DELIVERED: 'Recibida',
      CANCELED_BY_CUSTOMER: 'Cancelada',
      CANCELED_BY_DELIVERER: 'Cancelada por el repartidor',
    }
    return (
      <Style>
        <div className="header">{status[order.status]}</div>
        <div className="content">
          <div>#{order.id}</div>
          <div className="order_products">
            {order_details.map(detail => {
              const product = products_by_code[detail.product_code]
              return (
                <div key={detail.id}>
                  <div>
                    {detail.product_quantity} {product.quantity_type} {product.name}
                  </div>
                  <hr />
                </div>
              )
            })}
          </div>
          <div>Total: ${order.total}</div>
          <div>Repartidor: {order.deliverer_name}</div>
        </div>
      </Style>
    )
  }
}
