import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminProductsList from "./pages/Admin/AdminProductsList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import SideBar from "./pages/Admin/AdminSideBar";
import ProductsList from "./pages/ProductsList";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Mainbody from "./components/MainBody";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword"; // Import ForgotPassword page
import AdminDashboard from "./pages/Admin/AdminDashboard";

//----------------------Place footer only on Customer Side-----------------//
const AppWithFooter = () => {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/admindashboard" ||
    location.pathname === "/admin/products"
  ) {
    return null;
  } else if (
    location.pathname.startsWith("/apps/") ||
    location.pathname.startsWith("/admin/")
  ) {
    return null;
  }

  return <Footer />;
};
//----------------------Place NavBar on Top For Customers and SideBar For Admin-----------------//
const AppwithNavBarOnTop = () => {
  const location = useLocation();
  if (
    location.pathname === "/admindashboard" ||
    location.pathname === "/admin/products"
  ) {
    return <SideBar />;

  } else if (
    location.pathname.startsWith("/apps/") ||
    location.pathname.startsWith("/admin/")
  ) {
    return null;
  } else return <Navbar />;
};

function App() {
  return (
    <Router>
      <AppwithNavBarOnTop />
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProductsList />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <AppWithFooter />
    </Router>
  );
}

export default App;
