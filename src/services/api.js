import axios from 'axios';

const api = axios.create({
    baseURL: 'https://drivops-backend-test.herokuapp.com',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export default api;