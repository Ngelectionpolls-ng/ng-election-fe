import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ngelectionpolls.org/api",
  //   process.env.NEXT_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${"token"}`,
//     "Content-Type": "application/json", // Default content type for JSON APIs
//   },
});

// GET request
export const getData = async (endpoint: any) => {
  try {
    const response = await axiosInstance.get(endpoint);
    console.log("GET Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

// POST request
export const postData = async (endpoint: any, data?: any) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    console.log("POST Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    return error;
  }
};

// PUT request
export const updateData = async (endpoint: any, data: any) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    console.log("PUT Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("PUT Error:", error);
    throw error;
  }
};

// DELETE request
export const deleteData = async (endpoint: any) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    console.log("DELETE Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("DELETE Error:", error);
    throw error;
  }
};

// Example usage of the HTTP methods
