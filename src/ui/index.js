import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './views/app'
import { paths } from 'src/constants'

class UI extends Component {
  render() {
    return (
      <Switch>
        <Route path={paths.home} render={(props) => <App {...props} />} />
      </Switch>
    )
  }
}

export default UI
