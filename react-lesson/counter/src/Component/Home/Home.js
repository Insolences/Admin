import React from "react";
import { AppContext } from "../../Context";
import ProductList from "../ProductsList/ProductList";

export default class Home extends React.Component {
  static contextType = AppContext;

  render() {
    return <ProductList isAdmin={false} />;
  }
}
