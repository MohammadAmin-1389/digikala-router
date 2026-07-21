import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="flex pt-4">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
