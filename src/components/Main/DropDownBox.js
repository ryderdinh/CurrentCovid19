import { Component, createRef } from 'react'
import { DropDownItem } from './DropDownItem'

export class DropDownBox extends Component {
	constructor(props) {
		super(props)

		this.wrapperRef = createRef()
		this.handleClickOutside = this.handleClickOutside.bind(this)
	}
	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside)
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
			this.props.showDropDown(false)
		}
	}

	render() {
		const { listCountry, active, keySearch } = this.props
		return (
			<div
				className={active ? 'drop-down-box active' : 'drop-down-box'}
				ref={this.wrapperRef}
			>
				{listCountry
					.filter(value =>
						value.toLowerCase().includes(keySearch.toLowerCase())
					)
					.map((value, index) => (
						<DropDownItem
							key={index}
							countryName={value}
							onClick={() => {
								this.props.setValueInput(value)
								this.props.showDropDown(false)
							}}
						/>
					))}
				{!listCountry.filter(value =>
					value.toLowerCase().includes(keySearch.toLowerCase())
				).length && <div className='drop-down--item'>No result</div>}
			</div>
		)
	}
}

export default DropDownBox
