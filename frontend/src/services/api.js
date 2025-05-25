import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // ajuste se necessário
});

export default api;
