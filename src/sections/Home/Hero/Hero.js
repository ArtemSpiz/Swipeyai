import './Hero.css'
import heroGirl from '../../../assets/img/heroGirl.png'
import { useNavigate } from 'react-router-dom'
import HeroPencil from '../../../assets/svg/heroPencil'

function Hero() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/sign-up')
	}
	return (
		<>
			<div className='hero'>
				<div className='heroImage'>
					<img loading='lazy' decoding='async' src={heroGirl} alt='girl' />
				</div>
				<div className='heroRight'>
					<div className='heroRightTop'>
						<div className='heroSubtitle'>
							Create Your Perfect AI Girlfriend
						</div>
						<div className='heroTitle'>CREATE YOUR OWN AI SLUT</div>
					</div>
					<a className='heroBtn' href='/sign-up'>
						<HeroPencil className='HeroPencil' />
						Create My AI
					</a>
				</div>
			</div>
		</>
	)
}

export default Hero
