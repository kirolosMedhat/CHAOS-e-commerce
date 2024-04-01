import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import secure from "../../images/icons8-secure-50.png";
import delivery from "../../images/icons8-truck-50.png";
import support from "../../images/icons8-customer-support-50.png";
import "./home.css";
const HomeComponent = () => {
  return (
    <Fragment>
      <section className="sec1">
        <div className="title">
          <h1>Make Our Outfit</h1>
          <h1>Wonderful</h1>
        </div>
        <p>Discover the latest trends and styles to elevate your wardrobe.</p>
        <div className="secbtn">
          <NavLink to={"/Products"}>
            <button>Start Shopping</button>
          </NavLink>
          <NavLink to={"/About"}>
            <button>Learn More</button>
          </NavLink>
        </div>
      </section>
      <section className="sec2">
        <h1>What Our Customers Say</h1>
        <div className="feedback">
          <div className="card">
            {/* <img src={x} alt="" /> */}
            <p>
              "Absolutely love shopping on this website! The variety of clothing
              options is amazing, and the quality is top-notch. The
              user-friendly interface makes browsing a breeze, and checkout is
              quick and hassle-free. Plus, their customer service is fantastic -
              they're always ready to assist with any questions or concerns.
              Highly recommend!"
            </p>
            <h5>Sarah M.</h5>
          </div>
          <div className="card">
            {/* <img src={x} alt="" /> */}
            <p>
              "I can't get enough of this site! From trendy accessories to
              stylish outfits, they have everything I need to stay
              fashion-forward. The layout is clean and organized, making it easy
              to find exactly what I'm looking for. Shipping is fast, and
              returns are hassle-free. A must-visit for any fashionista!"
            </p>
            <h5>Alex R.</h5>
          </div>
          <div className="card">
            {/* <img src={x} alt="" /> */}
            <p>
              "I'm blown away by the experience I've had shopping here. The
              website's sleek design and intuitive navigation make shopping a
              pleasure. Plus, their sizing guide is incredibly helpful and
              ensures a perfect fit every time. The prices are reasonable,
              especially considering the quality of the products. Overall, a
              5-star experience!"
            </p>
            <h5>Emily T.</h5>
          </div>
        </div>
      </section>
      <section className="sec3">
        <h1>Features</h1>
        <div className="all">
          <div className="features">
            <img src={secure} alt="" />
            <div className="featuretext">
              <h4>SECURE PAYMENT</h4>
              <p>All our payments our SSL secured</p>
            </div>
          </div>
          <div className="features">
            <img src={delivery} alt="" />
            <div className="featuretext">
              <h4>DELIVERED WITH CARE</h4>
              <p>Super fast shipping to your door</p>
            </div>
          </div>
          <div className="features">
            <img src={support} alt="" />
            <div className="featuretext">
              <h4>EXCELLENT SERVICE</h4>
              <p>Live chat and phone support</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeComponent;
