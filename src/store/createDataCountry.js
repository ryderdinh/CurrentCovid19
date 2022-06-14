import api from '../api'

const createDataCountry = set => ({
	_countryData: {
		_data: {
			_confirmed: 0,
			_deaths: 0,
			_recovered: 0,
			_lastUpdate: new Date().toLocaleString()
		},
		loading: false,
		error: null
	},
	fetchCountryData: async countryName => {
		await set(_ => ({
			_countryData: {
				_data: _._countryData._data,
				loading: true,
				error: null
			}
		}))

		try {
			const resp = await api.country(countryName)
			set(_ => ({
				_countryData: {
					_data: {
						_confirmed: resp.confirmed.value,
						_deaths: resp.deaths.value,
						_recovered: resp.recovered.value,
						_lastUpdate: resp.lastUpdate
					},
					loading: false,
					error: null
				}
			}))
		} catch (error) {
			set(_ => ({
				_countryData: {
					_data: _._countryData._data,
					loading: false,
					error: error
				}
			}))
		}
	}
})

export default createDataCountry
