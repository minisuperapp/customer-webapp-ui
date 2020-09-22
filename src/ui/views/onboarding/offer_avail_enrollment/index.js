import React, { Component } from 'react'
import Style from './style'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { hide_no_offers_alert } from 'src/state/actions/alert_actions'
import logo from 'src/ui/images/logo.png'
import { connect } from 'react-redux'
import { paths } from 'src/constants'

class OfferAvailEnrollmentView extends Component {
  go_to_products = () => {
    const { history } = this.props
    history.push(paths.onboarding.no_offers)
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
          <button className="accept_button">Aceptar</button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OfferAvailEnrollmentView)
