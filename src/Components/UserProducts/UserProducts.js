import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import {  cartSlice } from "../reduxCart/cartSlice";
const AdminProduct = () => {
  // --------------------REDUX------------------------
  const dispatch = useDispatch();
  // -------------------------------------------------
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/ShowProduct")
      .then((res) => {
        console.log("API Response:", res.data); // Log the response
        setProducts(res.data.products || []);
      })
      .catch((err) => console.log(err));
  }, []);
  // -----------------------------------
  let { id } = useParams();

  return (
    <Fragment>
      <div className="Container">
        {products?.map((el, idx) => (
          <div className="product" key={idx}>
            <h2>{el.pname}</h2>
            <img src={el.image} alt="" />
            <p>{el.pdisc}</p>
            <h4>{el.price} LE</h4>
            <div className="buttons">
              <button
                className="addToCart"
                onClick={() => dispatch(cartSlice.actions.addToCart(el))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AdminProduct;
