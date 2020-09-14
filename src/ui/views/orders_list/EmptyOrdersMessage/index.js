import React, { Component } from 'react'
import Style from './style'
import { Link } from 'react-router-dom'
import { paths } from 'src/constants'

class EmptyOrdersMessage extends Component {
  render() {
    return (
      <Style>
        <div className="message">No tienes órdenes el día de hoy.</div>
        <Link className={'link'} to={paths.home}>
          Buscar productos
        </Link>
      </Style>
    )
  }
}

export default EmptyOrdersMessage
