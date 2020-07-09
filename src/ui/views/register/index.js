import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register_customer_request } from 'src/state/actions/auth_actions.js'
import css from './styles.module.css'

class Register extends Component {
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
            <button
              className={css.ok}
              onClick={() => {
                if (window.confirm('Registro Exitoso!')) this.confirm
              }}>
              Registrarse
            </button>
            <button className={css.cancel}>Ya Tengo Cuenta</button>
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    registration_succesful: state.auth.registration.registration_successful,
  }
}

const mapDispatchToProps = {
  register_customer_request,
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
