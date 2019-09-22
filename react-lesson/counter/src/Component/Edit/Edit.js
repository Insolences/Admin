import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import s from "./Edit.module.css";
import { Navigation } from "../Navigation/Navigation";
import { Input } from "../Input";

export default class Edit extends React.Component {
  static contextType = AppContext;

  state = {
    inStock: "true"
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
      image: item.image,
      id: item.id,
      quantity: item.quantity
    });
  }

  handleOptionChange = e => {
    this.setState({
      inStock: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let product = {
      title: this.inputTitleRef.current.value,
      image: this.inputUrlRef.current.value,
      id: parseInt(this.inputIdRef.current.value),
      price: parseInt(this.inputPriceRef.current.value),
      quantity: parseInt(this.inputQuantityRef.current.value),
      inStock: this.state.inStock === "true"
    };
    this.context.editProduct(product, this.state.id);
  };

  render() {
    const { title, image, id, quantity, price } = this.state;
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
                  defaultValue={image}
                />
              </h5>
              <h5 className="card-title">
                Card title:{" "}
                <Input
                  ref={this.inputTitleRef}
                  type="text"
                  defaultValue={title}
                />
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                ID:{" "}
                <Input
                  ref={this.inputIdRef}
                  type="text"
                  disabled="true"
                  defaultValue={id}
                />
              </li>
              <li className="list-group-item">
                Price:{" "}
                <Input
                  ref={this.inputPriceRef}
                  type="number"
                  defaultValue={price}
                />
              </li>
              <li className="list-group-item">
                Quantity:{" "}
                <Input
                  ref={this.inputQuantityRef}
                  type="number"
                  defaultValue={quantity}
                />
              </li>
            </ul>
            <div className={`${"form-check "} ${s.radioCheck}`}>
              <p>
                <p>STATUS:</p>
                <input
                  name="In_Stock"
                  type="radio"
                  value="true"
                  checked={this.state.inStock === "true"}
                  onChange={this.handleOptionChange}
                />
                In Stock
              </p>
              <p>
                <Input
                  name="In_Stock"
                  type="radio"
                  value="false"
                  checked={this.state.inStock === "false"}
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
