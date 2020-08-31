import React from 'react'
import { Order } from './Order'
import Style from './style'

export class OrdersList extends React.Component {
  render() {
    const { orders, products_by_code, go_to_products } = this.props

    return (
      <Style>
        <div className="title">Mis Órdenes</div>
        <div className="orders">
          {Object.keys(orders).map(order_id => {
            const order_details = orders[order_id]
            return <Order key={order_id} order_details={order_details} products_by_code={products_by_code} />
          })}
        </div>
        <div className="button">
          <button className="keep-buying" onClick={() => go_to_products()}>
            Buscar mas productos
          </button>
        </div>
      </Style>
    )
  }
}
