import './Header.css'
import logo from '../../assets/img/logo.png'

function Header() {
	return (
		<>
			<div className='header'>
				<div className='header-logo'>
					<img src={logo} alt='logo' />
				</div>
			</div>
		</>
	)
}

export default Header
