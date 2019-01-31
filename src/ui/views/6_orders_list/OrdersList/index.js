import React from 'react'
import { Order } from './Order'

export class OrdersList extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Estado</th>
          </tr>
          {this.props.orders.map((o) => {
            return <Order order={o} />
          })}
        </table>
      </div>
    )
  }
}
