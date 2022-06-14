import create from 'zustand'
import createDataCountry from './createDataCountry'
import createDataGlobal from './createDataGlobal'

const useStore = create((set, get) => ({
	...createDataGlobal(set, get),
	...createDataCountry(set, get)
}))

export default useStore
