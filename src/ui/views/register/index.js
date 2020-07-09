import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register_customer_request } from 'src/state/actions/auth_actions.js'
import Style from './style'

class Register extends Component {
  render() {
    return (
      <Style>
        <div className="header">Ingresa tus datos de registro</div>
        <div className="body">
          <div className="name">
            <label htmlFor="name">Nombre: </label>
            <input name="name" type="text" placeholder="Nombre" />
          </div>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input name="email" type="text" placeholder="Email" />
          </div>
          <div className="password">
            <label htmlFor="password">Contraseña: </label>
            <input name="password" type="password" placeholder="Contraseña" />
          </div>
        </div>
        <div className="buttons">
          <button
            className="ok"
            onClick={() => {
              if (window.confirm('Registro Exitoso!')) this.confirm
            }}>
            Registrarse
          </button>
          <button className="cancel">Ya Tengo Cuenta</button>
        </div>
      </Style>
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
