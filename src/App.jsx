import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Adres from "./pages/Adres";
import Coments from "./pages/Coments";
import { Route, Routes } from "react-router-dom";
import Mylists from "./pages/Mylists";
import Acount from "./pages/Acount";
import Erore from "./pages/Erore";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Mylists />} />
          <Route path="/Coments" element={<Coments />} />
          <Route path="/Adres" element={<Adres />} />
          <Route path="/Acount" element={<Acount />} />
          <Route path="*" element={<Erore />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
