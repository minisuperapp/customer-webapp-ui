import React from 'react'
import logo from 'src/ui/images/logo.png'
import Style from './style'

const Header = () => (
  <Style>
    <img className="logo" alt="minisuper" src={logo} width="90vh" height="40vh" align="absmiddle" />
  </Style>
)

export default Header
