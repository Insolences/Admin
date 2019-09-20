import React from "react";
import { Link } from "react-router-dom";
import img from "../../qwe.jpg";
import s from "./Product.module.css";
import { AppContext } from "../../Context";
export default class Product extends React.Component {
  static contextType = AppContext;

  clickDeleteHandler = e => {
    e.preventDefault();
    this.context.deleteProduct(this.props.id);
  };

  renderImg = ()=>{
    return (this.props.url?
        <img src={this.props.url} className={`${"card-img-top "} ${s.img}`} alt="qwe" />:
        <img src={img} className={`${"card-img-top "} ${s.img}`} alt="qwe" />)
  };

  renderProducts = () => {
    if (this.props.isAdmin) {
      {
        return (
          <div className="card-body">
            <Link
              to="/home/product/:id"
              type="button"
              className="btn btn-success"
            >
              Edit
            </Link>
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
          <Link
            to={`/home/details/${this.props.id}`}
            type="button"
            className="btn btn-info"
            onClick={this.stopPropagation}
          >
            Details
          </Link>
        </div>
      );
  };

  render() {
    return (
      <div
        className={`${s.card} ${
          this.props.selectedOption == "Not In Stock" ? s.cardIsEmpty : " "
        }`}
      >
          {this.renderImg()};
        <div className="card-body">
          <h5 className="card-title">Title:{this.props.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {this.props.id}</li>
          <li className="list-group-item">Price: {this.props.price} $</li>
          <li className="list-group-item">Quantity: {this.props.quantity}</li>
        </ul>
        <div className={`${"form-check "} ${s.radioCheck}`}>
          <p>Status: {this.props.selectedOption}</p>
        </div>
        {this.renderProducts()}
      </div>
    );
  }
}
