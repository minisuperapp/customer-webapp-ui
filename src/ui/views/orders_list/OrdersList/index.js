import React from 'react'
import { Order } from './Order'
import Style from './style'

export class OrdersList extends React.Component {
  render() {
    const { orders, products_by_code, go_to_products } = this.props

    return (
      <Style>
        <div className="title">Mis Ordenes</div>
        <div className="orders">
          {orders.map(o => {
            return <Order key={o.id} order={o} products_by_code={products_by_code} />
          })}
        </div>
        <div className="button">
          <button className="keep-buying" onClick={() => go_to_products()}>
            Seguir Comprando
          </button>
        </div>
      </Style>
    )
  }
}
