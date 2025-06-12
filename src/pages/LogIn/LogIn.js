import { useState } from 'react'
import './LogIn.css'
import createRight from '../../assets/img/createRight.png'
import createLeft from '../../assets/img/createLeft.png'
import logInLeft from '../../assets/img/logInLeft.png'
import logInRight from '../../assets/img/logInRight.png'
import Cross from '../../assets/svg/Cross'
import Arrow from '../../assets/svg/Arrow'
import Eye from '../../assets/svg/Eye'
import logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'

function LogIn() {
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [emailSubmitted, setEmailSubmitted] = useState(false)
	const [isEmailValid, setIsEmailValid] = useState(true)
	const [showPassword, setShowPassword] = useState(false)
	const [password, setPassword] = useState('')

	const handleClick = () => {
		navigate('/')
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

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev)
	}

	return (
		<>
			<div className='logInAccount'>
				<div className='wrapperLogIn'>
					<Cross className='cross' onClick={handleClick} />
					<div className='logInWrapper'>
						<div className='logInText'>
							<div className='logInTitle'>Log In</div>
							<div className='logInSubtitles'>
								to <img src={logo} alt='logo' className='logInLogo' />
							</div>
						</div>
						<div className='logInContent'>
							<div className='logInButtons'>
								<input
									className={`logInEmail ${!isEmailValid ? 'invalid' : ''}`}
									type='email'
									placeholder='Email'
									value={email}
									onChange={e => {
										setEmail(e.target.value)
										setIsEmailValid(true)
									}}
									disabled={emailSubmitted}
								/>

								<div className='logInPasswordWrapper'>
									<input
										className='logInPassword'
										type={showPassword ? 'text' : 'password'}
										placeholder='Password'
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>

									<Eye className='eye' onClick={togglePasswordVisibility} />
								</div>

								<a href='/reset-password' className='logInForgot'>
									Forgot Password?
								</a>
							</div>

							<button className='logInBtn' onClick={handleNextStep}>
								Log In
							</button>

							<div className='logInLogIn'>
								<div className='logInAsk'>Don’t have an account yet?</div>
								<a className='logInSignUpBtn' href='/sign-up'>
									Sign Up <Arrow />
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

export default LogIn
