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
import Approuter from "./router/Approuter";

function App() {
  return (
    <div>
     <Approuter/>
    </div>
  );
}

export default App;
