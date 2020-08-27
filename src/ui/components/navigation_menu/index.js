import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'

export default class NavigationMenu extends Component {
  render() {
    const { active_page } = this.props
    return (
      <Style>
        <Link
          className={`${
            ![paths.register, paths.orders_list].includes(active_page) ? 'active' : ''
          } products_link`}
          onClick={this.refresh}
          to={paths.home}>
          Productos
        </Link>
        <Link
          className={`${active_page === paths.orders_list ? 'active' : ''} orders_link`}
          onClick={this.refresh}
          to={paths.orders_list}>
          Mis Órdenes
        </Link>
      </Style>
    )
  }
}
