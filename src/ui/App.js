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
import { get_product_request } from '../state/actions/product_actions'
import { get_offers_by_product_request } from '../state/actions/offer_actions'
import { connect } from 'react-redux'

class App extends Component {
  async componentDidMount() {
    const { get_product_request, get_offers_by_product_request } = this.props
    get_product_request()
    try {
      const position = await this._getPosition()
      get_offers_by_product_request({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    } catch (e) {
      this.setState({
        locationDisabled: true,
      })
    }
  }

  _getPosition = () => {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error)
    })
  }

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
<<<<<<< HEAD
          <Route exact path="/register" component={Register} />
=======
>>>>>>> 204b889706711c8c280d3a838cca1b45d390dfbb
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = {
  get_product_request,
  get_offers_by_product_request,
}

export default connect(() => ({}), mapDispatchToProps)(App)
