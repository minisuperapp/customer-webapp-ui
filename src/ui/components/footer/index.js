import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'
import { search_product_request } from 'src/state/actions/product_actions'

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
        <div className="links">
          <Link
            className={`${
              ![paths.register, paths.orders_list].includes(active_page) ? 'active' : ''
            } products_link`}
            onClick={this.refresh}
            to={paths.home}>
            Productos
          </Link>
          <Link
            className={`${active_page === paths.orders_list ? 'active' : ''} orders_link`}
            onClick={this.refresh}
            to={paths.orders_list}>
            Mis Ordenes
          </Link>
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
