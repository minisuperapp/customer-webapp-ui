import React, {Component} from 'react'
import Index from './views/0_header/index'
import {views} from './views/index'
import {styles} from './styles'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      view: views.PRODUCTS,
      params: {},
      previousParams: {},
      previousState: {},
    }
  }

  changeView = (view, newParams) => {
    const combinedParams = {
      ...this.state.previousParams[view],
      ...newParams,
    }
    this.setState({
      view,
      params: combinedParams,
      previousParams: {
        ...this.state.previousParams,
        [view]: combinedParams,
      },
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <Index/>
        <this.state.view
          {...this.props}
          changeView={this.changeView}
          params={this.state.params}
          previousState={this.state.previousState[this.state.view]}
        />
      </div>
    )
  }
}

export default Main
