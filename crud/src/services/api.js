import axios from 'axios';

// URL da nossa api
const baseURL = 'http://localhost:3030';

const api = axios.create({
    baseURL
});

export default api;