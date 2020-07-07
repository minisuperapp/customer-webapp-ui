import React, { Component } from 'react'
import css from './styles.module.css'

export default class Register extends Component {
  render() {
    return (
      <>
        <div className={css.container}>
          <div className={css.header}>Ingresa tus datos de registro</div>
          <div className={css.body}>
            <div className={css.name}>
              <label htmlFor="name">Nombre: </label>
              <input name="name" type="text" placeholder="Nombre" />
            </div>
            <div className={css.email}>
              <label htmlFor="email">Email: </label>
              <input name="email" type="text" placeholder="Email" />
            </div>
            <div className={css.email}>
              <label htmlFor="password">Contraseña: </label>
              <input name="password" type="password" placeholder="Contraseña" />
            </div>
          </div>
          <div className={css.buttons}>
            <button className={css.ok}>Registrarse</button>
            <button className={css.cancel}>Ya Tengo Cuenta</button>
          </div>
        </div>
      </>
    )
  }
}
