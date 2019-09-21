import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import s from "./AddProduct.module.css";
import { Input } from "../Input";
import { Navigation } from "../Navigation/Navigation";

export default class AddProduct extends React.Component {
  static contextType = AppContext;

  state = {
    selectedOption: "In Stock"
  };

  inputTitleRef = React.createRef();
  inputIdRef = React.createRef();
  inputPriceRef = React.createRef();
  inputQuantityRef = React.createRef();
  inputUrlRef = React.createRef();

  handleClick = e => {
    e.preventDefault();
    let value = {
      title: this.inputTitleRef.current.value,
      url: this.inputUrlRef.current.value,
      id: parseInt(this.inputIdRef.current.value),
      price: parseInt(this.inputPriceRef.current.value),
      quantity: parseInt(this.inputQuantityRef.current.value),
      selectedOption: this.state.selectedOption
    };

    this.context.addProduct(value);

    this.inputTitleRef.current.value = "";
    this.inputIdRef.current.value = "";
    this.inputPriceRef.current.value = "";
    this.inputQuantityRef.current.value = "";
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Add Product</h2>
        <div className={s.addCard}>
          <form className={s.card}>
            <div className="card-body">
              <h5 className="card-title">
                Product url: <Input type="text" ref={this.inputUrlRef} />
              </h5>
              <h5 className="card-title">
                Card title:{" "}
                <Input type="text" ref={this.inputTitleRef} required />
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                ID: <Input type="text" ref={this.inputIdRef} required />
              </li>
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
                <input
                  name="In Stock"
                  type="radio"
                  value="In Stock"
                  checked={this.state.selectedOption === "In Stock"}
                  onChange={this.handleOptionChange}
                />
                In Stock
              </p>
              <p>
                <input
                  name="Not In Stock"
                  type="radio"
                  value="Not In Stock"
                  checked={this.state.selectedOption === "Not In Stock"}
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
        </div>
      </>
    );
  }
}
