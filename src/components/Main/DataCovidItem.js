import { Component } from 'react'
import Icon from '../Icon/Icon'
export class DataCovidItem extends Component {
	render() {
		const { type, number, loading } = this.props
		return (
			<div className='data-covid--item'>
				<div className='data-covid--number animate__animated animate__fadeInDown animate__slow'>
					{loading ? (
						<p
							style={{
								fontSize: '16px'
							}}
						>
							loading...
						</p>
					) : (
						number
					)}
				</div>
				<div className='data-covid--type'>
					<Icon classN={type} src={`./images/${type}.svg`} />
					<div className='data-covid--name'>{type}</div>
				</div>
			</div>
		)
	}
}

export default DataCovidItem
