import React from 'react'
import { views } from 'src/ui/views/index'
import css from './styles.module.css'
import * as images from 'src/ui/views/common/images'

export class Product extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${images.getProductImageURL(this.props.product.code.toLocaleLowerCase())})`
    }

    return (
      <div className={css.container}>
        <div className={css.image} style={style} />
        <div className={css.mainPanel}>
          <div className={css.textTitle}> {this.props.product.name}</div>
          {this.props.lowestPrice && (
            <div className={css.buyPanel}>
              <div className={css.price}>
                ${this.props.lowestPrice + ' ' + this.props.product.quantityType}
              </div>
              <button
                className={css.button}
                onClick={() =>
                  this.props.changeView(views.QUANTITY, {
                    product: this.props.product,
                    lowestPrice: this.props.lowestPrice,
                  })
                }>
                Comprar
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
