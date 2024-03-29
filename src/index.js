import React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configure_store, { history } from './state/configure_store'
import LogRocket from 'logrocket'
import config from './config'
import UI from './ui'

window.onresize = function () {
  document.body.height = window.innerHeight
}

window.onresize()

const store = configure_store()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <UI history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)

if (!config.isTestEnv && !config.disable_logrocket) {
  LogRocket.init('pr05ix/minisuper-customer')
}
