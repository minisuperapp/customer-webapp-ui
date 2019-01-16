import React, { Component } from 'react'
import Index from './views/0_header/index'
import { views } from './views/index'
import { styles } from './styles'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      view: views.PRODUCTS,
      nextStepParams: {},
    }
  }

  changeView = (view, params) => {
    this.setState({
      view,
      nextStepParams: params,
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <Index/>
        <this.state.view
          {...this.props}
          changeView={this.changeView}
          params={this.state.nextStepParams}
        />
      </div>
    )
  }
}

export default Main
