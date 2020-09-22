import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import LocationView from '../onboarding/location'
import NoOffersView from '../onboarding/no_offers'
import OfferAvailEnrollmentView from '../onboarding/offer_avail_enrollment'
import Style from './style'
import Alert from 'src/ui/components/alert'

class Auth extends Component {
  render() {
    return (
      <Style>
        <Alert />
        <Switch>
          <Route exact path={paths.onboarding.location} component={LocationView} />
          <Route exact path={paths.onboarding.no_offers} component={NoOffersView} />
          <Route
            exact
            path={paths.onboarding.offer_avail_enrollment}
            component={OfferAvailEnrollmentView}
          />
        </Switch>
      </Style>
    )
  }
}

const mapDispatchToProps = {}

export default connect(() => ({}), mapDispatchToProps)(Auth)
