import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Style from './style'

class LogIn extends Component {
  state = {
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
      return <Redirect to="/register" />
    }
  }
  render() {
    return (
      <Style>
        <div className="header">Ingresa tus Datos de Acesso</div>
        <div className="body">
          <div>
            <label htmlFor="email">Email: </label>
            <input className="field" name="email" type="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input className="field" name="password" type="password" placeholder="Contraseña" />
          </div>

          <div className="buttons">
            {this.renderRedirect()}
            <div>
              <input type="submit" value="Ingresar" className="ok-button" />
            </div>
            <div>
              <button className="cancel-button" onClick={this.setRedirect}>
                No tengo cuenta
              </button>
            </div>
          </div>
        </div>
      </Style>
    )
  }
}

export default LogIn
