import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'

export default class NavigationMenu extends Component {
  render() {
    const { cart, active_page } = this.props
    const cart_count = Object.keys(cart.products).length
    const cart_link_name = cart_count ? `Carrito (${cart_count})` : 'Carrito'
    return (
      <Style>
        <div className="menu">
          <Link
            className={`${paths.app.index === active_page ? 'active' : ''} products_link`}
            to={paths.app.index}>
            Productos
          </Link>
          <Link
            className={`${active_page === paths.app.cart ? 'active' : ''} cart_link`}
            to={paths.app.cart}>
            {cart_link_name}
          </Link>
          <Link
            className={`${paths.app.orders_list === active_page ? 'active' : ''} orders_link`}
            to={paths.app.orders_list}>
            Órdenes
          </Link>
          <Link
            className={`${paths.app.preferences === active_page ? 'active' : ''} preferences_link`}
            to={paths.app.preferences}>
            Mi ubicación
          </Link>
        </div>
      </Style>
    )
  }
}
