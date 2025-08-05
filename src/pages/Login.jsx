import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ApiPostWithoutAuth } from "../services/api";

const LoginToSystem = async (email, password, setLoading) => {
  return new Promise((resolve, reject) => {
    ApiPostWithoutAuth(
      "auth/login",
      { email, password },
      (data) => resolve(data),
      setLoading
    );
  });
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await LoginToSystem(email, password, setIsLoading);

      if (!response?.token || !response?.Page) {
        throw new Error("Invalid response from server");
      }

      localStorage.setItem("orgToken", response.token);
      localStorage.setItem("orgName", response.user.name);
      window.location.href = `/${response.Page}`;
    } catch (err) {
      setError(err.message || "Invalid email or password");
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
            style={{ backgroundImage: "url(/assets/img/bg/30.png)" }}
          ></div>
        </div>
        <div className="col-lg-6">
          <div className="row flex-center h-100 g-0 px-4 px-sm-0">
            <div className="col col-sm-6 col-lg-7 col-xl-6">
              <Link
                to="/"
                className="d-flex flex-center text-decoration-none mb-4"
              >
                <div className="d-flex align-items-cent er fw-bolder fs-3 d-inline-block">
                  <img src="../logos/favicon.png" alt="logo" width="200" />
                </div>
              </Link>

              <div className="text-center mb-7">
                <h3 className="text-body-highlight"> 🛒BHARATPOKHARI STORES</h3>
                <p className="text-body-tertiary">Access our Products</p>
              </div>

              {error && (
                <div className="alert alert-danger py-2 px-3">{error}</div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <div className="form-icon-container">
                    <input
                      className="form-control form-icon-input"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="fas fa-user text-body fs-9 form-icon"></span>
                  </div>
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="form-icon-container">
                    <input
                      className="form-control form-icon-input pe-6"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      autoComplete=".."
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="fas fa-key text-body fs-9 form-icon"></span>
                  </div>
                </div>

                <div className="row flex-between-center mb-7">
                  <div className="col-auto">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        id="remember"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label mb-0"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <Link className="fs-9 fw-semibold" to="/forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <button
                  className="btn btn-primary w-100 mb-3"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>

                <div className="text-center">
                  <a className="fs-9 fw-bold" href="/register">
                    Create an account
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

export default Login;
