import React, { Component } from 'react'

import Style from './style'

export class ProductRequest extends Component {
  render() {
    return (
      <Style>
        <div className="title">¿No encuentras tu producto?</div>
        <div className="subtitle">Descríbelo debajo y lo agregaremos a la lista.</div>
        <textarea rows={1} className="description" />
        <button>Enviar</button>
      </Style>
    )
  }
}
