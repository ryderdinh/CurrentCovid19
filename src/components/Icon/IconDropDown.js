import { Component } from 'react'

export class IconDropDown extends Component {
	render() {
		return (
			<div
				className={`ic ic--${this.props.classN}`}
				onClick={this.props.onClick}
			>
				<img src={this.props.src} alt={this.props.classN} />
			</div>
		)
	}
}

export default IconDropDown
