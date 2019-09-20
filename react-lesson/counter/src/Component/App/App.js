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
    products: []
  };

  addProduct = value => {
    let newProducts = this.state.products.slice();
    let id = value.id;
    let found = newProducts.some(el => {
      return el.id === id;
    });
    if (found) {
      this.addToLocalStorage(newProducts);
      alert("Товар с данным id существует");
    } else if (!found) {
      newProducts.push({ ...value });
      this.addToLocalStorage(newProducts);
      alert("Продукт добавлен");
    }
    this.setState({
      products: newProducts
    });
  };

  addToLocalStorage = newProducts => {
    const productString = JSON.stringify(newProducts);
    localStorage.setItem("products", productString);
  };

  deleteProduct = id => {
    let newProducts = this.state.products.slice();
    let idToDelete = newProducts
      .map(item => {
        return item.id;
      })
      .indexOf(id);
    ~idToDelete && newProducts.splice(idToDelete, 1);
    this.deleteFromLocalStorage(newProducts);
    this.setState({
      products: newProducts
    });
  };

  deleteFromLocalStorage = newProducts => {
    const productString = JSON.stringify(newProducts);
    localStorage.setItem("products", productString);
  };

  componentDidMount() {
    window.localStorage.clear();
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          addProduct: this.addProduct,
          deleteProduct: this.deleteProduct,
          addToLocalStorage: this.addToLocalStorage,
          selectedOption: this.selectedOption
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
