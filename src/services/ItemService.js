import axios from "axios";

// Base URL for JSONPlaceholder API
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchItems = async (searchQuery, page, limit) => {
  // Construct query parameters for filtering and pagination
  const params = {
    _page: page,
    _limit: limit,
    title_like: searchQuery, // Filter by title (example, you can adjust for other fields)
  };

  const response = await axios.get(API_URL, { params });

  // Return the data and the total number of items for pagination
  return {
    items: response.data,
    total: parseInt(response.headers["x-total-count"], 10), // Assuming API returns total count in headers
  };
};

export const fetchItem = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

export const updateItem = async (id, item) => {
  const response = await axios.put(`${API_URL}/${id}`, item);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.status === 200; // Returns true if deletion is successful
};
