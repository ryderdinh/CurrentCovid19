import axiosClient from './http-common'

const api = {
	global: _ => {
		const url = '/'
		return axiosClient.get(url)
	},
	country: (countryName = '') => {
		const url = `/countries/${countryName}`
		return axiosClient.get(url)
	}
}

export default api
