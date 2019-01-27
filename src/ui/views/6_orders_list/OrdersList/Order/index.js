import React from 'react'

export class Order extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.order.id}</td>
        <td>{this.props.order.productCode}</td>
        <td>{this.props.order.productQuantity}</td>
        <td><button>Ver detalles</button></td>
      </tr>
    )
  }
}
