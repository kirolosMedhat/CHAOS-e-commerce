import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
const AddProducts = () => {
  const [product, SetProduct] = useState({
    pname: "",
    price: 0,
    pcategory: "",
    pdisc: "",
    img: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/AddProduct", product, {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <div className="Log">
        <h1>Add Product</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Product Name"
            value={product.pname}
            onChange={(e) => SetProduct({ ...product, pname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Product Price"
            value={product.price}
            onChange={(e) => SetProduct({ ...product, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="category"
            value={product.pcategory}
            onChange={(e) =>
              SetProduct({ ...product, pcategory: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="discribtion"
            value={product.pdisc}
            onChange={(e) => SetProduct({ ...product, pdisc: e.target.value })}
          />
          <input
            type="file"
            value={product.img}
            onChange={(e) => SetProduct({ ...product, img: e.target.value })}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default AddProducts;
