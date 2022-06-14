import { Component } from 'react'
import Icon from './Icon/Icon'

export class Footer extends Component {
	render() {
		return (
			<footer id='fter'>
				<p>copyright</p>
				<Icon classN={'copyright'} src={'./images/copyright.svg'} />
				<p>2021 Ryder Dinh</p>
			</footer>
		)
	}
}

export default Footer
