import React from "react";
import Product from "../Product/Product";
import s from "./ProductList.module.css";
import { Navigation } from "../Navigation/Navigation";
import { API } from "../API";

export default class ProductList extends React.Component {

  state = {
    products: []
  };


  componentDidMount() {
    API.getProductsList().then(res => {
      if (res.status !== 200) {
        alert("Что то пошло не так");
      }
      this.setState({
        products: res.body,
      });
    });
  }

  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2_home}>Product List</h2>
        <div className={s.cardGroup}>
          {this.state.products.map((el, index) => (
            <Product key={index} product={el} isAdmin={this.props.isAdmin} />
          ))}
        </div>
      </>
    );
  }
}
