import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import s from "./Edit.module.css";
import { Navigation } from "../Navigation/Navigation";
import { Input } from "../Input";

export default class Edit extends React.Component {
  static contextType = AppContext;

  state = {
    selectedOption: "In Stock"
  };

  inputTitleRef = React.createRef();
  inputIdRef = React.createRef();
  inputPriceRef = React.createRef();
  inputQuantityRef = React.createRef();
  inputUrlRef = React.createRef();

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    const item = this.context.products.find(el => el.id === id);
    this.setState({
      title: item.title,
      price: item.price,
      url: item.url,
      id: item.id,
      quantity: item.quantity,
      selectedOption: item.selectedOption
    });
  }

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

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
    this.context.editProduct(value, this.state.id);
    console.log(this.state.id);
  };

  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Edit Product</h2>
        <div className={s.editCard}>
          <form className={s.card}>
            <div className="card-body">
              <h5 className="card-title">
                Product url:{" "}
                <Input
                  ref={this.inputUrlRef}
                  type="text"
                  defaultValue={this.state.url}
                />
              </h5>
              <h5 className="card-title">
                Card title:{" "}
                <Input
                  ref={this.inputTitleRef}
                  type="text"
                  defaultValue={this.state.title}
                />
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                ID:{" "}
                <Input
                  ref={this.inputIdRef}
                  type="text"
                  defaultValue={this.state.id}
                />
              </li>
              <li className="list-group-item">
                Price:{" "}
                <Input
                  ref={this.inputPriceRef}
                  type="number"
                  defaultValue={this.state.price}
                />
              </li>
              <li className="list-group-item">
                Quantity:{" "}
                <Input
                  ref={this.inputQuantityRef}
                  type="number"
                  defaultValue={this.state.quantity}
                />
              </li>
            </ul>
            <div className={`${"form-check "} ${s.radioCheck}`}>
              <p>
                <p>STATUS:</p>
                <input
                  ref={this}
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
              <button
                type="button"
                className="btn btn-success"
                onClick={this.handleClick}
              >
                <Link to="/admin">EDIT</Link>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
