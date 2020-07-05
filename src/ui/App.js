import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './views/0_header'
import ProductsView from './views/1_products'
import QuantityView from './views/2_quantity'
import AssignedOfferView from './views/3_assigned_offer'
import ChangeDelivererView from './views/4_change_deliverer'
import OrderView from './views/5_order'
import OrdersListView from './views/6_orders_list'
import OrdersDetailsView from './views/7_order_details'
import { views } from './views'
import css from './styles.modules.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: views.PRODUCTS,
      params: {},
      previousParams: {},
      previousState: {},
    }
    this.viewState = React.createRef()
  }

  changeView = (view, newParams) => {
    const combinedParams = {
      ...this.state.previousParams[view],
      ...newParams,
    }
    const combinedState = {
      ...this.state.previousState[this.state.view],
      ...this.viewState.current.state,
    }

    this.setState({
      view,
      params: combinedParams,
      previousParams: {
        ...this.state.previousParams,
        [view]: combinedParams,
      },
      previousState: {
        ...this.state.previousState,
        [this.state.view]: combinedState,
      },
    })
  }

  render() {
    return (
      <div className={css.container}>
        <Index />
        {/*<Switch>*/}
        {/*  <Route exact path="/" component={ProductsView}/>*/}
        {/*  <Route exact path="/quantity" component={QuantityView}/>*/}
        {/*  <Route exact path="/assigned_offer" component={AssignedOfferView}/>*/}
        {/*  <Route exact path="/change_deliverer" component={ChangeDelivererView}/>*/}
        {/*  <Route exact path="/order" component={OrderView}/>*/}
        {/*  <Route exact path="/orders_list" component={OrdersListView}/>*/}
        {/*  <Route exact path="/order_details" component={OrdersDetailsView}/>*/}
        {/*</Switch>*/}
        <this.state.view
          {...this.props}
          changeView={this.changeView}
          params={this.state.params}
          previousState={this.state.previousState[this.state.view]}
          ref={this.viewState}
        />
      </div>
    )
  }
}

export default App
