import * as offersService from 'src/state/services/offers'
import * as ordersService from 'src/state/services/orders'
import React from 'react'
import { AssignedOfferForm } from './components/AssignedOfferForm'
import {set_selected_quantity} from "../../../state/actions/cart_actions";
import {connect} from "react-redux";

class AssignedOfferView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offer: {
        deliverer: {
          name: 'Buscando...',
        },
      },
      total: '...',
      location: {
        latitude: '',
        longitude: '',
      },
    }
  }

  async componentDidMount() {
    const location = await this._getPosition()
    this.setState({
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    })
    const response = await offersService.assignBestOffer(
      this.state.location,
      this.props.params.product.code,
      this.props.params.quantity,
    )
    if (response && response.success) {
      const offer = response.data
      this.setState({ offer })
      this.setState({
        total: Number(offer.unitPrice) * Number(this.props.params.quantity),
      })
    } else {
      alert(JSON.stringify(response.errors))
    }
  }

  _getPosition = () => {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error)
    })
  }

  changeDeliverer = async () => {
    // this.props.changeView(views.CHANGE_DELIVERER, {
    //   product_code: this.props.params.product.code,
    //   quantity: this.props.params.quantity,
    // })
  }

  order = async () => {
    const response = await ordersService.placeOrder(
      this.state.location,
      this.state.offer.id,
      this.props.params.quantity,
    )
    if (response.success) {
      // this.props.changeView(views.ORDER, {
      //   order: response.data,
      //   offer: this.state.offer,
      //   product: this.props.params.product,
      //   quantity: this.props.params.quantity
      // })
    } else {
      alert(JSON.stringify(response))
    }
  }

  onCancel = async () => {
    await offersService.discardOfferAssigment(this.state.offer.id)
    // this.props.changeView(views.QUANTITY)
  }

  render() {
    return (
      <AssignedOfferForm
        {...this.props}
        {...this.state}
        changeDeliverer={this.changeDeliverer}
        order={this.order}
        onCancel={this.onCancel}
      />
    )
  }
}

function mapStateToProps(state) {
  const {
    cart: { product },
    offers: { lowest_price_by_product },
  } = state
  return {
    selected_product: product,
    price: lowest_price_by_product[product.code],
  }
}

const mapDispatchToProps = {
  set_selected_quantity
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignedOfferView)
