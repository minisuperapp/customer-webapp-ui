import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register_customer_request } from 'src/state/actions/auth_actions.js'
import Style from './style'

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    redirect: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />
    }
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
          {this.renderRedirect()}
          <button
            className="ok"
            onClick={() => {
              this.props.register_customer_request(this.state, () => {
                this.setState({
                  name: '',
                  email: '',
                  password: '',
                })
                alert('Tu cuenta se ha registrado con exito!')
              })
            }}>
            Registrarse
          </button>
          <button className="cancel" onClick={this.setRedirect}>
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
