import React from 'react'
import { Order } from './Order'
import Style from './style'

export class OrdersList extends React.Component {
  render() {
    const { orders, products_by_code, go_to_products } = this.props
    return (
      <Style>
        <div className="continue_shopping">
          <button onClick={go_to_products}>Seguir comprando</button>
        </div>
        <div className="products">
          {orders.map((o) => {
            return <Order key={o.id} order={o} products_by_code={products_by_code} />
          })}
        </div>
      </Style>
    )
  }
}
