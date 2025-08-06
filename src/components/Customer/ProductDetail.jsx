import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetWithoutAuthentication } from "../../services/api";

function ProductDetail() {
  const { prodId } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch product details
  async function FetchProductDetails() {
    try {
      setLoading(true);
      await apiGetWithoutAuthentication(
        `products/getAProduct/public?orgId=1&prodId=${prodId}`,
        (response) => {
            setProductDetail(response[0]);         
        },
        setLoading
      );
    } catch (error) {
      console.error("Error fetching product detail:", error);
      setProductDetail([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchProductDetails();
  }, [prodId]);

  if (loading) return <div>Loading...</div>;

  if (!productDetail || productDetail.length === 0) {
    return <div>No product found.</div>;
  }

  return (
    <>
      <section className="py-0">
        <div className="container-small" style={{ marginTop: "30px" }}>
          <nav className="mb-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#">Product Detail</a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                {productDetail.ProductName}
              </li>
            </ol>
          </nav>
          <div
            className="row g-5 mb-5 mb-lg-8"
            data-product-details="data-product-details"
          >
            <div className="col-12 col-lg-6">
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-2 col-lg-12 col-xl-2">
                  <div
                    className="swiper-products-thumb swiper swiper theme-slider overflow-visible"
                    id="swiper-products-thumb"
                  ></div>
                </div>
                <div className="col-12 col-md-10 col-lg-12 col-xl-10">
                  <div className="d-flex align-items-center border border-translucent rounded-3 text-center p-5 h-100">
                    <div
                      className="swiper swiper theme-slider"
                      data-thumb-target="swiper-products-thumb"
                      data-products-swiper='{"slidesPerView":1,"spaceBetween":16,"thumbsEl":".swiper-products-thumb"}'
                    ></div>
                    <img
                      src={productDetail.Image}
                      width="380"
                      alt="Product Image"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <button className="btn btn-lg btn-outline-warning rounded-pill w-100 me-3 px-2 px-sm-4 fs-9 fs-sm-8">
                  <span className="me-2 far fa-heart"></span>Add to wishlist
                </button>
                <button className="btn btn-lg btn-warning rounded-pill w-100 fs-9 fs-sm-8">
                  <span className="fas fa-shopping-cart me-2"></span>Add to cart
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex flex-wrap">
                    <div className="me-2">
                      <span className="fa fa-star text-warning"></span>
                      <span className="fa fa-star text-warning"></span>
                      <span className="fa fa-star text-warning"></span>
                      <span className="fa fa-star text-warning"></span>
                      <span className="fa fa-star text-warning"></span>
                    </div>
                    <p className="text-primary fw-semibold mb-2">
                      6548 People rated and reviewed{" "}
                    </p>
                  </div>
                  <h3 className="mb-3 lh-sm">{productDetail.ProductName}</h3>
                  <h4>{productDetail.CompanyName}</h4>
                  <div className="d-flex flex-wrap align-items-start mb-3">
                    <span className="badge text-bg-success fs-9 rounded-pill me-2 fw-semibold">
                      #1 Best seller
                    </span>
                    <a className="fw-semibold" href="#!">
                      in Phoenix sell analytics 2021
                    </a>
                  </div>
                  <div className="d-flex flex-wrap align-items-center">
                    <h1 className="me-3">Nrs {productDetail.DiscountedRate}</h1>
                    <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
                      Nrs {productDetail.Price}
                    </p>
                    <p className="text-warning fw-bolder fs-6 mb-0">
                      {productDetail.DiscountRate}% off
                    </p>
                  </div>
                  <p className="text-success fw-semibold fs-7 mb-2">
                    {productDetail.Quantity} items In stock
                  </p>
                  <p className="mb-2 text-body-secondary">
                    {productDetail.Description}
                  </p>
                </div>
                <div>
                  <div className="mb-3">
                    <p className="fw-semibold mb-2 text-body">
                      Color :{" "}
                      <span
                        className="text-body-emphasis"
                        data-product-color="data-product-color"
                      >
                        Blue
                      </span>
                    </p>
                    <div
                      className="d-flex product-color-variants"
                      data-product-color-variants="data-product-color-variants"
                    >
                      <div
                        className="rounded-1 border border-translucent me-2 active"
                        data-variant="Blue"
                        data-products-images='["../../../assets/img/products/details/blue_front.png","../../../assets/img/products/details/blue_back.png","../../../assets/img/products/details/blue_side.png"]'
                      >
                        <img
                          src="../../../assets/img/products/details/blue_front.png"
                          alt=""
                          width="38"
                        />
                      </div>
                      <div
                        className="rounded-1 border border-translucent me-2"
                        data-variant="Red"
                        data-products-images='["../../../assets/img/products/details/red_front.png","../../../assets/img/products/details/red_back.png","../../../assets/img/products/details/red_side.png"]'
                      >
                        <img
                          src="../../../assets/img/products/details/red_front.png"
                          alt=""
                          width="38"
                        />
                      </div>
                      <div
                        className="rounded-1 border border-translucent me-2"
                        data-variant="Green"
                        data-products-images='["../../../assets/img/products/details/green_front.png","../../../assets/img/products/details/green_back.png","../../../assets/img/products/details/green_side.png"]'
                      >
                        <img
                          src="../../../assets/img/products/details/green_front.png"
                          alt=""
                          width="38"
                        />
                      </div>
                      <div
                        className="rounded-1 border border-translucent me-2"
                        data-variant="Purple"
                        data-products-images='["../../../assets/img/products/details/purple_front.png","../../../assets/img/products/details/purple_back.png","../../../assets/img/products/details/purple_side.png"]'
                      >
                        <img
                          src="../../../assets/img/products/details/purple_front.png"
                          alt=""
                          width="38"
                        />
                      </div>
                      <div
                        className="rounded-1 border border-translucent me-2"
                        data-variant="Silver"
                        data-products-images='["../../../assets/img/products/details/silver_front.png","../../../assets/img/products/details/silver_back.png","../../../assets/img/products/details/silver_side.png"]'
                      >
                        <img
                          src="../../../assets/img/products/details/silver_front.png"
                          alt=""
                          width="38"
                        />
                      </div>
                      <div
                        className="rounded-1 border border-translucent me-2"
                        data-variant="Yellow"
                        data-products-images='["../../../assets/img/products/details/yellow_front.png","../../../assets/img/products/details/yellow_back.png","../../../assets/img/products/details/yellow_side.png"]'
                      >
                        <img
                          src="../../../assets/img/products/details/yellow_front.png"
                          alt=""
                          width="38"
                        />
                      </div>
                      <div
                        className="rounded-1 border border-translucent me-2"
                        data-variant="Orange"
                        data-products-images='["../../../assets/img/products/details/orange_front.png","../../../assets/img/products/details/orange_back.png","../../../assets/img/products/details/orange_side.png"]'
                      >
                        <img
                          src="../../../assets/img/products/details/orange_front.png"
                          alt=""
                          width="38"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 g-sm-5 align-items-end">
                    <div className="col-12 col-sm">
                      <p className="fw-semibold mb-2 text-body">Quantity : </p>
                      <div className="d-flex justify-content-between align-items-end">
                        <div
                          className="d-flex flex-between-center"
                          data-quantity="data-quantity"
                        >
                          <button
                            className="btn btn-phoenix-primary px-3"
                            data-type="minus"
                          >
                            <span className="fas fa-minus"></span>
                          </button>
                          <input
                            className="form-control text-center input-spin-none bg-transparent border-0 outline-none"
                            style={{ width: "50px" }}
                            type="number"
                            min="1"
                            max={productDetail.Quantity}
                          />
                          <button
                            className="btn btn-phoenix-primary px-3"
                            data-type="plus"
                          >
                            <span className="fas fa-plus"></span>
                          </button>
                        </div>
                        <button className="btn btn-phoenix-primary px-3 border-0">
                          <span className="fas fa-share-alt fs-7"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 mb-9">
        <div className="container">
          <div className="d-flex flex-between-center mb-3">
            <div>
              <h3>Similar Products</h3>
              <p className="mb-0 text-body-tertiary fw-semibold">
                Essential for a better life
              </p>
            </div>
            <button className="btn btn-sm btn-phoenix-primary">View all</button>
          </div>
          <div className="swiper-theme-container products-slider">
            <div
              className="swiper swiper theme-slider"
              data-swiper='{"slidesPerView":1,"spaceBetween":16,"breakpoints":{"450":{"slidesPerView":2,"spaceBetween":16},"768":{"slidesPerView":3,"spaceBetween":16},"992":{"slidesPerView":4,"spaceBetween":16},"1200":{"slidesPerView":5,"spaceBetween":16},"1540":{"slidesPerView":6,"spaceBetween":16}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="position-relative text-decoration-none product-card h-100">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                          <button
                            className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add to wishlist"
                          >
                            <span
                              className="fas fa-heart d-block-hover"
                              data-fa-transform="down-1"
                            ></span>
                            <span
                              className="far fa-heart d-none-hover"
                              data-fa-transform="down-1"
                            ></span>
                          </button>
                          <img
                            className="img-fluid"
                            src="../../../assets/img/products/1.png"
                            alt=""
                          />
                        </div>
                        <a
                          className="stretched-link"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                            Fitbit Sense Advanced Smartwatch with Tools for
                            Heart Health, Stress Management &amp; Skin
                            Temperature Trends Carbon/Graphite, One Size (S
                            &amp; L Bands)
                          </h6>
                        </a>
                        <p className="fs-9">
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="text-body-quaternary fw-semibold ms-1">
                            (59 people rated)
                          </span>
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center mb-1">
                          <p className="me-2 text-body text-decoration-line-through mb-0">
                            $49.99
                          </p>
                          <h3 className="text-body-emphasis mb-0">$34.99</h3>
                        </div>
                        <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                          2 colors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="position-relative text-decoration-none product-card h-100">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                          <button
                            className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add to wishlist"
                          >
                            <span
                              className="fas fa-heart d-block-hover"
                              data-fa-transform="down-1"
                            ></span>
                            <span
                              className="far fa-heart d-none-hover"
                              data-fa-transform="down-1"
                            ></span>
                          </button>
                          <img
                            className="img-fluid"
                            src="../../../assets/img/products/3.png"
                            alt=""
                          />
                        </div>
                        <a
                          className="stretched-link"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                            Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray
                          </h6>
                        </a>
                        <p className="fs-9">
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="text-body-quaternary fw-semibold ms-1">
                            (13 people rated)
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="fs-9 text-body-highlight fw-bold mb-2">
                          Apple care included
                        </p>
                        <div className="d-flex align-items-center mb-1">
                          <p className="me-2 text-body text-decoration-line-through mb-0">
                            $1299.00
                          </p>
                          <h3 className="text-body-emphasis mb-0">$1149.00</h3>
                        </div>
                        <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                          2 colors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="position-relative text-decoration-none product-card h-100">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                          <button
                            className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add to wishlist"
                          >
                            <span
                              className="fas fa-heart d-block-hover"
                              data-fa-transform="down-1"
                            ></span>
                            <span
                              className="far fa-heart d-none-hover"
                              data-fa-transform="down-1"
                            ></span>
                          </button>
                          <img
                            className="img-fluid"
                            src="../../../assets/img/products/5.png"
                            alt=""
                          />
                        </div>
                        <a
                          className="stretched-link"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                            Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming
                            headset
                          </h6>
                        </a>
                        <p className="fs-9">
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="text-body-quaternary fw-semibold ms-1">
                            (64 people rated)
                          </span>
                        </p>
                      </div>
                      <div>
                        <h3 className="text-body-emphasis">$59.00</h3>
                        <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                          1 colors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="position-relative text-decoration-none product-card h-100">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                          <button
                            className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add to wishlist"
                          >
                            <span
                              className="fas fa-heart d-block-hover"
                              data-fa-transform="down-1"
                            ></span>
                            <span
                              className="far fa-heart d-none-hover"
                              data-fa-transform="down-1"
                            ></span>
                          </button>
                          <img
                            className="img-fluid"
                            src="../../../assets/img/products/2.png"
                            alt=""
                          />
                          <span className="badge text-bg-success fs-10 product-verified-badge">
                            Verified<span className="fas fa-check ms-1"></span>
                          </span>
                        </div>
                        <a
                          className="stretched-link"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                            iPhone 13 pro max-Pacific Blue, 128GB storage
                          </h6>
                        </a>
                        <p className="fs-9">
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="text-body-quaternary fw-semibold ms-1">
                            (32 people rated)
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="fs-9 text-body-highlight fw-bold mb-2">
                          Stock limited
                        </p>
                        <div className="d-flex align-items-center mb-1">
                          <p className="me-2 text-body text-decoration-line-through mb-0">
                            $899.99
                          </p>
                          <h3 className="text-body-emphasis mb-0">$855.00</h3>
                        </div>
                        <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                          5 colors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="position-relative text-decoration-none product-card h-100">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                          <button
                            className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add to wishlist"
                          >
                            <span
                              className="fas fa-heart d-block-hover"
                              data-fa-transform="down-1"
                            ></span>
                            <span
                              className="far fa-heart d-none-hover"
                              data-fa-transform="down-1"
                            ></span>
                          </button>
                          <img
                            className="img-fluid"
                            src="../../../assets/img/products/16.png"
                            alt=""
                          />
                        </div>
                        <a
                          className="stretched-link"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                            Apple AirPods Pro
                          </h6>
                        </a>
                        <p className="fs-9">
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="text-body-quaternary fw-semibold ms-1">
                            (39 people rated)
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="fs-9 text-body-highlight fw-bold mb-1">
                          free with iPhone 5s
                        </p>
                        <p className="fs-9 text-body-tertiary mb-2">
                          Ships to Canada
                        </p>
                        <h3 className="text-body-emphasis">$59.00</h3>
                        <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                          3 colors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="position-relative text-decoration-none product-card h-100">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                          <button
                            className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add to wishlist"
                          >
                            <span
                              className="fas fa-heart d-block-hover"
                              data-fa-transform="down-1"
                            ></span>
                            <span
                              className="far fa-heart d-none-hover"
                              data-fa-transform="down-1"
                            ></span>
                          </button>
                          <img
                            className="img-fluid"
                            src="../../../assets/img/products/10.png"
                            alt=""
                          />
                        </div>
                        <a
                          className="stretched-link"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                            Apple Magic Mouse (Wireless, Rechargable) - Silver
                          </h6>
                        </a>
                        <p className="fs-9">
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="text-body-quaternary fw-semibold ms-1">
                            (6 people rated)
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="fs-9 text-body-highlight fw-bold mb-1">
                          Bundle availabe
                        </p>
                        <p className="fs-9 text-body-tertiary mb-2">
                          Charger not included
                        </p>
                        <h3 className="text-body-emphasis">$89.00</h3>
                        <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                          2 colors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="position-relative text-decoration-none product-card h-100">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                          <button
                            className="btn btn-wish btn-wish-primary z-2 d-toggle-container"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add to wishlist"
                          >
                            <span
                              className="fas fa-heart d-block-hover"
                              data-fa-transform="down-1"
                            ></span>
                            <span
                              className="far fa-heart d-none-hover"
                              data-fa-transform="down-1"
                            ></span>
                          </button>
                          <img
                            className="img-fluid"
                            src="../../../assets/img/products/6.png"
                            alt=""
                          />
                        </div>
                        <a
                          className="stretched-link"
                          href="../../../apps/e-commerce/landing/product-details.html"
                        >
                          <h6 className="mb-2 lh-sm line-clamp-3 product-name">
                            PlayStation 5 DualSense Wireless Controller
                          </h6>
                        </a>
                        <p className="fs-9">
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="fa fa-star text-warning"></span>
                          <span className="text-body-quaternary fw-semibold ms-1">
                            (67 people rated)
                          </span>
                        </p>
                      </div>
                      <div>
                        <div className="d-flex align-items-center mb-1">
                          <p className="me-2 text-body text-decoration-line-through mb-0">
                            $125.00
                          </p>
                          <h3 className="text-body-emphasis mb-0">$89.00</h3>
                        </div>
                        <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
                          2 colors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-next">
                <span className="fas fa-chevron-right nav-icon"></span>
              </div>
              <div className="swiper-button-prev">
                <span className="fas fa-chevron-left nav-icon"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
