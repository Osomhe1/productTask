import axios from 'axios'

const _2gedaservice = axios.create({
  baseURL: 'https://fisolak-backend.onrender.com/api',
  maxBodyLength: Infinity,
})

export const setupAxios = () => {
  const token = localStorage.getItem('token')
  _2gedaservice.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default _2gedaservice
