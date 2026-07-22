import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import Mylists from "../pages/Mylists";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Coments from "../pages/Coments";
import Adres from "../pages/Adres";
import Acount from "../pages/Acount";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Erore from "../pages/Erore";

function Approuter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mylists />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="/Coments" element={<Coments />} />
          <Route path="/Adres" element={<Adres />} />
          <Route path="/Acount" element={<Acount />} />
        </Route>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Erore />} />
      </Routes>
    </div>
  );
}

export default Approuter;
