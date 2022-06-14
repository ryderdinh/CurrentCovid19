import { Component } from 'react'
import DataCovid from './DataCovid'
import SearchBox from './SearchBox'
export class BoxDataBody extends Component {
	checkTypeData = val => {
		if (val === 'data-country') return <SearchBox />
	}

	render() {
		const { typeData, dataCovid } = this.props
		return (
			<div className='box-data__body'>
				{this.checkTypeData(typeData)}
				<DataCovid dataCovid={dataCovid} loading={this.props.loading} />
			</div>
		)
	}
}

export default BoxDataBody
