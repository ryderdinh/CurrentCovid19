import axios from 'axios'
import { env } from 'config/environment'
import queryString from 'query-string'

const API_URL = env.apiUrl

// Set up default config for http requests
const axiosClient = axios.create({
	baseURL: API_URL,
	headers: {
		'content-type': 'application/json'
	},
	paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(config => {
	return config
})

axiosClient.interceptors.response.use(
	response => {
		if (response && response.data) {
			return response.data
		}

		return response
	},
	error => {
		//Handle error
		throw error.response.data
	}
)

export default axiosClient
