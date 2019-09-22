import React from "react";
import s from "./Details.module.css";
import img from "../../qwe.jpg";
import { AppContext } from "../../Context";
import { Navigation } from "../Navigation/Navigation";

export default class Details extends React.Component {
  static contextType = AppContext;
  state = {};

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

  renderImg = () => {
    return this.state.url ? (
      <img src={this.state.url} className={`${"card-img-top "}`} alt="qwe" />
    ) : (
      <img src={img} className={`${"card-img-top "}`} alt="qwe" />
    );
  };

  render() {
    const { title, price, id, quantity, selectedOption } = this.state;
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Details</h2>
        <div className={`${"card "} ${s.card}`}>
          {this.renderImg()}
          <div className={`${"card-body "} ${s.body}`}>
            <h5 className="card-title">Title: {title}</h5>
          </div>
          <ul className={`${"list-group list-group-flush"} ${s.list}`}>
            <li className="list-group-item">ID: {id}</li>
            <li className="list-group-item">Price: {price} $</li>
            <li className="list-group-item">Quantity: {quantity}</li>
            <li className="list-group-item">
              Status: {selectedOption ? "In Stock" : "Not in Stock"}
            </li>
          </ul>
        </div>
      </>
    );
  }
}
