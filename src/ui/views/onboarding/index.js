import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import LocationView from '../onboarding/location'
import NoOffersView from '../onboarding/no_offers'
import Style from './style'

class Auth extends Component {
  render() {
    return (
      <Style>
        <Switch>
          <Route exact path={paths.onboarding.location} component={LocationView} />
          <Route exact path={paths.onboarding.no_offers} component={NoOffersView} />
        </Switch>
      </Style>
    )
  }
}

const mapDispatchToProps = {}

export default connect(() => ({}), mapDispatchToProps)(Auth)
