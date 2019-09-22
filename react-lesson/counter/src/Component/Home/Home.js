import React from "react";
import Product from "../Product/Product";
import s from "./Home.module.css";
import { AppContext } from "../../Context";
import { Navigation } from "../Navigation/Navigation";
export default class Home extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2_home}>Product List</h2>
        <div className={s.cardGroup}>
          {this.context.products.map((el, index) => (
            <Product key={index} product={el} isAdmin={false} />
          ))}
        </div>
      </>
    );
  }
}
