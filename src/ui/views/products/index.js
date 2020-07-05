import React, { Component } from 'react'
import Bluebird from 'bluebird'
import * as productsService from 'src/state/services/products'
import * as offersService from 'src/state/services/offers'
import * as orderService from 'src/state/services/orders'
import { ProductList } from './components/ProductList'
import { LoadingList } from './components/LoadingList'
import config from 'src/config'
import io from 'socket.io-client'

import css from './styles.module.css'

class ProductsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      offersByProduct: {},
      lowestPriceByProduct: {},
      error: '',
      currentOrders: [],
      locationDisabled: false,
      location: {
        latitude: '',
        longitude: '',
      },
    }
    this.socket = {}
  }

  async componentDidMount() {
    try {
      const location = await this._getPosition()
      this.setState({
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      })
    } catch (e) {
      this.setState({
        locationDisabled: true,
      })
    }
    this.socket = io(config.API_HOST, config.socketPayload)
    this.socket.emit('subscribe_for_offers_updates', this.state.location, function () {})
    this.socket.on('published_offer', (offer) => this._processNewOffer(offer))

    const [products, offersByProduct, currentOrders] = await Bluebird.join(
      productsService.getProducts(),
      offersService.getOffersByProduct(this.state.location),
      orderService.getOrdersPendingToDeliver(),
    )
    const lowestPriceByProduct = await offersService.getLowestPriceByProduct(offersByProduct)

    this.setState({ products, offersByProduct, lowestPriceByProduct, currentOrders })
  }

  _getPosition = () => {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error)
    })
  }

  _processNewOffer = (offer) => {
    const offersByProduct = offersService.addToOffersByProduct(this.state.offersByProduct, offer)
    this.setState({ offersByProduct })

    if (offersService.isLowestPrice(this.state.lowestPriceByProduct, offer)) {
      const lowestPriceByProduct = offersService.addToLowestPriceByProduct(
        this.state.lowestPriceByProduct,
        offer,
      )
      this.setState({ lowestPriceByProduct })
    }
  }

  render() {
    if (this.state.locationDisabled === true) {
      return 'Habilita tu localización'
    }
    if (!this.state.products || !this.state.products.length) {
      return <LoadingList />
    }
    return (
      <div>
        <ProductList {...this.state} changeView={this.props.changeView} />
        {!!this.state.currentOrders.length && (
          <button
            className={css.ordersButton}
            // onClick={() => this.props.changeView(views.ORDERS_LIST)}
          >
            Ver órdenes ({this.state.currentOrders.length})
          </button>
        )}
      </div>
    )
  }

  componentWillUnmount() {
    this.socket.disconnect()
  }
}

export default ProductsView
