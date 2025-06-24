import './Header.css'
import logo from '../../assets/img/logo.png'
import LazyImage from '../../LazyImage'

function Header() {
	return (
		<>
			<div className='header'>
				<div className='header-logo'>
					<LazyImage src={logo} alt='logo' loading='lazy' decoding='async' />
				</div>
			</div>
		</>
	)
}

export default Header
