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

  addProduct = product => {
    let newProducts = this.state.products.slice();
    newProducts.push(product);
    this.setState({
      products: newProducts
    });
    alert("Продукт добавлен");
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
          inStock: this.inStock,
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
