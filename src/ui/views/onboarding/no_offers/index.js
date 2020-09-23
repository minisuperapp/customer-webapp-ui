import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { hide_no_offers_alert } from 'src/state/actions/alert_actions'
import logo from 'src/ui/images/logo.png'
import { paths } from 'src/constants'
import { connect } from 'react-redux'

class NoOffersView extends Component {
  go_to_products = () => {
    const { history, hide_no_offers_alert } = this.props
    hide_no_offers_alert()
    history.push(paths.app.index)
  }

  go_to_preferences = () => {
    const { history, hide_no_offers_alert } = this.props
    hide_no_offers_alert()
    history.push(paths.app.preferences)
  }

  go_to_offer_avail_enrollment = () => {
    const { history } = this.props
    history.push(paths.onboarding.offer_avail_enrollment)
  }

  render() {
    const {
      profile: { email, phone_number },
    } = this.props
    const show_enrollment_button = !email && !phone_number
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="title">No hay ofertas disponibles en tu zona.</div>
        <div className="buttons">
          {show_enrollment_button ? (
            <>
              <div className="subtitle">Te recomendamos intentar más tarde.</div>
              <button className="subscribe_button" onClick={this.go_to_offer_avail_enrollment}>
                Avisarme cuando haya ofertas en mi zona
              </button>
            </>
          ) : (
            <div className="subtitle">
              Nosotros te avisaremos cuando haya alguna oferta disponible.
            </div>
          )}
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

function mapStateToProps(state) {
  const { profile } = state
  return {
    profile,
  }
}

const mapDispatchToProps = {
  hide_no_offers_alert,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoOffersView)
