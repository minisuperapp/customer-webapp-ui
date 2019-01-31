import React from 'react'

export class Order extends React.Component {
  render() {
    const status = {
      STARTED: 'Iniciada',
      ORDERED: 'Ordenada',
      IN_TRANSIT: 'En tránsito',
      ARRIVED: 'En puerta!',
      DELIVERED: 'Recibida',
      CANCELED_BY_CUSTOMER: 'Cancelada por el cliente',
      CANCELED_BY_DELIVERER: 'Cancelada por el proveedor',
    }
    return (
      <tr>
        <td>{this.props.order.id}</td>
        <td>{this.props.order.productCode}</td>
        <td>{this.props.order.productQuantity}</td>
        <td>{status[this.props.order.status]} </td>
        <td>
          <button>Ver detalles</button>
        </td>
      </tr>
    )
  }
}
