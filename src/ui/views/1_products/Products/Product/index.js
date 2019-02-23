import React from 'react'
import { views } from 'src/ui/views/index'
import css from './styles.module.css'

export class Product extends React.Component {
  render() {
    const productImages = {
      ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
      RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
      CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`,
    }
    const style = {
      backgroundImage: productImages[this.props.product.code],
    }

    return (
      <div className={css.container}>
        <div className={css.image} style={style} />
        <div className={css.mainPanel}>
          <div className={css.textTitle}> {this.props.product.name}</div>
          <div className={css.textPanel}>
            <div className={css.textBody}>${this.props.lowestPrice}</div>
            <div className={css.textBody}>
              {' '}
              {this.props.lowestPrice && (
                <button
                  className={css.button}
                  onClick={() =>
                    this.props.changeView(views.QUANTITY, {
                      product: this.props.product,
                      lowestPrice: this.props.lowestPrice,
                    })
                  }>
                  <div className={css.buttonText}>Comprar</div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
