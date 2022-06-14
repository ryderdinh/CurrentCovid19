import 'animate.css'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './fonts/Redwing-Light.otf'
import './fonts/Redwing-Medium.otf'
import './Responsive.css'

function App() {
	return (
		<div className='container'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
