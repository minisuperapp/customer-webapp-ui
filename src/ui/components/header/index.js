import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'
import logo from 'src/ui/images/logo.png'
import { search_product_request } from 'src/state/actions/product_actions'

class Header extends Component {
  refresh = () => {
    this.setState({})
  }
  handleProductSearch = event => {
    const { value } = event.target
    const { search_product_request } = this.props
    search_product_request(value)
  }
  render() {
    const active_page = window.location.pathname
    return (
      <Style>
        <div className="search">
          <input
            autoFocus={true}
            type="text"
            placeholder="Buscar un producto..."
            onChange={this.handleProductSearch}
          />
        </div>
        <div className="logo_links">
          <div className="logo">
            <img alt="minisuper" src={logo} width="100" height="80" align="absmiddle" />
          </div>
          <div />
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
        </div>
      </Style>
    )
  }
}

function mapStateToProps(state) {}

const mapDispatchToProps = {
  search_product_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
