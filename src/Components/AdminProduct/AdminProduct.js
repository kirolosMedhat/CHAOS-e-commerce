import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./adminProduct.css"
const AdminProduct = () => {
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
//  ----------------------------------
const handleDelete = (id) => {
  // Send DELETE request to backend API to delete the product
  axios.delete(`http://127.0.0.1:8000/api/delproducts/${id}`)
    .then(response => {
      console.log("Product deleted successfully:", response.data.message);
      // Update the product list after deletion
      setProducts(products.filter(product => product.id !== id));
    })
    .catch(error => {
      console.error("Error deleting product:", error);
      // Handle error: show error message, log error, etc.
    });
};
// ------------------------------------------------
  return (
    <Fragment>
     <div className="Container">
     <Link to={"/AddProducts"}>
              <button className="add">Add Products</button>
              </Link>
        {products?.map((el) => (
          <div className="product">
            <h2>{el.pname}</h2>
            <img src={el.image} alt="" />
            <p>{el.pdisc}</p>
            <h4>{el.price} LE</h4>
            <div className="buttons">
              <Link to={`/updateProducts/${el.id}`}>
              <button className="update">update</button>
              </Link>
              <button onClick={()=>handleDelete(el.id)}className="delete">delete</button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AdminProduct;
