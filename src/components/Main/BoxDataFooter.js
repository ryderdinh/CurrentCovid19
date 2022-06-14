import { Component } from 'react'
export class BoxDataFooter extends Component {
	isValidDate = dateObject => new Date(dateObject).toString() !== 'Invalid Date'

	parseDate(date) {
		console.log()
		return this.isValidDate(date)
			? new Date(date).toLocaleString()
			: 'Please choose country'
	}

	render() {
		return (
			<div className='box-data__footer'>
				<p>
					<span>last update:</span> {this.parseDate(this.props.lastUpdate)}
				</p>
			</div>
		)
	}
}

export default BoxDataFooter
