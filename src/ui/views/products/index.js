import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bluebird from 'bluebird'
import { get_product_request, set_selected_product } from 'src/state/actions/product_actions'
import { get_offers_by_product_request } from 'src/state/actions/offer_actions'
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
      offersByProduct: {},
      lowestPriceByProduct: {},
      error: '',
      currentOrders: [],
      locationDisabled: false,
    }
    this.socket = {}
  }

  async componentDidMount() {
    const { get_product_request, get_offers_by_product_request } = this.props
    get_product_request()
    let location
    try {
      const position = await this._getPosition()
      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
    } catch (e) {
      this.setState({
        locationDisabled: true,
      })
    }
    get_offers_by_product_request(location)

    this.socket = io(config.API_HOST, config.socketPayload)
    this.socket.emit('subscribe_for_offers_updates', location, function () {})
    this.socket.on('published_offer', (offer) => this._processNewOffer(offer))

    const [currentOrders] = await Bluebird.join(orderService.getOrdersPendingToDeliver())

    this.setState({ currentOrders })
  }

  handleProductSelection = (product) => () => {
    const { history, set_selected_product } = this.props
    set_selected_product(product)
    history.push('/quantity')
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
    const { products, lowest_price_by_product } = this.props
    if (this.state.locationDisabled === true) {
      return 'Habilita tu localización'
    }
    if (!products.length) {
      return <LoadingList />
    }
    return (
      <div>
        <ProductList
          products={products}
          lowest_price_by_product={lowest_price_by_product}
          handleProductSelection={this.handleProductSelection}
        />
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

function mapStateToProps(state) {
  const {
    products,
    offers: { lowest_price_by_product },
  } = state
  return {
    products: products.list,
    lowest_price_by_product,
  }
}

const mapDispatchToProps = {
  get_product_request,
  get_offers_by_product_request,
  set_selected_product,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)
