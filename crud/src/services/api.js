import axios from 'axios';

// URL da nossa api
const base = 'http://localhost:3030/departamentos';

const api = axios.create({
    baseURL
});

export default api;