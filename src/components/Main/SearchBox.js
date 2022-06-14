import { countries } from 'config/countries'
import { Component } from 'react'
import IconDropDown from '../Icon/IconDropDown'
import DropDownBox from './DropDownBox'
import InputSearch from './InputSearch'

export class SearchBox extends Component {
	state = {
		list_country: countries,
		value_input: '',
		is_show_dropdown: false,
		srcIcon: './images/radio_filled.svg'
	}

	setValueInput = val => {
		this.setState({ value_input: val })
	}

	onInputChange = e => {
		this.setValueInput(e.target.value)
	}

	showDropDown = check => {
		this.setState({
			is_show_dropdown:
				check === 'reverse' ? !this.state.is_show_dropdown : check
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.value_input !== this.state.value_input) {
			this.setState({
				srcIcon: `./images/radio_filled${
					this.state.value_input ? '-x' : ''
				}.svg`
			})
		}
	}
	render() {
		return (
			<div className='search-box'>
				<IconDropDown
					classN='radio_filled'
					src={this.state.srcIcon}
					onClick={() => {
						if (this.state.value_input) {
							this.setValueInput('')
							this.showDropDown(true)
						}
					}}
				/>
				<InputSearch
					value={this.state.value_input}
					onChange={this.onInputChange}
					onFocus={() => this.showDropDown(true)}
					onBlur={() => this.showDropDown(false)}
				/>
				<DropDownBox
					keySearch={this.state.value_input}
					listCountry={this.state.list_country}
					setValueInput={this.setValueInput}
					active={this.state.is_show_dropdown}
					showDropDown={this.showDropDown}
				/>
			</div>
		)
	}
}

export default SearchBox
