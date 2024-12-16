import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token automatically if it exists in localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials) => api.post('/auth/login/', credentials);
export const signup = (userData) => api.post('/auth/signup/', userData);
export const fetchOrders = () => api.get('/orders/');
export const fetchStores = () => api.get('/stores/');
export const fetchUsers = () => api.get('/users/');

export default api;
