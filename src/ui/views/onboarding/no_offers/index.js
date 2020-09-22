import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import logo from 'src/ui/images/logo.png'

class NoOffersView extends Component {
  render() {
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="ups">Ups!</div>
        <div className="title">No hay ofertas disponibles en tu zona :(</div>
        <div className="subtitle">Te recomendamos intentar más tarde.</div>
        <div className="buttons">
          <button className="subscribe_button">Avisarme cuando haya ofertas en mi zona</button>
          <button className="go_to_products_button">Ver productos</button>
        </div>
        <div className="note">Nota: Asegúrate que tu ubicación este correcta.</div>
        <button className="verify_button">Verificar mi ubicación</button>
      </Style>
    )
  }
}

export default NoOffersView
