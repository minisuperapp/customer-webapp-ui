import React from 'react'
import { Order } from './Order'

export class OrdersList extends React.Component {
  render() {
    const { orders } = this.props

    return (
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Estado</th>
          </tr>
          {orders.map((o) => {
            return <Order key={o.id} order={o} />
          })}
        </table>
      </div>
    )
  }
}
