import React, { Component } from 'react'
import Style from './style'

class LogIn extends Component {
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
            <div>
              <input type="submit" value="Ingresar" className="ok-button" />
            </div>
            <div>
              <button className="cancel-button">No tengo cuenta</button>
            </div>
          </div>
        </div>
      </Style>
    )
  }
}

export default LogIn
