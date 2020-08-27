import React, { Component } from 'react'
import { connect } from 'react-redux'
import Style from './style'
import { search_product_request } from 'src/state/actions/product_actions'
import NavigationMenu from 'src/ui/components/navigation_menu'

class Footer extends Component {
  state = {
    active_page: null,
  }
  componentDidMount() {
    const { history } = this.props
    this.setState({
      active_page: history.location.pathname,
    })
    this.unregisterHistoryListener = history.listen(location => {
      this.setState({
        active_page: location.pathname,
      })
    })
  }
  componentWillUnmount() {
    this.unregisterHistoryListener()
  }
  render() {
    const { active_page } = this.state
    return (
      <Style>
        <div className="navigation_menu">
          <NavigationMenu active_page={active_page} />
        </div>
      </Style>
    )
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  search_product_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
