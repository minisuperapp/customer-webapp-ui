import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'
import { search_product_request } from 'src/state/actions/product_actions'

class Footer extends Component {
  refresh = () => {
    this.setState({})
  }
  render() {
    const active_page = window.location.pathname
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

function mapStateToProps(state) {}

const mapDispatchToProps = {
  search_product_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
