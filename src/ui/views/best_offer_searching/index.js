import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { SearchingMessage } from './SearchingMessage'
import { assign_best_offer_request } from 'src/state/actions/offer_actions'
import { paths } from 'src/constants'
import { show_alert_message } from '../../../state/actions/alert_actions'

class BestOfferSearchingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: null,
    }
  }
  componentDidMount() {
    const { history, cart, assign_best_offer_request } = this.props
    if (history.action === 'POP') {
      history.push(paths.quantity)
      return
    }
    assign_best_offer_request(
      {
        product_code: cart.product.code,
        quantity: cart.quantity,
      },
      () => {
        history.push(paths.assigned_offer)
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
