import React from 'react'
import logo from 'src/ui/images/logo.png'
import css from './styles.module.css'

const Index = () => (
  <div className={css.container}>
    <img src={logo} width="114" height="50" align="absmiddle" />
    <div className={css.account}>
      <a href="">Crear una Cuenta</a>
    </div>
  </div>
)

export default Index
