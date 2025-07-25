import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { name: "Login", path: "/login" },
    { name: "SignUp", path: "/register" },
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term); // Call parent function to filter products
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
                      href="../../../index.html"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="../logos/favicon.png"
                          alt="logo"
                          width="27"
                        />
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

        <nav className="navbar-responsive-navitems navbar-expand navbar-light bg-body-emphasis justify-content-between">
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
                <span className="fas fa-bars me-2"></span>Category
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
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="support-chat-container">
          <div className="container-fluid support-chat">
            <div className="card bg-body-emphasis">
              <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
                <h5 className="mb-0 d-flex align-items-center gap-2">
                  Demo widget
                  <span className="fa-solid fa-circle text-success fs-11"></span>
                </h5>
                <div className="btn-reveal-trigger">
                  <button
                    className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                    type="button"
                    id="support-chat-dropdown"
                    data-bs-toggle="dropdown"
                    data-boundary="window"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-bs-reference="parent"
                  >
                    <span className="fas fa-ellipsis-h text-body"></span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end py-2"
                    aria-labelledby="support-chat-dropdown"
                  >
                    <a className="dropdown-item" href="#!">
                      Request a callback
                    </a>
                    <a className="dropdown-item" href="#!">
                      Search in chat
                    </a>
                    <a className="dropdown-item" href="#!">
                      Show history
                    </a>
                    <a className="dropdown-item" href="#!">
                      Report to Admin
                    </a>
                    <a className="dropdown-item btn-support-chat" href="#!">
                      Close Support
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body chat p-0">
                <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                  <div className="text-end mt-6">
                    <a
                      className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">
                        I need help with something
                      </p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                    <a
                      className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">
                        I can’t reorder a product I previously ordered
                      </p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                    <a
                      className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">
                        How do I place an order?
                      </p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                    <a
                      className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                      href="#!"
                    >
                      <p className="mb-0 fw-semibold fs-9">
                        My payment method not working
                      </p>
                      <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3"></span>
                    </a>
                  </div>
                  <div className="text-center mt-auto">
                    <div className="avatar avatar-3xl status-online">
                      <img
                        className="rounded-circle border border-3 border-light-subtle"
                        src="../../../assets/img/team/30.webp"
                        alt=""
                      />
                    </div>
                    <h5 className="mt-2 mb-3">Eric</h5>
                    <p className="text-center text-body-emphasis mb-0">
                      Ask us anything – we’ll get back to you here or by email
                      within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
                <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
                  <input
                    className="form-control outline-none border-0 flex-1 fs-9 px-0"
                    type="text"
                    placeholder="Write message"
                  />
                  <label
                    className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                    htmlFor="supportChatPhotos"
                  >
                    <span className="fa-solid fa-image"></span>
                  </label>
                  <input
                    className="d-none"
                    type="file"
                    accept="image/*"
                    id="supportChatPhotos"
                  />
                  <label
                    className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                    htmlFor="supportChatAttachment"
                  >
                    {" "}
                    <span className="fa-solid fa-paperclip"></span>
                  </label>
                  <input
                    className="d-none"
                    type="file"
                    id="supportChatAttachment"
                  />
                </div>
                <button className="btn p-0 border-0 send-btn">
                  <span className="fa-solid fa-paper-plane fs-9"></span>
                </button>
              </div>
            </div>
          </div>
          <button className="btn btn-support-chat p-0 border border-translucent">
            <span className="fs-8 btn-text text-primary text-nowrap">
              Chat demo
            </span>
            <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
              <span className="ping-icon-bg"></span>
              <span className="fa-solid fa-circle ping-icon"></span>
            </span>
            <span className="fa-solid fa-headset text-primary fs-8 d-sm-none"></span>
            <span className="fa-solid fa-chevron-down text-primary fs-7"></span>
          </button>
        </div>
      </main>
      
    </>
  );
};

export default Navbar;
