import React, { Fragment, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./log.css";
import useLocalStorage from "use-local-storage";
const Log = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // --------------------------------------------------------------------

  // --------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", user, { withCredentials: true })
      .then((res) => {
        if (res.data.login == true) {
          const token = res.data.Token;
          //put the token in the local storage
          localStorage.setItem("Token", token);
          localStorage.setItem("Email",user.email);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <div className="Log">
        <h1>Log In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="username"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input type="submit" value="Log In" className="login" />
        </form>
        <NavLink to={"/register"}>Register Here!</NavLink>
      </div>
    </Fragment>
  );
};

export default Log;
