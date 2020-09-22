import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register_customer_request } from 'src/state/actions/auth_actions.js'
import Style from './style'
import { paths } from 'src/constants'
import { show_alert_message } from '../../../../state/actions/alert_actions'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    redirect: false,
  }

  go_to_login = () => {
    const { history } = this.props
    history.push(paths.auth.login)
  }

  on_accept = () => {
    const { history, register_customer_request } = this.props
    register_customer_request(this.state, () => {
      this.setState({
        name: '',
        email: '',
        password: '',
      })
      show_alert_message({ message: 'Tu cuenta se ha registrado con exito!' })
      history.push(paths.auth.login)
    })
  }

  render() {
    return (
      <Style>
        <div className="title">Crea tu cuenta</div>
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

          <div className="buttons">
            <button className="ok" onClick={this.on_accept}>
              Crear cuenta
            </button>
          </div>
        </div>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  register_customer_request,
  show_alert_message,
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
