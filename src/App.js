import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header/Header'
import Home from './pages/Home/Home'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import LogIn from './pages/LogIn/LogIn'
import ResetPassword from './pages/ResetPassword/ResetPassword'

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sign-up' element={<CreateAccount />} />
					<Route path='/log-in' element={<LogIn />} />
					<Route path='/reset-password' element={<ResetPassword />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
