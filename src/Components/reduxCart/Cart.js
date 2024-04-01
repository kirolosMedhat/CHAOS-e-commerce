import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./cart.css";
const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  localStorage.setItem("CartItems", { cartProducts });

  console.log(cartProducts);

  return (
    <Fragment>
      <button className="check">Check Out</button>
      <div className="Container">
        {cartProducts.map((el, idx) => (
          <div className="product" key={idx}>
            <h2>{el.pname}</h2>
            <img src={el.image} alt="" />
            <p>{el.pdisc}</p>
            <h4>{el.price} LE</h4>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Cart;
