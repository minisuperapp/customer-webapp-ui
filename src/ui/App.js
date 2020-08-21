import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import ProductsView from './views/products'
import LocationView from './views/location'
import QuantityView from './views/quantity'
import BestOfferSearchingView from './views/best_offer_searching'
import AssignedOfferView from './views/assigned_offer'
import DeliveryAddressView from './views/delivery_address'
import ChangeDelivererView from './views/change_deliverer'
import OrderView from './views/order'
import OrdersListView from './views/orders_list'
import OrdersDetailsView from './views/order_details'
import Register from './views/register'
import Login from './views/login'
import Style from './style'
import { get_profile_request } from 'src/state/actions/auth_actions'
import { get_product_request } from 'src/state/actions/product_actions'
import { get_best_offers_request } from 'src/state/actions/offer_actions'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import Alert from './components/alert'

class App extends Component {
  async componentDidMount() {
    const { get_profile_request, get_product_request, get_best_offers_request } = this.props
    get_profile_request()
    get_product_request()
    get_best_offers_request()
  }

  render() {
    return (
      <Style>
        <Header />
        <Alert />
        <div className="main">
          <Switch>
            <Route exact path={paths.home} component={ProductsView} />
            <Route exact path={paths.location} component={LocationView} />
            <Route exact path={paths.quantity} component={QuantityView} />
            <Route exact path={paths.best_offer_searching} component={BestOfferSearchingView} />
            <Route exact path={paths.assigned_offer} component={AssignedOfferView} />
            <Route exact path={paths.delivery_address} component={DeliveryAddressView} />
            <Route exact path={paths.change_deliverer} component={ChangeDelivererView} />
            <Route exact path={paths.order} component={OrderView} />
            <Route exact path={paths.orders_list} component={OrdersListView} />
            <Route exact path={paths.order_details} component={OrdersDetailsView} />
            <Route exact path={paths.register} component={Register} />
            <Route exact path={paths.login} component={Login} />
          </Switch>
        </div>
        <Footer />
      </Style>
    )
  }
}

const mapDispatchToProps = {
  get_profile_request,
  get_product_request,
  get_best_offers_request,
}

export default connect(() => ({}), mapDispatchToProps)(App)
