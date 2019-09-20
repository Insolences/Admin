import React from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import s from "./Admin.module.css";
import { AppContext } from "../../Context";

export default class Admin extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <>
        <nav className="nav nav-pills flex-column flex-sm-row">
          <Link
            to="/"
            className="flex-sm-fill text-sm-center nav-link "
            href="#"
          >
            Home
          </Link>
          <Link
            to="/admin"
            className="flex-sm-fill text-sm-center nav-link active"
            href="#"
          >
            Admin
          </Link>
        </nav>
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
            <Product
              key={index}
              title={el.title}
              url={el.url}
              isAdmin={true}
              id={el.id}
              quantity={el.quantity}
              price={el.price}
              selectedOption={el.selectedOption}
            />
          ))}
        </div>
      </>
    );
  }
}
