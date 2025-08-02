import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import List from "list.js";
import twopm from "/src/img/2pm.jpeg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ApiCallWithLocalStorageWithoutData } from "../../services/api";
import { ApiPostWithLocalStorage } from "../../services/api";
import { useNavigate } from "react-router-dom";
export default function AdminCustomersList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const listRef = useRef(null);
    const listInstance = useRef(null);
    const navigate = useNavigate();

  //------------------------getAll the products--------------
  async function fetchProductsWithJWT() {
    await ApiCallWithLocalStorageWithoutData(
      "customers",
      setProducts
    );
  }

  //------------------------getAll the Categories--------------
  async function fetchCategoriesWithJWT() {
    await ApiCallWithLocalStorageWithoutData("categories", setCategories);
  }

  //--------------call both the fetches-----------
  useEffect(() => {
    fetchProductsWithJWT();
    fetchCategoriesWithJWT();
  }, []);
  //----------------------------the asc and desc sorting,pagination in table-------------
   useEffect(() => {
     const timer = setTimeout(() => {
       const listContainer = listRef.current;
       const tbody = listContainer?.querySelector("tbody.list");
       const rows = tbody?.querySelectorAll("tr:not(.template)") || [];

       // Clean up previous list instance
       if (listInstance.current) {
         listInstance.current.destroy();
         listInstance.current = null;
       }

       // Only reinitialize if there are visible rows
       if (listContainer && rows.length > 0) {
         listInstance.current = new List(listContainer, {
           valueNames: ["product", "price", "category", "vendor", "time"],
           page: 10,
           pagination: {
             paginationClass: "pagination",
             innerWindow: 2,
             left: 1,
             right: 1,
           },
         });

         // Optional: Add sorting behavior
         const headers = listContainer.querySelectorAll("th.sort[data-sort]");
         headers.forEach((header) => {
           let ascending = true;
           header.onclick = () => {
             const attr = header.getAttribute("data-sort");
             listInstance.current.sort(attr, {
               order: ascending ? "asc" : "desc",
             });
             ascending = !ascending;
           };
         });
       }
     }, 100); 

     return () => clearTimeout(timer);
   }, [products]);

  //----------------------------Add Product-----------------
  async function handleSubmitProduct() {
    const form = document.forms["productForm"];
    const payload = {
      ProductName: form.ProductName.value,
      CompanyName: form.CompanyName.value,
      Description: form.Description.value,
      Price: parseInt(form.Price.value),
      Image: form.Image.value,
      Category: parseInt(form.Category.value),
    };
    await ApiPostWithLocalStorage("products/InsertNewProduct", payload, () => {
      Swal.fire("Success", "Product saved successfully", "success");
      document.getElementById("productForm").reset();

     const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
       
        modalInstance.hide();
        fetchProductsWithJWT();
      } 
    });
  }

  //---------------------Main functionality----------------------
  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#!">Customers</a>
          </li>

          <li className="breadcrumb-item active">List of Customers</li>
        </ol>
      </nav>
      <div className="mb-9">
        <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span>All </span>
              <span className="text-body-tertiary fw-semibold">
                ({products.length})
              </span>
            </a>
          </li>
        </ul>
        <div
          id="products"
          ref={listRef}
          data-list='{"valueNames":["product","price","category","vendor","time"],"page":50,"pagination":true}'
        >
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <div className="search-box">
                <form className="position-relative">
                  <input
                    className="form-control search-input search"
                    type="search"
                    placeholder="Search Customers"
                    aria-label="Search"
                  />
                  <span className="fas fa-search search-box-icon"></span>
                </form>
              </div>

              <div className="ms-xxl-auto">
                <button className="btn btn-link text-body me-4 px-0">
                  <span className="fa-solid fa-file-export fs-9 me-2"></span>
                  Export
                </button>
                <button
                  className="btn btn-primary"
                  id="addBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                >
                  <span className="fas fa-plus me-2"></span>Add Customer
                </button>
              </div>
            </div>
          </div>
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <div className="table-responsive scrollbar mx-n1 px-1">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th
                      className="white-space-nowrap fs-9 align-middle ps-0"
                      style={{ maxWidth: "20px", width: "18px" }}
                    >
                      <div className="form-check mb-0 fs-8">
                        <input
                          className="form-check-input"
                          id="checkbox-bulk-products-select"
                          type="checkbox"
                          data-bulk-select='{"body":"products-table-body"}'
                        />
                      </div>
                    </th>
                    <th
                      className="sort white-space-nowrap align-middle fs-10"
                      scope="col"
                      style={{ width: "70px" }}
                    ></th>
                    <th
                      className="sort white-space-nowrap align-middle ps-4"
                      scope="col"
                      style={{ width: "350px", cursor: "pointer" }}
                      data-sort="product"
                      role="button"
                    >
                      CUSTOMER NAME
                    </th>

                    <th
                      className="sort align-middle ps-4"
                      scope="col"
                      data-sort="category"
                      style={{ width: "150px" }}
                    >
                      EMAIL ADDRESS
                    </th>

                    <th
                      className="sort align-middle ps-4"
                      scope="col"
                      style={{ width: "50px" }}
                    ></th>
                  </tr>
                </thead>
                <tbody className="list" id="products-table-body">
                  {products.map((product, index = 0) => (
                    <tr key={product.id} className="position-static">
                      <td className="fs-9 align-middle">
                        <div className="form-check mb-0 fs-8">
                          {index + 1}
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>

                      <td
                        className="align-middle white-space-nowrap py-0"
                        data-sort={product.image}
                      >
                        <a
                          className="d-block border border-translucent rounded-2"
                          href="#!"
                        >
                          <img
                            src={
                              product.image?.startsWith("http")
                                ? product.image
                                : twopm
                            }
                            alt=""
                            width="53"
                          />
                        </a>
                      </td>

                      <td
                        className="product align-middle ps-4"
                        data-sort={product.productname}
                      >
                        <a className="fw-semibold line-clamp-3 mb-0" href="#!">
                          {product.Name}
                        </a>
                      </td>

                      <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
                        {product.email || "Uncategorized"}
                      </td>
                      <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
                        <button className="btn btn-subtle-success me-1 mb-1"type="button" onClick={() => navigate(`/admin/CustomerDetails/${product.id}`)}>
                          <span className="fa-solid fa-eye fs-9 me-2"></span>
                        </button>
                        <button className="btn btn-subtle-warning me-1 mb-1"type="button">
                          <span className="fa-solid fa-edit fs-9 me-2"></span>
                        </button>
                        <button className="btn btn-subtle-danger me-1 mb-1"type="button">
                          <span className="fa-solid fa-trash fs-9 me-2"></span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="template">
                    <td className="product"></td>
                    <td className="price"></td>
                    <td className="category"></td>
                    <td className="vendor"></td>
                    <td className="time"></td>
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
                <button className="page-link pe-0" data-list-pagination="next">
                  <span className="fas fa-chevron-right"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add product modal */}
      <div
        className="modal fade"
        id="productModal"
        tabIndex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="productModalLabel">
                Add / Edit Customer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="productForm">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ProductName"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="CompanyName"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="Description"
                    ></textarea>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Price (Nrs.)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="Price"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Image Filename</label>
                    <input type="text" className="form-control" name="Image" />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Category:</label>
                    <select className="form-control" name="Category">
                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>
                          {category.CategoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmitProduct}
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
