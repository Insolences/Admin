import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import s from "./AddProduct.module.css";
import img from "../../qwe.jpg";

export default class AddProduct extends React.Component {
  static contextType = AppContext;

  state = {
    selectedOption: "In Stock"
  };

  inputTitleRef = React.createRef();
  inputIdRef = React.createRef();
  inputPriceRef = React.createRef();
  inputQuantityRef = React.createRef();

  handleClick = e => {
    e.preventDefault();
    let value = {
      title: this.inputTitleRef.current.value,
      id: this.inputIdRef.current.value,
      price: this.inputPriceRef.current.value,
      quantity: this.inputQuantityRef.current.value,
      selectedOption: this.state.selectedOption
    };
    this.context.addToLocalStorage(value);
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
            className="flex-sm-fill text-sm-center nav-link"
            href="#"
          >
            Admin
          </Link>
        </nav>
        <h2 className={s.h2}>Add Product</h2>
        <div className={s.addCard}>
          <form className={s.card}>
            <img src={img} className="card-img-top" alt="qwe" />
            <div className="card-body">
              <h5 className="card-title">
                Card title: <input type="text" ref={this.inputTitleRef} />
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                ID: <input type="text" ref={this.inputIdRef} />
              </li>
              <li className="list-group-item">
                Price: <input type="number" ref={this.inputPriceRef} />
              </li>
              <li className="list-group-item">
                Quantity: <input type="number" ref={this.inputQuantityRef} />
              </li>
            </ul>
            <div className={`${"form-check "} ${s.radioCheck}`}>
              <p>
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
              <Link
                to="/admin"
                type="button"
                className="btn btn-success"
                onClick={this.handleClick}
              >
                Add
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}
