import { Component } from 'react'

export class LogoName extends Component {
	state = {
		covid: ['C', 'O', 'V', 'I', 'D', 1, 9]
	}
	render() {
		return (
			<div className='logo--name'>
				<img src='./images/logo-name.svg' alt='current covid19' />
				<div className='logo-covid'>
					{this.state.covid.map((txt, index) => (
						<p key={index} className={index > 4 ? 'txtBlack' : 'txtStroke'}>
							{txt}
						</p>
					))}
				</div>
			</div>
		)
	}
}

export default LogoName
