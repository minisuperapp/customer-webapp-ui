import React, { Component } from 'react'

class NoOffersView extends Component {
  render() {
    return (
      <div>
        <div>Ups!</div>
        <div>No hay ofertas disponibles en tu zona.</div>
        <div>Te recomendamos intentae mas tarde.</div>
        <button>Ver productos</button>
        <button>Avisarme cuando haya ofertas en mi zona</button>
        <div>Nota: Asegúrate que tu ubicación este correcta.</div>
        <button>Verificar mi ubicación</button>
      </div>
    )
  }
}

export default NoOffersView
