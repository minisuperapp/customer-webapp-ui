import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login_customer_request } from 'src/state/actions/auth_actions.js'
import Style from './style'
import { paths } from 'src/constants'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  go_to_registration = () => {
    const { history } = this.props
    history.push(paths.register)
  }

  on_accept = () => {
    const { history, login_customer_request } = this.props
    login_customer_request(this.state, () => {
      this.setState({
        email: '',
        password: '',
      })
      history.push(paths.home)
    })
  }

  render() {
    return (
      <Style>
        <div className="header">Ingresa tus Datos de Acesso</div>
        <div className="body">
          <div>
            <label htmlFor="email">Email: </label>
            <input
              className="field"
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              className="field"
              name="password"
              type="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="buttons">
            <div>
              <input
                type="submit"
                value="Ingresar"
                className="ok-button"
                onClick={this.on_accept}
              />
            </div>
            <div>
              <button className="cancel-button" onClick={this.go_to_registration}>
                No tengo cuenta
              </button>
            </div>
          </div>
        </div>
      </Style>
    )
  }
}

function mapStateToProps(state) {
  return {
    login_succesful: state.auth.login.login_succesful,
  }
}

const mapDispatchToProps = {
  login_customer_request,
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
