import React from 'react'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'

const SubHeader = () => (
  <Style>
    <div className="links">
      <Link className="products_link" to={paths.home}>
        Comprar
      </Link>
      <Link className="orders_link" to={paths.orders_list}>
        Mis Ordenes
      </Link>
      <Link className="account_link" to={paths.register}>
        Mi Cuenta
      </Link>
    </div>
  </Style>
)

export default SubHeader
