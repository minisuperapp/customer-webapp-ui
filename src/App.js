import React, { Component } from "react";
import "./App.css";
import Header from "./ui/Header";
import Body from "./ui/Body";
import { geolocated } from "react-geolocated";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.coords && (
          <Body
            customerLocation={{
              latitude: this.props.coords.latitude,
              longitude: this.props.coords.longitude
            }}
          />
        )}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App);
