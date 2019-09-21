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
        title: "Honda Accord",
        price: 200000,
        id: 1,
        quantity: 3,
        selectedOption: "In Stock",
        url: "https://a.d-cd.net/f3a2c4as-480.jpg"
      },
      {
        title: "Audi A6",
        price: 450000,
        id: 2,
        quantity: 0,
        selectedOption: "Not In Stock",
        url: "http://dom-cvety.com/photo/9-0/1134_rrrre-1920.jpg"
      },
      {
        title: "Ford",
        price: 600000,
        id: 3,
        quantity: 3,
        selectedOption: "In Stock",
        url: "http://catalogcars.net/wp-content/uploads/2014/1/ford_42.jpg"
      }
    ]
  };

  addProduct = value => {
    let newProducts = this.state.products.slice();
    let id = value.id;
    let found = newProducts.some(el => {
      return el.id == id;
    });

    if (found) {
      alert("Товар с данным id существует");
    } else if (!found) {
      newProducts.push(value);
      alert("Продукт добавлен");
    }
    this.setState({
      products: newProducts
    });
  };

  editProduct = (value, id) => {
    let newProducts = this.state.products.slice();
    let idToEdit = newProducts
      .map(item => {
        return item.id;
      })
      .indexOf(id);
    ~idToEdit && newProducts.splice(idToEdit, 1, value);
    this.setState({
      products: newProducts
    });
  };

  deleteProduct = id => {
    let newProducts = this.state.products.slice();
    let idToDelete = newProducts
      .map(item => {
        return item.id;
      })
      .indexOf(id);
    ~idToDelete && newProducts.splice(idToDelete, 1);
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
