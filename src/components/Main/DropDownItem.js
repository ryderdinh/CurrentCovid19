import useStore from 'store/useStore'

export const DropDownItem = ({ countryName, onClick }) => {
	const { fetchCountryData } = useStore()

	return (
		<div
			className='drop-down--item'
			onClick={() => {
				onClick()
				fetchCountryData(countryName)
			}}
		>
			{countryName}
		</div>
	)
}
