import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import "./product.css";
const ProductApi = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(products);
  return (
    <Fragment>
      <div className="Container">
        {products?.map((el) => (
          <div className="product">
            <h2>{el.title}</h2>
            <img src={el.image} alt="" />
            <p>{el.description}</p>
            <h4>{el.price} LE</h4>
            <div className="buttons">
              <button className="update">update</button>
              <button className="delete">delete</button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductApi;
