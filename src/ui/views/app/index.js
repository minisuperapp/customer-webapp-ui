import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import ProductsView from './products'
import PreferencesView from './preferences'
import QuantityView from './quantity'
import CartView from './cart'
import CheckoutView from './checkout'
import DeliveryAddressView from './delivery_address'
import ChangeDelivererView from './change_deliverer'
import OrderView from './order'
import OrdersListView from './orders_list'
import OrdersDetailsView from './order_details'
import Style from './style'
import { get_product_request } from 'src/state/actions/product_actions'
import { get_best_offers_request } from 'src/state/actions/offer_actions'
import { connect } from 'react-redux'
import { paths } from 'src/constants'
import Alert from 'src/ui/components/alert'

class App extends Component {
  async componentDidMount() {
    const { get_product_request, get_best_offers_request } = this.props
    get_product_request()
    get_best_offers_request()
  }

  render() {
    return (
      <Style>
        <Header history={this.props.history} />
        <Alert />
        <div className="main">
          <Switch>
            <Route exact path={paths.home} component={ProductsView} />
            <Route exact path={paths.preferences} component={PreferencesView} />
            <Route exact path={paths.quantity} component={QuantityView} />
            <Route exact path={paths.cart} component={CartView} />
            <Route exact path={paths.checkout} component={CheckoutView} />
            <Route exact path={paths.delivery_address} component={DeliveryAddressView} />
            <Route exact path={paths.change_deliverer} component={ChangeDelivererView} />
            <Route exact path={paths.order} component={OrderView} />
            <Route exact path={paths.orders_list} component={OrdersListView} />
            <Route exact path={paths.order_details} component={OrdersDetailsView} />
          </Switch>
        </div>
        <Footer history={this.props.history} />
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  get_product_request,
  get_best_offers_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
