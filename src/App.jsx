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
import CustomerDetails from "./pages/Admin/CustomerDetails";
import ProductsList from "./pages/ProductsList";
import AdminCustomersList from "./pages/Admin/CustomersList"
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Mainbody from "./components/MainBody";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword"; // Import ForgotPassword page
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProductDetail from "./components/Customer/ProductDetail";


//----------------------Place footer only on Customer Side-----------------//
const AppWithFooter = () => {
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/admindashboard" ||
    location.pathname === "/admin/products" ||
    location.pathname.startsWith("/admin/CustomerDetails/") 

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
    location.pathname === "/admin/products" ||
    location.pathname.startsWith("/admin/CustomerDetails/") ||
    location.pathname === "/admin/customers"
  ) { 
    return <SideBar />;
  } else if (
    location.pathname.startsWith("/apps/") 
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
        <Route path="/admin/customers" element={<AdminCustomersList/>} />
        <Route path="/admin/CustomerDetails/:id" element={<CustomerDetails />} />
        <Route path="/productDetails/:prodId" element={<ProductDetail/> } />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <AppWithFooter />
    </Router>
  );
}

export default App;
