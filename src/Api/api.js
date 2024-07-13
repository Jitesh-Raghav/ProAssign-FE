
import axios from 'axios';


// const LOCALHOST='http://localhost:8080'
  export const API_BASE_URL="https://captivating-courage-production.up.railway.app"
// export const API_BASE_URL="http://localhost:8080"

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
