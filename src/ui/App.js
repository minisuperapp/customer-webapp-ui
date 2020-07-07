import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './views/header'
import ProductsView from './views/products'
import QuantityView from './views/quantity'
import AssignedOfferView from './views/assigned_offer'
import ChangeDelivererView from './views/change_deliverer'
import OrderView from './views/order'
import OrdersListView from './views/orders_list'
import OrdersDetailsView from './views/order_details'
import Register from './views/register'
import css from './styles.modules.css'

class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductsView} />
          <Route exact path="/quantity" component={QuantityView} />
          <Route exact path="/assigned_offer" component={AssignedOfferView} />
          <Route exact path="/change_deliverer" component={ChangeDelivererView} />
          <Route exact path="/order" component={OrderView} />
          <Route exact path="/orders_list" component={OrdersListView} />
          <Route exact path="/order_details" component={OrdersDetailsView} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    )
  }
}

export default App
