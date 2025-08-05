import Swal from "sweetalert2";

const BASE_URL = "https://e-commerce-backend-uwc4.onrender.com/";
 //const BASE_URL = "http://localhost:5000/";

//-----------------Reusable functions--------
function showLoading() {
  Swal.fire({
    title: "Please wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}

function handleError(error) {
  Swal.fire("Error", error.message || "Something went wrong", "error");
}

//--------------ApiCall without any Data--------------
export const ApiCallWithoutDataNoAsync = (endpoint, setData, setLoading) => {
  
  setLoading(true);

  fetch(`${BASE_URL}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data.data);
      setLoading(false);
    })
    .catch((err) => {
      Swal.fire("Error fetching", err, "error");
      setLoading(false);
    });
};

//-----------------------ApiCallwithoutData but with SessionStorage for loggedin users only------------
export const ApiCallWithLocalStorageWithoutData = async (endpoint, setData) => {
  showLoading();
  
  try {
    const token = localStorage.getItem("orgToken");
    if (!token) throw new Error("No JWT token found in local storage.");

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(
        `Error ${response.status}: ${errorBody.detail || "Unknown error"}`
      );
    }

    const data = await response.json();
    setData(data.data);
    Swal.close();
  } catch (error) {
    Swal.fire("Error", error.message, "error");
  }
  //finally {
  //   Swal.close();
  // }
};

// ✅ GET with Auth
export const apiGet = async (endpoint, setData, setLoading = () => {}) => {
  setLoading(true);
  showLoading();

  try {
    const token = localStorage.getItem("orgToken");
    if (!token) throw new Error("No JWT token found in local storage");

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || `Error ${res.status}`);

    setData(json.data);
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
    Swal.close();
  }
};
// ✅ GET with params/ID and JWT in url
export const apiGetWithParams = async (endpoint, params = {}, setData, setLoading = () => { }) => {
  
  setLoading(true);
  showLoading();

  try {
    const token = localStorage.getItem("orgToken");
    if (!token) throw new Error("No JWT token found in local storage");

    const queryString = new URLSearchParams(params).toString();
    const url = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || `Error ${res.status}`);

    setData(json.data);
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
    Swal.close();
  }
};

// ✅ POST with Auth
export const ApiPostWithLocalStorage = async (endpoint, payload, onSuccess) => {
  Swal.fire({
    title: "Please Wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const token = localStorage.getItem("orgToken");
    if (!token) throw new Error("No JWT token found in local storage.");

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to post data");
    }
    const result = await response.json();
    if (onSuccess) onSuccess(result);
  } catch (error) {
    Swal.fire("Error", error.message, "error");
  } finally {
    Swal.close();
  }
};
// ✅ POST without Auth
export const ApiPostWithoutAuth = async (endpoint, payload, onSuccess) => {
  Swal.fire({
    title: "Please Wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to post data");
    }

    const result = await response.json();
    if (onSuccess) onSuccess(result);
  } catch (error) {
    Swal.fire("Error", error.message, "error");
  } finally {
    Swal.close();
  }
};

// ✅ PUT with Auth
export const apiPut = async (
  endpoint,
  payload,
  onSuccess = () => {},
  setLoading = () => {}
) => {
  setLoading(true);
  showLoading();

  try {
    const token = localStorage.getItem("orgToken");
    if (!token) throw new Error("No JWT token found in local storage");

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || `Error ${res.status}`);

    onSuccess(json.data);
    Swal.fire("Updated", "Data updated successfully", "success");
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
    Swal.close();
  }
};

// ✅ DELETE with Auth
export const apiDelete = async (
  endpoint,
  onSuccess = () => {},
  setLoading = () => {}
) => {
  setLoading(true);
  showLoading();

  try {
    const token = localStorage.getItem("orgToken");
    if (!token) throw new Error("No JWT token found in local storage");

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || `Error ${res.status}`);

    onSuccess(json.data);
    Swal.fire("Deleted", "Item deleted successfully", "success");
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
    Swal.close();
  }
};
