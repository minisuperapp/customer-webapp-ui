import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'src/ui/images/logo.png'
import Style from './style'
import { paths } from 'src/constants'

const Index = () => (
  <Style>
    <img src={logo} width="114" height="50" align="absmiddle" />
    <div className="account">
      <Link to={paths.register}>Crear una Cuenta</Link>
    </div>
  </Style>
)

export default Index
