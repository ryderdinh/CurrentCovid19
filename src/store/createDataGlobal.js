import api from '../api'

const createDataGlobal = set => ({
	_globalData: {
		_data: {
			_confirmed: 0,
			_deaths: 0,
			_recovered: 0,
			_lastUpdate: Date.now()
		},
		loading: false,
		error: null
	},
	fetchGlobalData: async () => {
		await set(_ => ({
			_globalData: {
				_data: _._globalData._data,
				loading: true,
				error: null
			}
		}))

		try {
			const resp = await api.global()
			set(_ => ({
				_globalData: {
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
				_globalData: {
					_data: _._globalData._data,
					loading: false,
					error: error
				}
			}))
		}
	}
})

export default createDataGlobal
