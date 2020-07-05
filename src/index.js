import React from 'react'
import { render } from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configure_store, { history } from './state/configure_store'
import App from './ui/App'

const store = configure_store()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)
