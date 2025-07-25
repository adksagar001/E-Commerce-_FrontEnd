// src/services/api.js
const BASE_URL = "https://e-commerce-backend-uwc4.onrender.com";
//const BASE_URL = "http://localhost:5000/";
export const ApiCallWithoutDataNoAsync = (endpoint, setData, setLoading) => {
  setLoading(true);

  fetch(`${BASE_URL}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching:", err);
      setLoading(false);
    });
};
