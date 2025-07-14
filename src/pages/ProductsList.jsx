import React, { useEffect, useState } from "react";
import { ApiCallWithoutDataNoAsync } from "../services/api";
import vitamilk from "../../dist/assets/Vita_Milk_25gm.png";
import twopm from "../../dist/assets/2pm.jpeg";

// Image mapping
const imageMap = {
  "Vita_Milk_25gm.png": vitamilk,
  "2pm.jpeg": twopm,
  // Add more as needed
};

// Dummy flash deals for carousel
const flashDeals = [
  { id: 1, title: "Buy 1 Get 1 Free", image: vitamilk },
  { id: 2, title: "Hot Deal on 2PM!", image: twopm },
];

// Dummy categories
//const categories = ["Beverages", "Snacks", "Spices", "Rice", "Personal Care"];

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState([]);
  const [Loading, setCatLoading] = useState(true);

  useEffect(() => {
    ApiCallWithoutDataNoAsync(
      "/productCategories",
      setCategories,
      setCatLoading
    );
  }, []);

  useEffect(() => {
    ApiCallWithoutDataNoAsync("/products", setProducts, setLoading);
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading products...</div>;

  return (
    <div style={{ padding: "20px", marginTop: "100px", width: "100%" }}>
      {/* 🔥 Flash Deals Carousel */}
      <div
        style={{
          marginBottom: "40px",
          display: "flex",
          overflowX: "auto",
          gap: "20px",
        }}
      >
        {flashDeals.map((deal) => (
          <div
            key={deal.id}
            style={{
              minWidth: "300px",
              flex: "0 0 auto",
              borderRadius: "10px",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={deal.image}
              alt={deal.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                background: "rgba(0,0,0,0.5)",
                color: "white",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {deal.title}
            </div>
          </div>
        ))}
      </div>

      {/* 📦 Categories */}
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              padding: "10px 20px",
              backgroundColor: "#457b9d",
              borderRadius: "20px",
              cursor: "pointer",
              boxShadow: "1px 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            {category}
          </div>
        ))}
      </div>

      {/* 🛍️ Products List */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Our Products
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((p) => {
          const productImage = imageMap[p.Image] || "";
          return (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                width: "220px",
                borderRadius: "8px",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={productImage}
                alt={p.Name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ marginTop: "10px" }}>{p.Name}</h3>
              <p>{p.Description}</p>
              <p>
                <strong>Price:</strong> Nrs. {p.Price}
              </p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Order Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
