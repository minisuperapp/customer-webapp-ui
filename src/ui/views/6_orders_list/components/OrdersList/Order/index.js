import React from 'react'
import { views } from 'src/ui/views/index'

export class Order extends React.Component {
  render() {
    const status = {
      STARTED: 'Iniciada',
      PLACED: 'Ordenada',
      IN_TRANSIT: 'En camino',
      ARRIVED: 'En puerta!',
      DELIVERED: 'Recibida',
      CANCELED_BY_CUSTOMER: 'Cancelada por el cliente',
      CANCELED_BY_DELIVERER: 'Cancelada por el proveedor',
    }
    return (
      <tr>
        <td>{this.props.order.id}</td>
        <td>{this.props.order.product_code}</td>
        <td>{this.props.order.product_quantity}</td>
        <td>{status[this.props.order.status]} </td>
        <td>
          <button onClick={() =>
            this.props.changeView(views.ORDER_DETAILS, {
              order: this.props.order
            })
          }>Ver detalles</button>
        </td>
      </tr>
    )
  }
}
