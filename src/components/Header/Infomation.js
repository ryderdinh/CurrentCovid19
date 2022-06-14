import { Component } from 'react'
import Icon from '../Icon/Icon'
import InfomationContent from './InfomationContent'

export class Infomation extends Component {
	state = {
		dsrc: ['mathdroid', 'ryderdinh']
	}
	render() {
		return (
			<div className='infomation'>
				<Icon classN={'infomation'} src={'/images/infomation.svg'} />
				<InfomationContent dsrc={this.state.dsrc} />
			</div>
		)
	}
}

export default Infomation
