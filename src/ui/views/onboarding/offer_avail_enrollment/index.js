import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { hide_no_offers_alert, show_alert_message } from 'src/state/actions/alert_actions'
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
    const { history, hide_no_offers_alert } = this.props
    hide_no_offers_alert()
    history.push(paths.onboarding.no_offers)
  }

  on_email_change = event => {
    this.setState({
      email: event.target.value,
    })
  }

  on_phone_number_change = event => {
    this.setState({
      phone_number: event.target.value,
    })
  }

  on_submit = event => {
    event.preventDefault()
    const { history, show_alert_message, save_email_phone_request } = this.props
    const { phone_number, email } = this.state
    if (!email.trim() && !phone_number) {
      show_alert_message({ message: 'Ingresa to correo y/o número de teléfono.' })
      return
    }
    save_email_phone_request({ phone_number, email }, () => {
      show_alert_message(
        {
          message: 'Listo! Nosotros te avisaremos cuando exista alguna oferta.',
        },
        () => {
          history.push(paths.app.index)
        },
      )
    })
  }

  render() {
    const { email, phone_number } = this.state

    return (
      <Style>
        <LazyLoadImage className="logo" alt="minisuper" src={logo} align="absmiddle" />
        <div className="title">Introduce tu correo y/o teléfono.</div>
        <div className="subtitle">Te avisaremos cuando existan ofertas cerca de tí.</div>
        <form className="form" onSubmit={this.on_submit}>
          <div className="form_fields">
            <input
              type="email"
              className="field"
              placeholder="Correo electrónico"
              onChange={this.on_email_change}
              value={email}
            />
            <input
              type="tel"
              className="field"
              placeholder="Número de teléfono"
              onChange={this.on_phone_number_change}
              value={phone_number}
            />
          </div>
          <div className="buttons">
            <button className="go_back_button" onClick={this.go_to_products}>
              Volver
            </button>
            <input
              type="submit"
              className="accept_button"
              value="Aceptar"
              onClick={this.on_accept}
            />
          </div>
        </form>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  show_alert_message,
  hide_no_offers_alert,
  save_email_phone_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferAvailEnrollmentView)
