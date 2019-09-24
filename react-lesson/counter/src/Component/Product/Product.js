import React from "react";
import { Link } from "react-router-dom";
import img from "../../qwe.jpg";
import s from "./Product.module.css";
import {API} from "../API";
import { Redirect } from 'react-router';

export default class Product extends React.Component {

  state={
      products: this.props.product,
      redirect: false
  };

    async deleteProduct (id){
        let res = await API.deleteProduct(id);
    };

  clickDeleteHandler = e => {
    e.preventDefault();
    this.deleteProduct(this.state.products.id).then(() =>{
        this.setState({
            redirect: true
        });
        console.log('Removed product')
    }).catch((err)=>{
        console.log(err)
    });
  };

  renderImg = () => {
    const { image } = this.props.product;

    return image ? (
      <img src={image} className={`${"card-img-top "} ${s.img}`} alt="qwe" />
    ) : (
      <img src={img} className={`${"card-img-top "} ${s.img}`} alt="qwe" />
    );
  };

  renderButtons = () => {
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
                <Link to={`/admin`}>Delete</Link>
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
    const { id, inStock, title, price, quantity } = this.props.product;
      if (this.state.redirect){
          return <Redirect push to="/admin" />;
      }
    return (
      <div className={s.card}>
        <div className={`${inStock ? " " : s.cardIsEmpty}`} />
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
          <p>Status: {inStock ? "In Stock" : "Not in Stock"}</p>
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}
