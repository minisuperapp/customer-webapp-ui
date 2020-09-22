import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { hide_no_offers_alert } from 'src/state/actions/alert_actions'
import logo from 'src/ui/images/logo.png'
import { paths } from 'src/constants'
import { connect } from 'react-redux'

class NoOffersView extends Component {
  componentDidMount() {
    const { hide_no_offers_alert } = this.props
    hide_no_offers_alert()
  }

  go_to_products = () => {
    const { history } = this.props
    history.push(paths.app.index)
  }

  go_to_preferences = () => {
    const { history } = this.props
    history.push(paths.app.preferences)
  }

  render() {
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="title">No hay ofertas disponibles en tu zona.</div>
        <div className="subtitle">Te recomendamos intentar más tarde.</div>
        <div className="buttons">
          <button className="subscribe_button">Avisarme cuando haya ofertas en mi zona</button>
          <button className="go_to_products_button" onClick={this.go_to_products}>
            Ver productos
          </button>
        </div>
        <div className="note">Nota: Asegúrate que tu ubicación este correcta.</div>
        <button className="verify_button" onClick={this.go_to_preferences}>
          Verificar mi ubicación
        </button>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  hide_no_offers_alert,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoOffersView)
