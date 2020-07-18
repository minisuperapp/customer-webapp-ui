import React from 'react'
import logo from 'src/ui/images/logo.png'
import Style from './style'

const Header = () => (
  <Style>
    <img className="logo" alt="minisuper" src={logo} width="90" height="40" align="absmiddle" />
  </Style>
)

export default Header
