import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <>
        <div>Ingresa tus datos de registro</div>
        <div>
          <label>Nombre: </label>
          <input type="text" />
        </div>
      </>
    )
  }
}
