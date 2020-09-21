import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import LocationView from './location'

class Auth extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={paths.location} component={LocationView} />
      </Switch>
    )
  }
}

const mapDispatchToProps = {}

export default connect(() => ({}), mapDispatchToProps)(Auth)
