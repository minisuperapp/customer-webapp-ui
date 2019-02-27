import React, {Component} from 'react'
import Index from './views/0_header/index'
import {views} from './views/index'
import css from './styles.modules.css'

class Main extends Component {
  constructor() {
    super()
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
      ...this.viewState.current.state
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
        [this.state.view]: combinedState
      }
    })
  }

  render() {
    return (
      <div className={css.container}>
        <Index/>
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

export default Main
