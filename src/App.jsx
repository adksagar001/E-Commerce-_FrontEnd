import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Mainbody from "./components/MainBody";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Mainbody />
      <Routes>
        {/* <Route path="/" element={<ProductsList />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
