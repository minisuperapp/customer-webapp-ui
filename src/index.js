import React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configure_store, { history } from './state/configure_store'
import LogRocket from 'logrocket'
import config from './config'
import App from './ui/App'

window.onresize = function () {
  document.body.height = window.innerHeight
}

window.onresize()

const store = configure_store()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)

const disable_logrocket = localStorage.getItem('disable_logrocket')
if (!config.isTestEnv && !disable_logrocket) {
  LogRocket.init('pr05ix/minisuper-customer')
}
