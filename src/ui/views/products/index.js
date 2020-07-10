import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bluebird from 'bluebird'
import { set_selected_product } from 'src/state/actions/cart_actions'
import * as offersService from 'src/state/services/offers'
import * as orderService from 'src/state/services/orders'
import { ProductList } from './components/ProductList'
import { LoadingList } from './components/LoadingList'
import config from 'src/config'
import io from 'socket.io-client'

import Style from './style'

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
      <Style>
        <ProductList
          products={products}
          lowest_price_by_product={lowest_price_by_product}
          handleProductSelection={this.handleProductSelection}
        />
        {!!this.state.currentOrders.length && (
          <button
            className="ordersButton"
            // onClick={() => this.props.changeView(views.ORDERS_LIST)}
          >
            Ver órdenes ({this.state.currentOrders.length})
          </button>
        )}
      </Style>
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
  set_selected_product,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView)
