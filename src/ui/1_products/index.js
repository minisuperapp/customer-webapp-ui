import * as productsService from "src/services/products";
import * as offersService from "src/services/offers";
import React from "react";
import { Products } from "./Products";
import config from "src/config";
import io from "socket.io-client";

export class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      offersByProduct: {},
      lowestPriceByProduct: {},
      error: ""
    };
    this.socket = {};
  }

  async componentDidMount() {
    this.socket = io(config.API_HOST, { query: "is-test=true" });
    this.socket.emit(
        "subscribe_for_offers_updates",
        this.props.customerLocation
    );
    this.socket.on("published_offer", offer => this._processNewOffer(offer));

    const products = await productsService.getProducts();
    this.setState({ products });

    const offersByProduct = await offersService.getOffersByProduct(this.props.customerLocation);
    this.setState({ offersByProduct });

    const lowestPriceByProduct = await offersService.getLowestPriceByProduct(
        offersByProduct
    );
    this.setState({ lowestPriceByProduct });
  }

  _processNewOffer = offer => {
    const offersByProduct = offersService.addToOffersByProduct(
        this.state.offersByProduct,
        offer
    );
    this.setState({ offersByProduct });

    if (offersService.isLowestPrice(this.state.lowestPriceByProduct, offer)) {
      const lowestPriceByProduct = offersService.addToLowestPriceByProduct(
          this.state.lowestPriceByProduct,
          offer
      );
      this.setState({ lowestPriceByProduct });
    }
  };

  render() {
    return <Products {...this.state} customerLocation={this.props.customerLocation}/>;
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }
}
