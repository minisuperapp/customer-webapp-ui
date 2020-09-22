import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Onboarding from './views/onboarding'
import App from './views/app'
import { paths } from 'src/constants'
import { get_profile_request } from '../state/actions/auth_actions'
import { connect } from 'react-redux'
import config from '../config'
import LogRocket from 'logrocket'

class UI extends Component {
  async componentDidMount() {
    const { history, get_profile_request } = this.props
    get_profile_request(response => {
      if (!config.isTestEnv && !config.disable_logrocket) {
        LogRocket.identify(response.customer_id, {
          customer_id: response.customer_id,
        })
      }
      if (!response.location) {
        history.push(paths.onboarding.location)
      }
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path={paths.onboarding.index} render={props => <App {...props} />} />
        <Route path={paths.onboarding.index} render={props => <Onboarding {...props} />} />
        <Route path={paths.app.index} render={props => <App {...props} />} />
      </Switch>
    )
  }
}

const mapDispatchToProps = {
  get_profile_request,
}

export default connect(() => ({}), mapDispatchToProps)(UI)
