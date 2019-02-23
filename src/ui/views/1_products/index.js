import Bluebird from 'bluebird'
import * as productsService from 'src/services/products/index'
import * as offersService from 'src/services/offers/index'
import * as orderService from 'src/services/orders/index'
import React from 'react'
import {Products} from './Products/index'
import config from 'src/config'
import io from 'socket.io-client'
import {views} from 'src/ui/views/index'
import css from './styles.module.css'

export class ProductsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      offersByProduct: {},
      lowestPriceByProduct: {},
      error: '',
      currentOrders: [],
    }
    this.socket = {}
  }

  async componentDidMount() {
    let socketPayload = {}
    if (config.isTestEnv) {
      socketPayload = {
        query: 'is-test=true'
      }
    }
    this.socket = io(config.API_HOST, socketPayload)
    this.socket.emit('subscribe_for_offers_updates', this.props.customerLocation)
    this.socket.on('published_offer', (offer) => this._processNewOffer(offer))

    const [products, offersByProduct, currentOrders] = await Bluebird.join(
      productsService.getProducts(),
      offersService.getOffersByProduct(this.props.customerLocation),
      orderService.getOrdersPendingToDeliver()
    )
    const lowestPriceByProduct = await offersService.getLowestPriceByProduct(offersByProduct)

    this.setState({products, offersByProduct, lowestPriceByProduct, currentOrders})
  }

  _processNewOffer = (offer) => {
    const offersByProduct = offersService.addToOffersByProduct(this.state.offersByProduct, offer)
    this.setState({offersByProduct})

    if (offersService.isLowestPrice(this.state.lowestPriceByProduct, offer)) {
      const lowestPriceByProduct = offersService.addToLowestPriceByProduct(
        this.state.lowestPriceByProduct,
        offer,
      )
      this.setState({lowestPriceByProduct})
    }
  }

  render() {
    return (
      <div>
        <div className={css.textChooseProduct}>
          Elige tu producto
        </div>
        <Products
          {...this.state}
          changeView={this.props.changeView}
        />
        <div>
          <button onClick={() => this.props.changeView(views.ORDERS_LIST)}>
            Ver mis ordenes ({this.state.currentOrders.length})
          </button>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    this.socket.disconnect()
  }
}
