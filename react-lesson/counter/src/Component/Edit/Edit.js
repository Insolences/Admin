import React from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../../Context";
import s from "../Product/Product.module.css";
import img from "../../qwe.jpg";

export default class Edit extends React.Component {
    static contextType = AppContext;
    render() {

        return (
            <>
                <nav className="nav nav-pills flex-column flex-sm-row">
                    <Link to='/' className="flex-sm-fill text-sm-center nav-link " href="#">Home</Link>
                    <Link to='/admin' className="flex-sm-fill text-sm-center nav-link" href="#">Admin</Link>
                </nav>
                <h2>EDIT Product</h2>
                <div className={s.card}>
                    <img src={img} className="card-img-top" alt="qwe"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">ID</li>
                        <li className="list-group-item">Name</li>
                        <li className="list-group-item">Price</li>
                        <li className="list-group-item">Quantity</li>
                    </ul>
                    <div className={`${'form-check '} ${s.radioCheck}`} >
                        <p><input name="dzen" type="radio" value="nedzen"/> Not in Stock</p>
                        <p><input name="dzen" type="radio" value="dzen"/> In Stock</p>
                    </div>
                    <div className="card-body">
                        <Link to='/home/product/:id' type="button" className="btn btn-success">Edit</Link>
                        <button type="button" className="btn btn-warning">Remove</button>
                    </div>
                </div>
            </>
        );
    }
}