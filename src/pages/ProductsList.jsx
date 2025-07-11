import React, { useEffect, useState } from "react";
import { ApiCallWithoutDataNoAsync } from "../services/api";
function ProductsList() {
    
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiCallWithoutDataNoAsync(
      "/products",
      setProducts,
      setLoading
    );

    // fetch("https://e-commerce-backend-uwc4.onrender.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.error("Error fetching products:", err);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading products...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🛍 Bharat Pokhari Stores</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {products.map((p) => (
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
              src={p.image}
              alt={p.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3 style={{ marginTop: "10px" }}>{p.Name}</h3>
            <p>{p.Description}</p>
            <p>
              <strong>Price:</strong> ${p.Price}
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
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
