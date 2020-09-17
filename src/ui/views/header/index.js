import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Style from './style'
import { paths } from 'src/constants'
import logo from 'src/ui/images/logo.png'
import { search_product_request } from 'src/state/actions/product_actions'
import NavigationMenu from 'src/ui/components/navigation_menu'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
    const { cart } = this.props
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
        <div className="items">
          <div className="logo">
            <Link to={paths.home}>
              <LazyLoadImage alt="minisuper" src={logo} align="absmiddle" />
            </Link>
          </div>
          <div />
          <div className="navigation_menu">
            <NavigationMenu cart={cart} active_page={active_page} />
          </div>
        </div>
      </Style>
    )
  }
}

function mapStateToProps(state) {
  const { cart } = state
  return {
    cart,
  }
}

const mapDispatchToProps = {
  search_product_request,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
