import React from "react";
import {Product} from "./Product";

export class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props: ", this.props);
    return (
        <div>
          location:{" "}
          {this.props.customerLocation.latitude +
          "," +
          this.props.customerLocation.longitude}
          {this.props.products.map(p => (
              <Product
                  key={p.id}
                  product={p}
                  lowestPrice={this.props.lowestPriceByProduct[p.code]}
                  changeView={this.props.changeView}
              />
          ))}
        </div>
    );
  }
}
