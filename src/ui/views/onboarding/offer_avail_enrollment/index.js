import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { show_alert_message } from 'src/state/actions/alert_actions'
import { save_email_phone_request } from 'src/state/actions/auth_actions'
import logo from 'src/ui/images/logo.png'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class OfferAvailEnrollmentView extends Component {
  state = {
    email: '',
    phone_number: '',
  }
  go_to_products = () => {
    const { history } = this.props
    history.push(paths.onboarding.no_offers)
  }

  on_accept = () => {
    const { history, show_alert_message, save_email_phone_request } = this.props
    const { phone_number, email } = this.state
    if (!email.trim() || !phone_number) {
      show_alert_message('Ingresa to correo y/o número de teléfono.')
      return
    }
    save_email_phone_request({ phone_number, email }, () => {
      show_alert_message('Listo! Nosotros te avisaremos cuando exista alguna oferta.')
      history.push(paths.app.index)
    })
  }

  render() {
    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="title">Introduce tu correo y/o teléfono.</div>
        <div className="subtitle">Te avisaremos cuando existan ofertas cerca de tí.</div>
        <div className="buttons">
          <button className="go_back_button" onClick={this.go_to_products}>
            Volver
          </button>
          <button className="accept_button" onClick={this.on_accept}>
            Aceptar
          </button>
        </div>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  show_alert_message,
  save_email_phone_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferAvailEnrollmentView)
