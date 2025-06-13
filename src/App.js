import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header/Header'
import Home from './pages/Home/Home'
import CreateAccount from './pages/CreateAccount/CreateAccount'

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sign-up' element={<CreateAccount />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
