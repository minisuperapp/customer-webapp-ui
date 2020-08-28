import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { SearchingMessage } from './SearchingMessage'
import { assign_best_offer_request } from 'src/state/actions/offer_actions'
import { paths } from 'src/constants'
import { show_alert_message } from 'src/state/actions/alert_actions'
import queryString from 'query-string'
import { get_product_by_code } from 'src/state/services/products'

class BestOfferSearchingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: null,
      product: null,
    }
  }
  async componentDidMount() {
    const { product_code } = queryString.parse(this.props.location.search)
    const product = await get_product_by_code(product_code)
    this.setState({
      quantity: product.minimum_buying_quantity,
      product,
    })

    const { history, cart, assign_best_offer_request } = this.props
    if (history.action === 'POP') {
      history.push(paths.quantity)
      return
    }
    assign_best_offer_request(
      {
        product_code: product.code,
        quantity: cart.quantity,
      },
      () => {
        history.push({ pathname: paths.assigned_offer, search: `?product_code=${product.code}` })
      },
      errors => {
        this.setState({ errors })
      },
    )
  }

  render() {
    const { errors } = this.state
    const { show_alert_message } = this.props
    if (errors && errors.length) {
      show_alert_message(errors[0].message)
      return <Redirect to={paths.quantity} />
    }
    return <SearchingMessage />
  }
}

function mapStateToProps(state) {
  const { cart } = state
  return {
    cart,
  }
}

const mapDispatchToProps = {
  assign_best_offer_request,
  show_alert_message,
}

export default connect(mapStateToProps, mapDispatchToProps)(BestOfferSearchingView)
