import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const signup = async (formData) => {
  return axios.post(`${API_BASE_URL}/Signup`, formData);
};

export const signin = async (formData) => {
  return axios.post(`${API_BASE_URL}/Signin`, formData);
};
