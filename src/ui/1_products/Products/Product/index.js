<<<<<<< HEAD
import React from 'react'
import { Link } from "react-router-dom";
import {styles} from "./styles";
=======
import React from "react";
import { views } from 'src/ui/Views'
>>>>>>> origin/master

export class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
 const productImages = {
 ORANGE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/orange_available.jpg')`,
 RED_APPLE: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/red_apple_available.jpg')`,
 CORN_TORTILLA: `url('https://s3.us-west-1.amazonaws.com/minisuper.images/corn_tortilla_available.jpg')`
}
 styles.image={
   display: "flex",
   justifyContent:"center",
   backgroundImage: productImages[this.props.product.code],
   backgroundSize: 'contain',
   backgroundRepeat: 'no-repeat',
   height: "100px",
  width: "100px"
 }

    return (
<<<<<<< HEAD
        <div style={styles.container}>
        <div style = {styles.image}>
        </div>
        <div style = {styles.mainPanel}>
        <div style = {styles.textTitle}>  {this.props.product.name}</div>
        <div style = {styles.textPanel}>
        <div style = {styles.textBody}>${this.props.lowestPrice}</div>
        <div style = {styles.textBody}>  {this.props.lowestPrice && (
              <Link to="/quantity">
                <button style={styles.button}>
                  <div style={styles.buttonText}>Comprar</div>
                </button>
              </Link>
          )}
          </div>
          </div>
          </div>
=======
        <div>
          {this.props.product.name} - ${this.props.lowestPrice}
          {this.props.lowestPrice &&
          <button onClick={() => this.props.changeView(views.QUANTITY, {
            product: this.props.product,
            lowestPrice: this.props.lowestPrice
          })}>Comprar</button>}
>>>>>>> origin/master
        </div>
    );
  }
}
