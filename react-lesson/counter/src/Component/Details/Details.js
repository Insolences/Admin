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
      <img
        src={this.state.url}
        className={`${"card-img-top "} ${s.img}`}
        alt="qwe"
      />
    ) : (
      <img src={img} className={`${"card-img-top "} ${s.img}`} alt="qwe" />
    );
  };

  render() {
    return (
      <>
        <Navigation />
        <h2 className={s.h2}>Details</h2>
        <div className={`${"card "} ${s.card}`}>
          {this.renderImg()}
          <div className={`${"card-body "} ${s.body}`}>
            <h5 className="card-title">Title: {this.state.title}</h5>
          </div>
          <ul className={`${"list-group list-group-flush"} ${s.list}`}>
            <li className="list-group-item">ID: {this.state.id}</li>
            <li className="list-group-item">Price: {this.state.price} $</li>
            <li className="list-group-item">Quantity: {this.state.quantity}</li>
            <li className="list-group-item">
              Status: {this.state.selectedOption}{" "}
            </li>
          </ul>
        </div>
      </>
    );
  }
}
