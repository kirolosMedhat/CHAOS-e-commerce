import React, { Fragment, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  // --------------------------------------------------------------
  const [error, setError] = useState("");
  // --------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[2].value !== e.target[3].value) {
      setError("⚠ Password Not Match");
    }
    axios
      .post("http://127.0.0.1:8000/api/register", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <div className="Log">
        <h1>Register</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="UserName"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input type="password" placeholder="Password Confirmation" />
          <p>{error}</p>
          {/* <NavLink to={"/LogIn"}> */}
          <input type="submit" value="Submit" />
          {/* </NavLink> */}
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
