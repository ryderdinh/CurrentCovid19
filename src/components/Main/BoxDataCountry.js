import useStore from 'store/useStore'
import BoxDataBody from './BoxDataBody'
import BoxDataFooter from './BoxDataFooter'
import BoxDataHeader from './BoxDataHeader'

export const BoxDataCountry = () => {
	const { _data, loading, error } = useStore(state => state._countryData)
	const { fetchCountryData } = useStore()

	return (
		<div className='box-data box-data-country' id='country'>
			<div className='background-texture'>
				<img src='./images/bx-tx.svg' alt='bx-tx' />
			</div>
			<BoxDataHeader title='<country/>' reload={fetchCountryData} />
			<BoxDataBody
				typeData={'data-country'}
				dataCovid={_data}
				loading={loading}
			/>
			<BoxDataFooter lastUpdate={_data._lastUpdate} />
		</div>
	)
}
