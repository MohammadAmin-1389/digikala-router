import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Adres from "./pages/Adres";
import Coments from "./pages/Coments";
import { Route, Routes } from "react-router-dom";
import Mylists from "./pages/Mylists";
import Acount from "./pages/Acount";
import Erore from "./pages/Erore";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./Components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
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

export default App;
