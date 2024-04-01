import { Fragment, useState } from "react";
import "./App.css";
import Nav from "./Components/navbar/Nav";
import Footer from "./Components/footer/Footer";
import HomeComponent from "./Components/Home/HomeComponent";
import { Route, Routes } from "react-router-dom";
import ContactComponents from "./Components/contact/ContactComponents";
import AbouUs from "./Components/About/AbouUs";
import ProductApi from "./Components/ProductsApi/ProductApi";
import Log from "./Components/Log/Log";
import Register from "./Components/register/Register";
import AddProducts from "./Components/Addproducts/AddProducts";
import AdminProduct from "./Components/AdminProduct/AdminProduct";
import Update from "./Components/UpdateComponent/Update";
import UserProducts from "./Components/UserProducts/UserProducts";
import useLocalStorage from "use-local-storage";
import NotLoged from "./Components/NotLoggedProducts/NotLoged";
import Cart from "./Components/reduxCart/Cart";
function App() {
  // ----------------------------AUTH PRODUCTS------------------------
  let authRoutes = null;

  console.log(authRoutes);
  const email = localStorage.getItem("Email");
  const token = localStorage.getItem("Token");
  console.log({ "ur email is": email });
  if (email) {
    if (email === "admin@admin.com") {
      authRoutes = (
        <>
          <Route path="/Products" element={<AdminProduct />} />
        </>
      );
    } else if (email !== "admin@admin.com") {
      authRoutes = (
        <>
          <Route path="/Products" element={<UserProducts />} />
          <Route path="/cart" element={<Cart />} />
        </>
      );
    }
  } else {
    authRoutes = (
      <>
        <Route path="/cart" element={<NotLoged />} />

        <Route path="/Products" element={<NotLoged />} />
      </>
    );
  }
  // -------------------------MODE SWICH----------------------
  const [islight, setLight] = useLocalStorage(useState(true));
  // -------------------------------------------
  return (
    <div className="App" data-theme={islight ? "light" : "dark"}>
      <Nav isChecked={islight} handleChange={() => setLight(!islight)} />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Home" element={<HomeComponent />} />
        <Route path="/about" element={<AbouUs />} />
        <Route path="/ContactUs" element={<ContactComponents />} />
        {/* <Route path="/products" element={<ProductApi />} /> */}
        <Route path="/LogIn" element={<Log />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AddProducts" element={<AddProducts />} />
        {authRoutes}
        {/* <Route path="/Products" element={<UserProducts />} /> */}
        {/* <Route path="/userProducts" element={<AdminProduct />} /> */}
        <Route path="/updateProducts/:id" element={<Update />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
