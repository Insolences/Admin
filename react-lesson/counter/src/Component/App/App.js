import React from "react";
import { Admin } from "../Admin";
import { Home } from "../Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddProduct } from "../AddProduct";
import { Edit } from "../Edit";
import { Details } from "../Details";
import { AppContext } from "../../Context";

export default class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: "Honda Accord",
        price: 200000,
        quantity: 3,
        selectedOption: true,
        url: "https://a.d-cd.net/f3a2c4as-480.jpg"
      },
      {
        id: 2,
        title: "Audi A6",
        price: 450000,
        quantity: 0,
        selectedOption: false,
        url: "http://dom-cvety.com/photo/9-0/1134_rrrre-1920.jpg"
      },
      {
        id: 3,
        title: "Ford",
        price: 600000,
        quantity: 3,
        selectedOption: true,
        url: "http://catalogcars.net/wp-content/uploads/2014/1/ford_42.jpg"
      }
    ]
  };

  addProduct = product => {
    let found = this.state.products.some(el => {
      return el.id === product.id;
    });
    if (found) {
      alert("Товар с данным id существует");
    } else {
      let newProducts = this.state.products.slice();
      newProducts.push(product);
      this.setState({
        products: newProducts
      });
      alert("Продукт добавлен");
    }
  };

  editProduct = (product, id) => {
    let newProducts = this.state.products.map(el => {
      if (el.id !== id) {
        return el;
      }
      return { ...el, ...product };
    });

    this.setState({
      products: newProducts
    });
  };

  deleteProduct = id => {
    let newProducts = this.state.products.filter(e => e.id !== id);

    this.setState({
      products: newProducts
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          addProduct: this.addProduct,
          deleteProduct: this.deleteProduct,
          selectedOption: this.selectedOption,
          editProduct: this.editProduct
        }}
      >
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/add" exact component={AddProduct} />
          <Route path="/home/details/:id" exact component={Details} />
          <Route path="/admin/product/edit/:id" exact component={Edit} />
        </Router>
      </AppContext.Provider>
    );
  }
}
