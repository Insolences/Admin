import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import { Edit } from "../Edit";
import s from "./Home.module.css";
import { AppContext } from "../../Context";
export default class Home extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <>
        <nav className="nav nav-pills flex-column flex-sm-row">
          <Link
            to="/"
            className="flex-sm-fill text-sm-center nav-link active"
            href="#"
          >
            Home
          </Link>
          <Link
            to="/admin"
            className="flex-sm-fill text-sm-center nav-link"
            href="#"
          >
            Admin
          </Link>
        </nav>
        <h2 className={s.h2_home}>Product List</h2>
        <div className={s.cardGroup}>
          {this.context.products.map((el, index) => (
            <Product
              key={index}
              title={el.title}
              isAdmin={false}
              index={el.index}
              id={el.id}
              quantity={el.quantity}
              price={el.price}
              url={el.url}
              selectedOption={el.selectedOption}
            />
          ))}
        </div>
      </>
    );
  }
}
