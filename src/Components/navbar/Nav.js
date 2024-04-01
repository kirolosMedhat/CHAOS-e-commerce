import React from "react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const email = localStorage.getItem("Email");
// --------------------------LOGOUT------------------------
const logout = () => {
  localStorage.removeItem("Email");
  localStorage.removeItem("Token");
};

const Nav = ({ handleChange, isChecked }) => {
  // -----------------------------------------
 const cartlength= useSelector(state=>state.cart.cart);

// --------------------------------
  return (
    <Fragment>
      <nav>
        <div className="container">
          <div className="logo">
            <h1>Chaos Shop</h1>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to={"/Home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/Products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/About"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/ContactUs"}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="log">
            <ul>
              <li>
                <NavLink to={"/LogIn"}>
                  <button class="Btn">
                    <div class="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>
                    <div class="text">Log In</div>
                  </button>
                </NavLink>
              </li>
              <span onClick={logout} className="welcomeuser">
                {email}
              </span>
            </ul>
            <label class="ui-switch">
              <input
                type="checkbox"
                id="check"
                className="toogle"
                onChange={handleChange}
                checked={isChecked}
              />
              <div class="slider">
                <div class="circle"></div>
              </div>
            </label>
            <Link to={"/cart"}>
            <span className="carticon">
              <FaShoppingCart />
              <i>{cartlength.length}</i>
            </span>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
