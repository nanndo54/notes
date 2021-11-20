const isDevelopment = import.meta.env.MODE === 'development'

const API_URL = isDevelopment ? 'http://localhost:3000/api' : '/api'

export default API_URL
