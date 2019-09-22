import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import s from "./AddProduct.module.css";
import { Input } from "../Input";
import { Navigation } from "../Navigation/Navigation";

export default class AddProduct extends React.Component {
  static contextType = AppContext;

  state = {};

  inputTitleRef = React.createRef();
  inputPriceRef = React.createRef();
  inputQuantityRef = React.createRef();
  inputUrlRef = React.createRef();

  handleClick = e => {
    e.preventDefault();
    let product = {
      title: this.inputTitleRef.current.value,
      image: this.inputUrlRef.current.value,
      price: parseInt(this.inputPriceRef.current.value),
      quantity: parseInt(this.inputQuantityRef.current.value),
      inStock: this.state.inStock
    };

    this.context.addProduct(product);

    this.inputTitleRef.current.value = "";
    this.inputPriceRef.current.value = "";
    this.inputQuantityRef.current.value = "";
  };

  handleOptionChange = e => {
    this.setState({
      inStock: e.target.value
    });
  };

  renderForm = () => {
    return (
      <form className={s.card}>
        <div className="card-body">
          <h5 className="card-title">
            Product url: <Input type="text" ref={this.inputUrlRef} />
          </h5>
          <h5 className="card-title">
            Card title: <Input type="text" ref={this.inputTitleRef} required />
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Price:{" "}
            <Input
              type="number"
              ref={this.inputPriceRef}
              pattern="\d+"
              required
            />
          </li>
          <li className="list-group-item">
            Quantity:{" "}
            <Input
              type="number"
              ref={this.inputQuantityRef}
              pattern="\d+"
              required
            />
          </li>
        </ul>
        <div className={`${"form-check "} ${s.radioCheck}`}>
          <p>
            <p>STATUS:</p>
            <Input
              name="in_stock"
              type="radio"
              value="true"
              checked={this.state.inStock === "true"}
              onChange={this.handleOptionChange}
            />
            In Stock
          </p>
          <p>
            <Input
              name="in_stock"
              type="radio"
              value="false"
              checked={this.state.inStock === "false"}
              onChange={this.handleOptionChange}
            />
            Not in Stock
          </p>
        </div>
        <div className="card-body">
          <Link to="/admin">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.handleClick}
            >
              Add
            </button>
          </Link>
        </div>
      </form>
    );
  };

  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Add Product</h2>
        <div className={s.addCard}>{this.renderForm()}</div>
      </>
    );
  }
}
