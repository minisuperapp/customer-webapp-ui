import React from 'react'
import Style from './styles.module.css'

export default class Register extends React.Component {
  render() {
    return (
      <Style>
        <div className="header">Ingresa tus datos de registro</div>
        <div className="body">
          <div>
            <label htmlFor="name">Nombre: </label>
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              //   onChange={this.props.changeState('name')}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              //   onChange={this.props.changeState('phone_number')}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              //   onChange={this.props.changeState('password')}
            />
          </div>
        </div>
      </Style>
    )
  }
}
