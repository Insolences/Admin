import React from "react";
import { Link } from "react-router-dom";
import img from "../../qwe.jpg";
import s from "./Product.module.css";
import { AppContext } from "../../Context";

export default class Product extends React.Component {
  static contextType = AppContext;

  clickDeleteHandler = e => {
    e.preventDefault();
    this.context.deleteProduct(this.props.product.id);
  };

  renderImg = () => {
    const { url } = this.props.product;

    return url ? (
      <img src={url} className={`${"card-img-top "} ${s.img}`} alt="qwe" />
    ) : (
      <img src={img} className={`${"card-img-top "} ${s.img}`} alt="qwe" />
    );
  };

  renderProducts = () => {
    const { id } = this.props.product;

    if (this.props.isAdmin) {
      {
        return (
          <div className="card-body">
            <button type="button" className="btn btn-success">
              <Link to={`/admin/product/edit/${id}`}>Edit</Link>
            </button>

            <button
              type="button"
              className="btn btn-warning"
              onClick={this.clickDeleteHandler}
            >
              Delete
            </button>
          </div>
        );
      }
    } else
      return (
        <div className="card-body">
          <button type="button" className="btn btn-info">
            <Link to={`/home/details/${id}`}>Details</Link>
          </button>
        </div>
      );
  };

  render() {
    const { id, selectedOption, title, price, quantity } = this.props.product;

    return (
      <div className={s.card}>
        <div className={`${selectedOption ? " " : s.cardIsEmpty}`} />
        {this.renderImg()}
        <div className="card-body">
          <h5 className="card-title">Title:{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {id}</li>
          <li className="list-group-item">Price: {price} $</li>
          <li className="list-group-item">Quantity: {quantity}</li>
        </ul>
        <div className={`${"form-check "} ${s.radioCheck}`}>
          <p>Status: {selectedOption ? "In Stock" : "Not in Stock"}</p>
        </div>
        {this.renderProducts()}
      </div>
    );
  }
}
