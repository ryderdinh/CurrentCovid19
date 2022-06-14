import { Component } from 'react'

export class InputSearch extends Component {
	render() {
		const { value, onChange, onBlur, onFocus } = this.props
		return (
			<input
				autoComplete='off'
				className='search'
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder='choose country...'
			/>
		)
	}
}

export default InputSearch
