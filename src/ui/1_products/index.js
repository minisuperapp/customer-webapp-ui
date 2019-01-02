import * as productsService from 'src/services/products'
import * as offersService from 'src/services/offers'
import * as orderService from 'src/services/orders'
import React from 'react'
import { Products } from './Products'
import config from 'src/config'
import io from 'socket.io-client'

export class ProductsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      offersByProduct: {},
      lowestPriceByProduct: {},
      error: '',
      currentOrders: []
    }
    this.socket = {}
  }

  async componentDidMount() {
    this.socket = io(config.API_HOST, { query: 'is-test=true' })
    this.socket.emit('subscribe_for_offers_updates', this.props.customerLocation)
    this.socket.on('published_offer', (offer) => this._processNewOffer(offer))

    const products = await productsService.getProducts()
    const offersByProduct = await offersService.getOffersByProduct(this.props.customerLocation)
    const lowestPriceByProduct = await offersService.getLowestPriceByProduct(offersByProduct)
    const currentOrders = (await orderService.getOrdersPendingToDeliver()).data.orders
    this.setState({ products, offersByProduct, lowestPriceByProduct, currentOrders })
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
    return (
      <div><Products
        {...this.state}
        changeView={this.props.changeView}
        customerLocation={this.props.customerLocation}
      />
        <div>
          <button>Ver mis ordenes ({this.state.currentOrders.length})
          </button></div>
      </div>

    )
  }

  componentWillUnmount() {
    this.socket.disconnect()
  }
}
