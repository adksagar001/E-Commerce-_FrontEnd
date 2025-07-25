import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Mainbody from "./components/MainBody";
import Footer from "./components/Footer";
import ThemeToggler from "./utils/ThemeToggler";
import ForgotPassword from "./pages/ForgotPassword"; // Import ForgotPassword page
import AdminDashboard from "./pages/Admin/AdminDashboard";

// Wrapper component to conditionally render Footer
const AppWithFooter = () => {
  const location = useLocation();

  // Hide footer on login and register pages
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password"
  ) {
    return null; // Don't render Footer
  }

  return <Footer />; // Render Footer for all other pages
};

function App() {
  return (
    <Router>
      <ThemeToggler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
      </Routes>
      <AppWithFooter /> {/* Conditionally render Footer */}
    </Router>
  );
}

export default App;
