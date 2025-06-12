import { useState } from 'react'
import './ResetPassword.css'
import createRight from '../../assets/img/createRight.png'
import createLeft from '../../assets/img/createLeft.png'
import logInLeft from '../../assets/img/logInLeft.png'
import logInRight from '../../assets/img/logInRight.png'
import Cross from '../../assets/svg/Cross'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [emailSubmitted, setEmailSubmitted] = useState(false)
	const [isEmailValid, setIsEmailValid] = useState(true)

	const handleClick = () => {
		navigate('/')
	}

	const navigateLogIn = () => {
		navigate('/log-in')
	}

	const validateEmail = email => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(email)
	}

	const handleNextStep = () => {
		if (validateEmail(email)) {
			setIsEmailValid(true)
			setEmailSubmitted(true)
		} else {
			setIsEmailValid(false)
		}
	}

	return (
		<>
			<div className='resetPas'>
				<div className='wrapperResetPas'>
					<Cross className='cross' onClick={handleClick} />
					<div className='resetPasWrapper'>
						<div className='resetPasText'>
							<div className='resetPasTitle'>Reset Your Password</div>
							<div className='resetPasSubtitles'>
								Enter your email and we'll send you a code to create a new
								password for your Swipey account.
							</div>
						</div>
						<div className='resetPasContent'>
							<input
								className={`resetPasEmail ${!isEmailValid ? 'invalid' : ''}`}
								type='email'
								placeholder='Email'
								value={email}
								onChange={e => {
									setEmail(e.target.value)
									setIsEmailValid(true)
								}}
								disabled={emailSubmitted}
							/>

							<div className='resetPasButtons'>
								<abbr className='resetPasBtnSend' onClick={handleNextStep}>
									Send
								</abbr>
								<a className='resetPasBtnBack' onClick={navigateLogIn}>
									Back to Log In
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='logInImages'>
					<div className='logInRightImg'>
						<img src={logInRight} alt='girl' className='logInRightImage' />
						<img src={createRight} alt='girl' className='logInLeftImageMobil' />
					</div>
					<div className='logInLeftImg'>
						<img src={logInLeft} alt='girl' className='logInLeftImage' />
						<img src={createLeft} alt='girl' className='logInRightImageMobil' />
					</div>
				</div>
			</div>
		</>
	)
}

export default ResetPassword
