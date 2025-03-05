import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const signup = async (formData) => {
  return axios.post(`${API_BASE_URL}/signup`, formData);
};

export const signin = async (formData) => {
  return axios.post(`${API_BASE_URL}/signin`, formData);
};
