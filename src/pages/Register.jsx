import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  // State to hold form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // API call to register the user
      const response = await axios.post(
        "https://e-commerce-backend-uwc4.onrender.com/auth/register",
        {
          name,
          email,
          password,
        }
      );
      alert("Registration successful! Please log in.");
      // Redirect or clear form here if needed
    } catch (err) {
      setError("Error: Unable to register. Please try again.");
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
                <p className="text-body-tertiary">Create an account to be our Client</p>
              </div>
              {/* <button className="btn btn-phoenix-secondary w-100 mb-3">
                <span className="fab fa-google text-danger me-2 fs-9"></span>
                Sign up with Google
              </button>
              <button className="btn btn-phoenix-secondary w-100">
                <span className="fab fa-facebook text-primary me-2 fs-9"></span>
                Sign up with Facebook
              </button>
              <div className="position-relative mt-4">
                <hr className="bg-body-secondary" />
                <div className="divider-content-center">or use email</div>
              </div> */}
              <hr className="bg-body-secondary" />
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
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
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <div
                      className="position-relative"
                      data-password="data-password"
                    >
                      <input
                        className="form-control form-icon-input pe-6"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <div
                      className="position-relative"
                      data-password="data-password"
                    >
                      <input
                        className="form-control form-icon-input pe-6"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    id="termsService"
                    type="checkbox"
                    required
                  />
                  <label
                    className="form-label fs-9 text-transform-none"
                    htmlFor="termsService"
                  >
                    I accept the <a href="#!">terms</a> and{" "}
                    <a href="#!">privacy policy</a>
                  </label>
                </div>
                <button
                  className="btn btn-primary w-100 mb-3"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing up..." : "Sign up"}
                </button>
                {error && <p className="text-danger text-center">{error}</p>}
                <div className="text-center">
                  <a
                    className="fs-9 fw-bold"
                    href="/login"
                  >
                    Already a Customer 
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
