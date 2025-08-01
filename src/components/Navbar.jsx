import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import feather from "feather-icons";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    feather.replace(); 
  });
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "SignUp", path: "/register" },
  ];

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password"
  ) {
    return null;
  }
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term); 
    }
  };

  return (
    <>
      <main className="main" id="top">
        <section className="py-0">
          <div className="container-small">
            <div className="ecommerce-topbar">
              <nav className="navbar navbar-expand-lg navbar-light px-0">
                <div className="row gx-0 gy-2 w-100 flex-between-center">
                  <div className="col-auto">
                    <a
                      className="text-decoration-none"
                      href="/"
                    >
                      <div className="d-flex align-items-center">
                        <img src="/logos/favicon.png" alt="logo" width="27" />
                        <h5 className="logo-text ms-2">BharatPokhari Stores</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-auto order-md-1">
                    <ul className="navbar-nav navbar-nav-icons flex-row me-n2">
                      <li className="nav-item d-flex align-items-center">
                        <div className="theme-control-toggle fa-icon-wait px-2">
                          <input
                            className="form-check-input ms-0 theme-control-toggle-input"
                            type="checkbox"
                            data-theme-control="phoenixTheme"
                            value="dark"
                            id="themeControlToggle"
                          />
                          <label
                            className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                            htmlFor="themeControlToggle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            data-bs-title="Switch theme"
                            style={{ height: "32px", width: "32px" }}
                          >
                            <span className="icon" data-feather="moon"></span>
                          </label>
                          <label
                            className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                            htmlFor="themeControlToggle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            data-bs-title="Switch theme"
                            style={{ height: "32px", width: "32px" }}
                          >
                            <span className="icon" data-feather="sun"></span>
                          </label>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-2 icon-indicator icon-indicator-primary"
                          href="../../../apps/e-commerce/landing/cart.html"
                          role="button"
                        >
                          <span
                            className="text-body-tertiary"
                            data-feather="shopping-cart"
                            style={{ height: "20px", width: "20px" }}
                          ></span>
                          <span className="icon-indicator-number">3</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link px-2 icon-indicator icon-indicator-sm icon-indicator-danger"
                          id="navbarTopDropdownNotification"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span
                            className="text-body-tertiary"
                            data-feather="bell"
                            style={{ height: "20px", width: "20px" }}
                          ></span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret mt-2"
                          id="navbarDropdownNotfication"
                          aria-labelledby="navbarDropdownNotfication"
                        >
                          <div className="card position-relative border-0">
                            <div className="card-header p-2">
                              <div className="d-flex justify-content-between">
                                <h5 className="text-body-emphasis mb-0">
                                  Notifications
                                </h5>
                                <button
                                  className="btn btn-link p-0 fs-9 fw-normal"
                                  type="button"
                                >
                                  Mark all as read
                                </button>
                              </div>
                            </div>
                            <div className="card-body p-0">
                              <div
                                className="scrollbar-overlay"
                                style={{ height: "27rem" }}
                              >
                                <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                  <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                      <div className="avatar avatar-m status-online me-3">
                                        <img
                                          className="rounded-circle"
                                          src="../../../assets/img/team/40x40/30.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="flex-1 me-sm-3">
                                        <h4 className="fs-9 text-body-emphasis">
                                          Jessie Samson
                                        </h4>
                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                          <span className="me-1 fs-10">💬</span>
                                          Mentioned you in a comment.
                                          <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                            10m
                                          </span>
                                        </p>
                                        <p className="text-body-secondary fs-9 mb-0">
                                          <span className="me-1 fas fa-clock"></span>
                                          <span className="fw-bold">
                                            10:41 AM{" "}
                                          </span>
                                          August 7,2021
                                        </p>
                                      </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                      <button
                                        className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-boundary="window"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-bs-reference="parent"
                                      >
                                        <span className="fas fa-ellipsis-h fs-10 text-body"></span>
                                      </button>
                                      <div className="dropdown-menu py-2">
                                        <a className="dropdown-item" href="#!">
                                          Mark as unread
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer p-0 border-top border-translucent border-0">
                              <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                                <a
                                  className="fw-bolder"
                                  href="../../../pages/notifications.html"
                                >
                                  Notification history
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link px-2"
                          id="navbarDropdownUser"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span
                            className="text-body-tertiary"
                            data-feather="user"
                            style={{ height: "20px", width: "20px" }}
                          ></span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border mt-2"
                          aria-labelledby="navbarDropdownUser"
                        >
                          <div className="card position-relative border-0">
                            <div className="card-body p-0">
                              <div className="text-center pt-4 pb-3">
                                <div className="avatar avatar-xl ">
                                  <img
                                    className="rounded-circle "
                                    src="../../../assets/img/team/72x72/57.webp"
                                    alt=""
                                  />
                                </div>
                                <h6 className="mt-2 text-body-emphasis">
                                  Jerry Seinfield
                                </h6>
                              </div>
                              <div className="mb-3 mx-3">
                                <input
                                  className="form-control form-control-sm"
                                  id="statusUpdateInput"
                                  type="text"
                                  placeholder="Update your status"
                                />
                              </div>
                            </div>
                            <div
                              className="overflow-auto scrollbar"
                              style={{ height: "10rem" }}
                            >
                              <ul className="nav d-flex flex-column mb-2 pb-1">
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
                                    <span
                                      className="me-2 text-body align-bottom"
                                      data-feather="user"
                                    ></span>
                                    <span>Profile</span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    <span
                                      className="me-2 text-body align-bottom"
                                      data-feather="pie-chart"
                                    ></span>
                                    Dashboard
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
                                    <span
                                      className="me-2 text-body align-bottom"
                                      data-feather="lock"
                                    ></span>
                                    Posts &amp; Activity
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
                                    <span
                                      className="me-2 text-body align-bottom"
                                      data-feather="settings"
                                    ></span>
                                    Settings &amp; Privacy{" "}
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
                                    <span
                                      className="me-2 text-body align-bottom"
                                      data-feather="help-circle"
                                    ></span>
                                    Help Center
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
                                    <span
                                      className="me-2 text-body align-bottom"
                                      data-feather="globe"
                                    ></span>
                                    Language
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="card-footer p-0 border-top border-translucent">
                              <ul className="nav d-flex flex-column my-3">
                                <li className="nav-item">
                                  <a
                                    className="nav-link px-3 d-block"
                                    href="#!"
                                  >
                                    {" "}
                                    <span
                                      className="me-2 text-body align-bottom"
                                      data-feather="user-plus"
                                    ></span>
                                    Add another account
                                  </a>
                                </li>
                              </ul>
                              <hr />
                              <div className="px-3">
                                {" "}
                                <a
                                  className="btn btn-phoenix-secondary d-flex flex-center w-100"
                                  href="#!"
                                >
                                  {" "}
                                  <span className="me-2" data-feather="log-out">
                                    {" "}
                                  </span>
                                  Sign out
                                </a>
                              </div>
                              <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                                <a
                                  className="text-body-quaternary me-1"
                                  href="#!"
                                >
                                  Privacy policy
                                </a>
                                &bull;
                                <a
                                  className="text-body-quaternary mx-1"
                                  href="#!"
                                >
                                  Terms
                                </a>
                                &bull;
                                <a
                                  className="text-body-quaternary ms-1"
                                  href="#!"
                                >
                                  Cookies
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="search-box ecommerce-search-box w-100">
                      <form className="position-relative">
                        <input
                          className="form-control search-input search form-control-sm"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <span className="fas fa-search search-box-icon"></span>
                      </form>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>

        <nav className="navbar-responsive-navitems navbar-expand navbar-white bg-body-emphasis justify-content-between">
          <div
            className="container-small d-flex flex-between-center"
            data-navbar="data-navbar"
          >
            <div className="dropdown">
              <button
                className="btn text-body ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none"
                data-category-btn="data-category-btn"
                data-bs-toggle="dropdown"
              >
               <span data-feather="menu" className="me-2"></span>Category

              </button>
              <div className="dropdown-menu border border-translucent py-0 category-dropdown-menu">
                <div
                  className="card border-0 scrollbar"
                  style={{ maxHeight: "657px" }}
                >
                  <div className="card-body p-6 pb-3">
                    <div className="row gx-7 gy-5 mb-5">
                      {/* Category Block - Repeatable */}
                      {[
                        {
                          icon: "pocket",
                          title: "Collectibles & Art",
                          items: [
                            "Collectibles",
                            "Antiques",
                            "Sports memorabilia",
                            "Art",
                          ],
                        },
                        {
                          icon: "home",
                          title: "Home & Garden",
                          items: [
                            "Yard, Garden & Outdoor",
                            "Crafts",
                            "Home Improvement",
                            "Pet Supplies",
                          ],
                        },
                        {
                          icon: "globe",
                          title: "Sporting Goods",
                          items: [
                            "Outdoor Sports",
                            "Team Sports",
                            "Exercise & Fitness",
                            "Golf",
                          ],
                        },
                        {
                          icon: "monitor",
                          title: "Electronics",
                          items: [
                            "Computers & Tablets",
                            "Camera & Photo",
                            "TV, Audio & Surveillance",
                            "Cell Phone & Accessories",
                          ],
                        },
                        {
                          icon: "truck",
                          title: "Auto Parts & Accessories",
                          items: [
                            "GPS & Security Devices",
                            "Radar & Laser Detectors",
                            "Care & Detailing",
                            "Scooter Parts & Accessories",
                          ],
                        },
                        {
                          icon: "codesandbox",
                          title: "Toys & Hobbies",
                          items: [
                            "Radio Control",
                            "Kids Toys",
                            "Action Figures",
                            "Dolls & Bears",
                          ],
                        },
                        {
                          icon: "watch",
                          title: "Fashion",
                          items: ["Women", "Men", "Jewelry & Watches", "Shoes"],
                        },
                        {
                          icon: "music",
                          title: "Musical Instruments & Gear",
                          items: [
                            "Guitar",
                            "Pro Audio Equipment",
                            "String",
                            "Stage Lighting & Effects",
                          ],
                        },
                        {
                          icon: "grid",
                          title: "Other Categories",
                          items: [
                            "Video Games & Consoles",
                            "Health & Beauty",
                            "Baby",
                            "Business & Industrial",
                          ],
                        },
                      ].map((category, index) => (
                        <div className="col-12 col-sm-6 col-md-4" key={index}>
                          <div className="d-flex align-items-center mb-3">
                            <span
                              className="text-primary me-2"
                              data-feather={category.icon}
                              style={{ strokeWidth: 3 }}
                            ></span>
                            <h6 className="text-body-highlight mb-0 text-nowrap">
                              {category.title}
                            </h6>
                          </div>
                          <div className="ms-n2">
                            {category.items.map((item, i) => (
                              <a
                                key={i}
                                className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                                href="#!"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center border-top border-translucent pt-3">
                      <a className="fw-bold" href="#!">
                        See all Categories{" "}
                        <span
                          className="fas fa-angle-right ms-1"
                          data-fa-transform="down-1"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="navbar-nav justify-content-end align-items-center">
              {navItems.map(
                (item, index) =>
                  location.pathname !== "/login" &&
                  location.pathname !== "/register" && (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
