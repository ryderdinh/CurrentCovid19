import { Component } from 'react'
import DataCovidItem from './DataCovidItem'

export class DataCovid extends Component {
	render() {
		const { dataCovid, loading } = this.props
		return (
			<div className='box-data--data-covid'>
				<DataCovidItem
					type={'confirmed'}
					number={dataCovid._confirmed}
					loading={loading}
				/>
				<DataCovidItem
					type={'deaths'}
					number={dataCovid._deaths}
					loading={loading}
				/>
				<DataCovidItem
					type={'recovered'}
					number={dataCovid._recovered}
					loading={loading}
				/>
			</div>
		)
	}
}

export default DataCovid
