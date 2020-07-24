import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register_customer_request } from 'src/state/actions/auth_actions.js'
import Style from './style'
import { paths } from 'src/constants'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    redirect: false,
  }

  go_to_login = () => {
    const { history } = this.props
    history.push(paths.login)
  }

  on_accept = () => {
    const { history, register_customer_request } = this.props
    register_customer_request(this.state, () => {
      this.setState({
        name: '',
        email: '',
        password: '',
      })
      alert('Tu cuenta se ha registrado con exito!')
      history.push(paths.login)
    })
  }

  render() {
    return (
      <Style>
        <div className="header">Ingresa tus datos de registro</div>
        <div className="body">
          <div className="name">
            <label htmlFor="name">Nombre: </label>
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Contraseña: </label>
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="ok" onClick={this.on_accept}>
            Registrarse
          </button>
          <button className="cancel" onClick={this.go_to_login}>
            Ya Tengo Cuenta
          </button>
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
