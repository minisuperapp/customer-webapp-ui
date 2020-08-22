import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'
import logo from 'src/ui/images/logo.png'
import { search_product_request } from 'src/state/actions/product_actions'

class Header extends Component {
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

  refresh = () => {
    this.setState({})
  }
  handleProductSearch = event => {
    const { value } = event.target
    const { search_product_request, history } = this.props
    if (history.location.path !== paths.home) {
      history.push(paths.home)
    }
    search_product_request(value)
  }
  render() {
    const { active_page } = this.state
    return (
      <Style>
        <div className="search">
          <input
            autoFocus={true}
            type="text"
            placeholder="Busca un producto..."
            onChange={this.handleProductSearch}
          />
        </div>
        <div className="logo_links">
          <div className="logo">
            <img alt="minisuper" src={logo} width="80" height="70" align="absmiddle" />
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
