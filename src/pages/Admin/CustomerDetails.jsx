import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { apiGet } from "../../services/api";
export default function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [custLoading, setIsCustLoading] = useState(false);

  async function FetchCustomerDetails() {
    await apiGet(`customers/${id}`, setCustomer);
  }

  useEffect(() => {
    FetchCustomerDetails();
  }, [id]);

  if (custLoading) {
    return <p className="p-3">Loading customer details...</p>;
  }

  if (!customer) {
    return <p className="p-3 text-danger">No customer data found.</p>;
  }

  return (
    <>
      <div className="content">
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#!">Customer</a>
            </li>

            <li className="breadcrumb-item active">Customer Details</li>
          </ol>
        </nav>
        <div className="mb-9">
          <div className="row align-items-center justify-content-between g-3 mb-4">
            <div className="col-auto">
              <h2 className="mb-0">Customer details</h2>
            </div>
            <div className="col-auto">
              <div className="row g-3">
                <div className="col-auto">
                  <button className="btn btn-phoenix-danger">
                    <span className="fa-solid fa-trash-can me-2"></span>Delete
                    customer
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-phoenix-secondary">
                    <span className="fas fa-key me-2"></span>Reset password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-12 col-xxl-4">
              <div className="row g-3 h-100">
                <div className="col-12 col-md-7 col-xxl-12">
                  <div className="card h-100 h-xxl-auto">
                    <div className="card-body d-flex flex-column justify-content-between pb-3">
                      <div className="row align-items-center g-5 mb-3 text-center text-sm-start">
                        <div className="col-12 col-sm-auto mb-sm-2">
                          <div className="avatar avatar-5xl">
                            <img
                              className="rounded-circle"
                              src="../../../assets/img/team/15.webp"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-auto flex-1">
                          <h3>{customer.Name}</h3>
                          <p className="text-body-secondary">
                            Joined 3 months ago
                          </p>
                          <div>
                            <a className="me-2" href="#!">
                              <span className="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover"></span>
                            </a>
                            <a className="me-2" href="#!">
                              <span className="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover"></span>
                            </a>
                            <a href="#!">
                              <span className="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-between-center border-top border-dashed pt-4">
                        <div>
                          <h6>Following</h6>
                          <p className="fs-7 text-body-secondary mb-0">297</p>
                        </div>
                        <div>
                          <h6>Projects</h6>
                          <p className="fs-7 text-body-secondary mb-0">56</p>
                        </div>
                        <div>
                          <h6>Completion</h6>
                          <p className="fs-7 text-body-secondary mb-0">97</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-5 col-xxl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <h3 className="me-1">Default Address</h3>
                        <button className="btn btn-link p-0">
                          <span className="fas fa-pen fs-8 ms-3 text-body-quaternary"></span>
                        </button>
                      </div>
                      <h5 className="text-body-secondary">Address</h5>
                      <p className="text-body-secondary">
                        Shatinon Mekalan
                        <br />
                        Vancouver, British Columbia
                        <br />
                        Canada
                      </p>
                      <div className="mb-3">
                        <h5 className="text-body-secondary">Email</h5>
                        <a href="mailto:shatinon@jeemail.com">
                          {customer.email}
                        </a>
                      </div>
                      <h5 className="text-body-secondary">Phone</h5>
                      <a className="text-body-secondary" href="tel:+1234567890">
                        +1234567890
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="mb-4">Notes on Customer</h3>
                      <textarea
                        className="form-control mb-3"
                        rows="4"
                      ></textarea>
                      <button className="btn btn-phoenix-primary w-100 mb-4">
                        Add Note
                      </button>
                      <div className="fs-9 fw-semibold pb-4 mb-4 border-bottom border-dashed">
                        <p className="text-body-highlight mb-1">
                          Gave us a nice feedback
                        </p>
                        <div className="text-end">
                          <p className="text-body-tertiary text-opacity-85 mb-0">
                            12 Nov, 2020
                          </p>
                        </div>
                      </div>
                      <div className="fs-9 fw-semibold pb-4 mb-4 border-bottom border-dashed">
                        <p className="text-body-highlight mb-1">
                          Customer added product to cart and then forgot to
                          checkout. Later knocked the customer support to ask
                          about update on shipping. Later, settled on “One day
                          Shipping” though “Free delivery” was preferred.
                          Overall good behavior.
                        </p>
                        <div className="text-end">
                          <p className="text-body-tertiary text-opacity-85 mb-0">
                            23 Dec, 2019
                          </p>
                        </div>
                      </div>
                      <div className="fs-9 fw-semibold pb-4 mb-4 border-bottom border-dashed">
                        <p className="text-body-highlight mb-1">
                          User of this support ticket won a 100% off coupon and
                          received top-notch service from the technical support
                          engineer. Along with providing a good review, user
                          highly appreciated the team.
                        </p>
                        <div className="text-end">
                          <p className="text-body-tertiary text-opacity-85 mb-0">
                            2 Oct, 2019
                          </p>
                        </div>
                      </div>
                      <div className="fs-9 fw-semibold">
                        <p className="text-body-highlight mb-1">
                          Customer returned and bought 2 related items, which is
                          currently being shipped. Customer chose “One day
                          Shipping”. Additional notes were added regarding
                          customised wrapping. Customer submitted positive
                          review.
                        </p>
                        <div className="text-end">
                          <p className="text-body-tertiary text-opacity-85 mb-0">
                            26 Apr, 2019
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-8">
              <div className="mb-6">
                <h3 className="mb-4">
                  Orders{" "}
                  <span className="text-body-tertiary fw-normal">(97)</span>
                </h3>
                <div
                  className="border-top border-bottom border-translucent"
                  id="customerOrdersTable"
                  data-list='{"valueNames":["order","total","payment_status","fulfilment_status","delivery_type","date"],"page":6,"pagination":true}'
                >
                  <div className="table-responsive scrollbar">
                    <table className="table table-sm fs-9 mb-0">
                      <thead>
                        <tr>
                          <th
                            className="sort white-space-nowrap align-middle ps-0 pe-3"
                            scope="col"
                            data-sort="order"
                            style={{ width: "10%" }}
                          >
                            ORDER
                          </th>
                          <th
                            className="sort align-middle text-end pe-7"
                            scope="col"
                            data-sort="total"
                            style={{ width: "10%" }}
                          >
                            TOTAL
                          </th>
                          <th
                            className="sort align-middle white-space-nowrap pe-3"
                            scope="col"
                            data-sort="payment_status"
                            style={{ width: "15%" }}
                          >
                            PAYMENT STATUS
                          </th>
                          <th
                            className="sort align-middle white-space-nowrap text-start pe-3"
                            scope="col"
                            data-sort="fulfilment_status"
                            style={{ width: "20%" }}
                          >
                            FULFILMENT STATUS
                          </th>
                          <th
                            className="sort align-middle white-space-nowrap text-start"
                            scope="col"
                            data-sort="delivery_type"
                            style={{ width: "30%" }}
                          >
                            DELIVERY TYPE
                          </th>
                          <th
                            className="sort align-middle text-end pe-0"
                            scope="col"
                            data-sort="date"
                          >
                            DATE
                          </th>
                          <th
                            className="sort text-end align-middle pe-0 ps-5"
                            scope="col"
                          ></th>
                        </tr>
                      </thead>
                      <tbody className="list" id="customer-order-table-body">
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2453
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $87
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Paid</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">
                                Order Fulfilled
                              </span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Cash on delivery
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Dec 12, 12:56 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2452
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $7264
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              <span className="badge-label">Cancelled</span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                              <span className="badge-label">
                                Ready to pickup
                              </span>
                              <span
                                className="ms-1"
                                data-feather="info"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Free shipping
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Dec 9, 2:28PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2451
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $375
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">
                                Partial FulfiLled
                              </span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Local pickup
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Dec 4, 12:56 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2450
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $657
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              <span className="badge-label">Cancelled</span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              <span className="badge-label">
                                Order CancelLed
                              </span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Standard shipping
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Dec 1, 4:07 AM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2449
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $9562
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                              <span className="badge-label">Failed</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">
                                Order Fulfilled
                              </span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Express
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 28, 7:28 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2448
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $46
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Paid</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                              <span className="badge-label">
                                Delivery Delayed
                              </span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Local delivery
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 24, 10:16 AM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2447
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $953
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Fulfiled</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Cash on delivery
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 18, 5:43 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2446
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $12
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Fulfiled</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Standard shipping
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 18, 2:09 AM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2445
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $3927
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Paid</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              <span className="badge-label">Canceled</span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Cash on delivery
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 16, 3:22 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2444
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $5937
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Paid</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              <span className="badge-label">
                                Ready to pickup
                              </span>
                              <span
                                className="ms-1"
                                data-feather="info"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Local pickup
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 09, 8:49 AM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2443
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $124
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                              <span className="badge-label">Failed</span>
                              <span
                                className="ms-1"
                                data-feather="minus-circle"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                              <span className="badge-label">Unfulfiled</span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Cash on delivery
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 05, 4:35 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2442
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $542
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Fulfiled</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Standard shipping
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 05, 12:00 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2441
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $1480
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Paid</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                              <span className="badge-label">
                                Ready to pickup
                              </span>
                              <span
                                className="ms-1"
                                data-feather="info"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Local delivery
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Nov 02, 2:00 AM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2440
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $80
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              <span className="badge-label">Cancelled</span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                              <span className="badge-label">Unfulfiled</span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Free shipping
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Oct 30, 4:25 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="order align-middle white-space-nowrap ps-0">
                            <a className="fw-semibold" href="#!">
                              #2439
                            </a>
                          </td>
                          <td className="total align-middle text-end fw-semibold pe-7 text-body-highlight">
                            $999
                          </td>
                          <td className="payment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="fulfilment_status align-middle white-space-nowrap text-start fw-bold text-body-tertiary">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Fulfiled</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="delivery_type align-middle white-space-nowrap text-body fs-9 text-start">
                            Cash on delivery
                          </td>
                          <td className="date align-middle white-space-nowrap text-body-tertiary fs-9 ps-4 text-end">
                            Oct 28, 3:00 PM
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0 ps-5">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div className="col-auto d-flex">
                      <p
                        className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                        data-list-info="data-list-info"
                      ></p>
                      <a className="fw-semibold" href="#!" data-list-view="*">
                        View all
                        <span
                          className="fas fa-angle-right ms-1"
                          data-fa-transform="down-1"
                        ></span>
                      </a>
                      <a
                        className="fw-semibold d-none"
                        href="#!"
                        data-list-view="less"
                      >
                        View Less
                        <span
                          className="fas fa-angle-right ms-1"
                          data-fa-transform="down-1"
                        ></span>
                      </a>
                    </div>
                    <div className="col-auto d-flex">
                      <button className="page-link" data-list-pagination="prev">
                        <span className="fas fa-chevron-left"></span>
                      </button>
                      <ul className="mb-0 pagination"></ul>
                      <button
                        className="page-link pe-0"
                        data-list-pagination="next"
                      >
                        <span className="fas fa-chevron-right"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="mb-4">
                  Wishlist{" "}
                  <span className="text-body-tertiary fw-normal">(43)</span>
                </h3>
                <div
                  className="border-translucent border-top border-bottom"
                  id="customerWishlistTable"
                  data-list='{"valueNames":["products","color","size","price","quantity","total"],"page":5,"pagination":true}'
                >
                  <div className="table-responsive scrollbar">
                    <table className="table fs-9 mb-0">
                      <thead>
                        <tr>
                          <th
                            className="sort white-space-nowrap align-middle fs-10"
                            scope="col"
                            style={{ width: "5%" }}
                          ></th>
                          <th
                            className="sort white-space-nowrap align-middle"
                            scope="col"
                            style={{ width: "35%", minWidth: "250px" }}
                            data-sort="products"
                          >
                            PRODUCTS
                          </th>
                          <th
                            className="sort align-middle"
                            scope="col"
                            data-sort="color"
                            style={{ width: "15%" }}
                          >
                            COLOR
                          </th>
                          <th
                            className="sort align-middle"
                            scope="col"
                            data-sort="size"
                            style={{ width: "10%" }}
                          >
                            SIZE
                          </th>
                          <th
                            className="sort align-middle text-end"
                            scope="col"
                            data-sort="price"
                            style={{ width: "15%" }}
                          >
                            PRICE
                          </th>
                          <th
                            className="sort align-middle text-end"
                            scope="col"
                            data-sort="total"
                            style={{ width: "15%" }}
                          >
                            TOTAL
                          </th>
                        </tr>
                      </thead>
                      <tbody className="list" id="customer-wishlist-table-body">
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/1.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Fitbit Sense Advanced Smartwatch wi...
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            Pure matte black
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            42
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $57
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $57
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/7.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              2021 Apple 12.9-inch iPad Pro
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            Black
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            Pro
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $1,499
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $1499
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/6.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              PlayStation 5 DualSense Wireless Cont...
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            White
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            Regular
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $299
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $359
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/3.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Apple MacBook Pro 13 inch-M1-8/256G...
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            Space Gray
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            Pro
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $1,699
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $1,799
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/4.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Apple iMac 24&quot; 4K Retina Display M1 8 C...
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            Ocean Blue
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            21&quot;
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $65
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $65
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/10.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Apple Magic Mouse (Wireless, Recharg...
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            White
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            Regular
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $30
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $60
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/8.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Amazon Basics Matte Black Wired Keybo...
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            Black
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            MD
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $40
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $40
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/12.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              HORI Racing Wheel Apex for PlayStation...
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            Black
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            45
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $130
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $130
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle white-space-nowrap py-1">
                            <a
                              className="border border-translucent rounded-2 d-inline-block"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              <img
                                src="../../../assets/img//products/17.png"
                                alt=""
                                width="40"
                                height="40"
                              />
                            </a>
                          </td>
                          <td className="products align-middle">
                            <a
                              className="fw-semibold mb-0"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Xbox Series S
                            </a>
                          </td>
                          <td className="color align-middle white-space-nowrap fs-9 text-body">
                            Space Gray
                          </td>
                          <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
                            sm
                          </td>
                          <td className="price align-middle text-body fs-9 fw-semibold text-end">
                            $99
                          </td>
                          <td className="total align-middle fw-bold text-body-highlight text-end">
                            $99
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div className="col-auto d-flex">
                      <p
                        className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                        data-list-info="data-list-info"
                      ></p>
                      <a className="fw-semibold" href="#!" data-list-view="*">
                        View all
                        <span
                          className="fas fa-angle-right ms-1"
                          data-fa-transform="down-1"
                        ></span>
                      </a>
                      <a
                        className="fw-semibold d-none"
                        href="#!"
                        data-list-view="less"
                      >
                        View Less
                        <span
                          className="fas fa-angle-right ms-1"
                          data-fa-transform="down-1"
                        ></span>
                      </a>
                    </div>
                    <div className="col-auto d-flex">
                      <button className="page-link" data-list-pagination="prev">
                        <span className="fas fa-chevron-left"></span>
                      </button>
                      <ul className="mb-0 pagination"></ul>
                      <button
                        className="page-link pe-0"
                        data-list-pagination="next"
                      >
                        <span className="fas fa-chevron-right"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4">
                  Ratings & reviews{" "}
                  <span className="text-body-tertiary fw-normal">(43)</span>
                </h3>
                <div
                  className="border-top border-bottom border-translucent"
                  id="customerRatingsTable"
                  data-list='{"valueNames":["product","rating","review","status","date"],"page":5,"pagination":true}'
                >
                  <div className="table-responsive scrollbar">
                    <table className="table fs-9 mb-0">
                      <thead>
                        <tr>
                          <th
                            className="sort white-space-nowrap align-middle ps-0"
                            scope="col"
                            style={{ width: "20%" }}
                            data-sort="product"
                          >
                            PRODUCT
                          </th>
                          <th
                            className="sort align-middle"
                            scope="col"
                            data-sort="rating"
                            style={{ width: "10%" }}
                          >
                            RATING
                          </th>
                          <th
                            className="sort align-middle"
                            scope="col"
                            style={{ width: "50%" }}
                            data-sort="review"
                          >
                            REVIEW
                          </th>
                          <th
                            className="sort text-end align-middle"
                            scope="col"
                            style={{ width: "10%" }}
                            data-sort="status"
                          >
                            STATUS
                          </th>
                          <th
                            className="sort text-end align-middle"
                            scope="col"
                            style={{ width: "10%" }}
                            data-sort="date"
                          >
                            DATE
                          </th>
                          <th
                            className="sort text-end pe-0 align-middle"
                            scope="col"
                          ></th>
                        </tr>
                      </thead>
                      <tbody className="list" id="customer-rating-table-body">
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Apple Magic Mouse (Wireless, Rech...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              It's lovely, works right out of the box (as you'd
                              expect from an Apple device), and has a number of
                              useful functions.
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Success</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">Just now</p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Fitbit Sense Advanced Smartwatch ...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              This is an exceptional smartwatch, featuring a
                              wealth of useful functions at an affordable price.
                              The watch is small ...<a href="#!">See more</a>
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Success</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Dec 9, 2:28PM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              HORI Racing Wheel Apex for PlaySt...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              This steering wheel is a great buy! It works well
                              and feels good, however I wish it had a wider
                              diameter like a real ...<a href="#!">See more</a>
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Dec 4, 12:56 PM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Razer Kraken v3 x Wired 7.1 Surro...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              My son says these are the greatest he's ever
                              tasted.
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                              <span className="badge-label">Cancelled</span>
                              <span
                                className="ms-1"
                                data-feather="x"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Nov 28, 7:28 PM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              iPhone 13 pro max-Pacific Blue-12...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              I chose wisely. The phone is in excellent
                              condition, with no scratches or dents, excellent
                              battery life, and flawless...
                              <a href="#!">See more</a>
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Success</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Nov 24, 10:16 AM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Apple MacBook Pro 13 inch-M1-8/25...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star-half-alt star-icon text-warning"></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              It's lovely, works right out of the box (as you'd
                              expect from an Apple device), and has a number of
                              useful functions.
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">Just now</p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Apple iMac 24&quot; 4K Retina Display ...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              The best experience we could hope for. Customer
                              service team is amazing and the quality of their
                              products is unsurpas...<a href="#!">See more</a>
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Nov 09, 3:23 AM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              PlayStation 5 DualSense Wireless ...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              My son says these are the greatest he's ever
                              tasted.
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                              <span className="badge-label">Success</span>
                              <span
                                className="ms-1"
                                data-feather="check"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Nov 08, 8:53 AM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              2021 Apple 12.9-inch iPad Pro (Wi...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star-half-alt star-icon text-warning"></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              The response time and service I received when
                              contacted the designers were Phenomenal!
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Nov 07, 9:00 PM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="align-middle product white-space-nowrap">
                            <a
                              className="fw-semibold"
                              href="../../../apps/e-commerce/landing/product-details.html"
                            >
                              Amazon Basics Matte Black Wired K...
                            </a>
                          </td>
                          <td className="align-middle rating white-space-nowrap fs-10">
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                            <span
                              className="fa-regular fa-star text-warning-light"
                              data-bs-theme="light"
                            ></span>
                          </td>
                          <td
                            className="align-middle review"
                            style={{ minWidth: "350px" }}
                          >
                            <p className="fw-semibold text-body-highlight mb-0">
                              I chose wisely. The phone is in excellent
                              condition, with no scratches or dents, excellent
                              battery life, and flawless...
                              <a href="#!">See more</a>
                            </p>
                          </td>
                          <td className="align-middle text-end status">
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                              <span className="badge-label">Pending</span>
                              <span
                                className="ms-1"
                                data-feather="alert-octagon"
                                style={{ height: "12.8px", width: "12.8px" }}
                              ></span>
                            </span>
                          </td>
                          <td className="align-middle text-end date white-space-nowrap">
                            <p className="text-body-tertiary mb-0">
                              Nov 07, 11:20 AM
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="btn-reveal-trigger position-static">
                              <button
                                className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs-10"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  View
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Export
                                </a>
                                <div className="dropdown-divider"></div>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                    <div className="col-auto d-flex">
                      <p
                        className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                        data-list-info="data-list-info"
                      ></p>
                      <a className="fw-semibold" href="#!" data-list-view="*">
                        View all
                        <span
                          className="fas fa-angle-right ms-1"
                          data-fa-transform="down-1"
                        ></span>
                      </a>
                      <a
                        className="fw-semibold d-none"
                        href="#!"
                        data-list-view="less"
                      >
                        View Less
                        <span
                          className="fas fa-angle-right ms-1"
                          data-fa-transform="down-1"
                        ></span>
                      </a>
                    </div>
                    <div className="col-auto d-flex">
                      <button className="page-link" data-list-pagination="prev">
                        <span className="fas fa-chevron-left"></span>
                      </button>
                      <ul className="mb-0 pagination"></ul>
                      <button
                        className="page-link pe-0"
                        data-list-pagination="next"
                      >
                        <span className="fas fa-chevron-right"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="searchBoxModal"
        tabIndex="-1"
        aria-hidden="true"
        data-bs-backdrop="true"
        data-phoenix-modal="data-phoenix-modal"
        style={{ "--phoenix-backdrop-opacity": 1 }}
      >
        <div className="modal-dialog">
          <div className="modal-content mt-15 rounded-pill">
            <div className="modal-body p-0">
              <div
                className="search-box navbar-top-search-box"
                data-list='{"valueNames":["title"]}'
                style={{ width: "auto" }}
              >
                <form
                  className="position-relative"
                  data-bs-toggle="search"
                  data-bs-display="static"
                >
                  <input
                    className="form-control search-input fuzzy-search rounded-pill form-control-lg"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <span className="fas fa-search search-box-icon"></span>
                </form>
                <div
                  className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
                  data-bs-dismiss="search"
                >
                  <button
                    className="btn btn-link p-0"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                  <div
                    className="scrollbar-overlay"
                    style={{ maxHeight: "30rem" }}
                  >
                    <div className="list pb-3">
                      <h6 className="dropdown-header text-body-highlight fs-10 py-2">
                        24 <span className="text-body-quaternary">results</span>
                      </h6>
                      <hr className="my-0" />
                      <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                        Recently Searched{" "}
                      </h6>
                      <div className="py-2">
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              <span
                                className="fa-solid fa-clock-rotate-left"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              Store Macbook
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              {" "}
                              <span
                                className="fa-solid fa-clock-rotate-left"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              MacBook Air - 13″
                            </div>
                          </div>
                        </a>
                      </div>
                      <hr className="my-0" />
                      <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                        Products
                      </h6>
                      <div className="py-2">
                        <a
                          className="dropdown-item py-2 d-flex align-items-center"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="file-thumbnail me-2">
                            <img
                              className="h-100 w-100 object-fit-cover rounded-3"
                              src="../../../assets/img/products/60x60/3.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-body-highlight title">
                              MacBook Air - 13″
                            </h6>
                            <p className="fs-10 mb-0 d-flex text-body-tertiary">
                              <span className="fw-medium text-body-tertiary text-opactity-85">
                                8GB Memory - 1.6GHz - 128GB Storage
                              </span>
                            </p>
                          </div>
                        </a>
                        <a
                          className="dropdown-item py-2 d-flex align-items-center"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="file-thumbnail me-2">
                            <img
                              className="img-fluid"
                              src="../../../assets/img/products/60x60/3.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-body-highlight title">
                              MacBook Pro - 13″
                            </h6>
                            <p className="fs-10 mb-0 d-flex text-body-tertiary">
                              <span className="fw-medium text-body-tertiary text-opactity-85">
                                30 Sep at 12:30 PM
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>
                      <hr className="my-0" />
                      <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                        Quick Links
                      </h6>
                      <div className="py-2">
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              <span
                                className="fa-solid fa-link text-body"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              Support MacBook House
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              {" "}
                              <span
                                className="fa-solid fa-link text-body"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              Store MacBook″
                            </div>
                          </div>
                        </a>
                      </div>
                      <hr className="my-0" />
                      <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                        Files
                      </h6>
                      <div className="py-2">
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              <span
                                className="fa-solid fa-file-zipper text-body"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              Library MacBook folder.rar
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              {" "}
                              <span
                                className="fa-solid fa-file-lines text-body"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              Feature MacBook extensions.txt
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              {" "}
                              <span
                                className="fa-solid fa-image text-body"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              MacBook Pro_13.jpg
                            </div>
                          </div>
                        </a>
                      </div>
                      <hr className="my-0" />
                      <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                        Members
                      </h6>
                      <div className="py-2">
                        <a
                          className="dropdown-item py-2 d-flex align-items-center"
                          href="../../../pages/members.html"
                        >
                          <div className="avatar avatar-l status-online  me-2 text-body">
                            <img
                              className="rounded-circle "
                              src="../../../assets/img/team/40x40/10.webp"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-body-highlight title">
                              Carry Anna
                            </h6>
                            <p className="fs-10 mb-0 d-flex text-body-tertiary">
                              anna@technext.it
                            </p>
                          </div>
                        </a>
                        <a
                          className="dropdown-item py-2 d-flex align-items-center"
                          href="../../../pages/members.html"
                        >
                          <div className="avatar avatar-l  me-2 text-body">
                            <img
                              className="rounded-circle "
                              src="../../../assets/img/team/40x40/12.webp"
                              alt=""
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-body-highlight title">
                              John Smith
                            </h6>
                            <p className="fs-10 mb-0 d-flex text-body-tertiary">
                              smith@technext.it
                            </p>
                          </div>
                        </a>
                      </div>
                      <hr className="my-0" />
                      <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                        Related Searches
                      </h6>
                      <div className="py-2">
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              <span
                                className="fa-brands fa-firefox-browser text-body"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              Search in the Web MacBook
                            </div>
                          </div>
                        </a>
                        <a
                          className="dropdown-item"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-body-highlight title">
                              {" "}
                              <span
                                className="fa-brands fa-chrome text-body"
                                data-fa-transform="shrink-2"
                              ></span>{" "}
                              Store MacBook″
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="fallback fw-bold fs-7 d-none">
                        No Result Found.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
