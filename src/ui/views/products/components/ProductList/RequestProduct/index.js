import React, { Component } from 'react'

import Style from './style'

export class ProductRequest extends Component {
  render() {
    return (
      <Style>
        <div className="title">No encuentras tu producto?</div>
        <div className="subtitle">Describelo debajo y lo agregaremos a la lista.</div>
        <textarea />
        <button>Enviar</button>
      </Style>
    )
  }
}
