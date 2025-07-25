import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom"; // For redirection after successful reset

import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null); // Success or error messages
  const [error, setError] = useState(null);
  //   const history = useHistory();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setIsLoading(true);
    setMessage(null);
    setError(null);

    try {
      // API call to send reset password request
      const response = await axios.post(
        "https://e-commerce-backend-uwc4.onrender.com/auth/forgot-password",
        { email }
      );

      setMessage("Password reset link has been sent to your email.");
      setTimeout(() => {
        // history.push("/login"); // Redirect to login page after success
      }, 3000);
    } catch (err) {
      setError("Error: Unable to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main" id="top">
      <div className="row vh-100 g-0">
        <div className="col-lg-6 position-relative d-none d-lg-block">
          <div
            className="bg-holder"
            style={{ backgroundImage: "url(../../../assets/img/bg/32.png)" }}
          ></div>
        </div>
        <div className="col-lg-6">
          <div className="row flex-center h-100 g-0 px-4 px-sm-0">
            <div className="col col-sm-6 col-lg-7 col-xl-6">
              <Link
                to="/"
                className="d-flex flex-center text-decoration-none mb-4"
              >
                <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                  <img src="../logos/favicon.png" alt="logo" width="200" />
                </div>
              </Link>
              <div className="text-center mb-7">
                <h3 className="text-body-highlight">🛒BHARATPOKHARI STORES</h3>
                <p className="text-body-tertiary">
                  Enter your email to reset your password
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  className="btn btn-primary w-100 mb-3"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>
                {message && (
                  <p className="text-success text-center">{message}</p>
                )}
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="text-center">
                  <Link className="fs-9 fw-semibold" to="/login">
                    Back to login
                  </Link>
                  {/* <a className="fs-9 fw-bold" href="/login">
                    Back to login
                  </a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
