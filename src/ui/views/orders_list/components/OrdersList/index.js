import React from 'react'
import { Order } from './Order'
import Style from './style'

export class OrdersList extends React.Component {
  render() {
    const { orders, products_by_code } = this.props
    return (
      <Style>
        <div className="title">Mis Ordenes</div>
        <div className="orders">
          {orders.map((o) => {
            return <Order key={o.id} order={o} products_by_code={products_by_code} />
          })}
        </div>
      </Style>
    )
  }
}
