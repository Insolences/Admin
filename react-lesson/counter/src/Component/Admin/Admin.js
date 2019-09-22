import React from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import s from "./Admin.module.css";
import { AppContext } from "../../Context";
import { Navigation } from "../Navigation/Navigation";

export default class Admin extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Products</h2>
        <Link
          to="/admin/add"
          type="button"
          className={`${"btn btn-danger "} ${s.addProduct}`}
        >
          Add Product
        </Link>
        <div className={s.cardGroup}>
          {this.context.products.map((el, index) => (
            <Product product={el} key={index} isAdmin={true} />
          ))}
        </div>
      </>
    );
  }
}
