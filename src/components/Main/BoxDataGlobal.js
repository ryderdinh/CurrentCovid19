import { useEffect } from 'react'
import useStore from '../../store/useStore'
import BoxDataBody from './BoxDataBody'
import BoxDataFooter from './BoxDataFooter'
import BoxDataHeader from './BoxDataHeader'

const type_data = 'data-global'

export const BoxDataGlobal = () => {
	const { _data, loading, error } = useStore(state => state._globalData)
	const { fetchGlobalData } = useStore()

	useEffect(() => {
		fetchGlobalData()
	}, [fetchGlobalData])

	return (
		<div className='box-data box-data-global' id='global'>
			<div className='background-texture'>
				<img src='./images/bx-tx.svg' alt='bx-tx' />
			</div>
			<BoxDataHeader title='global' reload={fetchGlobalData} />
			<BoxDataBody typeData={type_data} dataCovid={_data} loading={loading} />
			<BoxDataFooter lastUpdate={_data._lastUpdate} />
		</div>
	)
}
