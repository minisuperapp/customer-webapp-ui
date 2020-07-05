import React from 'react'
import css from './styles.module.css'

class Provider extends React.Component {
  render() {
    const {deliverer, unitPrice} = this.props.offer
    return (
      <div className={css.deliverer}>
        <div className={css.delivererName}>
          <h1>{deliverer.name}</h1>
        </div>
        <div className={css.delivererOfferPrice}>
          <h2>$ {unitPrice}</h2>
        </div>
        <div className={css.delivererSelect}>
          <button>Seleccionar</button>
        </div>
      </div>
    )
  }
}

export default Provider