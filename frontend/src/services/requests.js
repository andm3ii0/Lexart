import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || 3001}`,
});

export const requestData = async (endpoint) => {
  const response = await api.get(endpoint);
  return response
};

export const register = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const saveMessages = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
