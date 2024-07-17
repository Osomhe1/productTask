import axios from 'axios'

const _2gedaservice = axios.create({
	baseURL: "https://api.2geda.net/api",
	maxBodyLength: Infinity,
});

export const setupAxios = () => {
  const token = localStorage.getItem('authToken')
  _2gedaservice.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default _2gedaservice
