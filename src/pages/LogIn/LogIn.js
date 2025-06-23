import { useEffect, useState } from 'react'
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
			submitAccount()
		} else {
			setIsEmailValid(false)
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev)
	}

	const getClickIdFromCookies = () => {
		const match = document.cookie.match(/rtkclickid-store=([^;]+)/)
		return match ? match[1] : null
	}

	const submitAccount = async () => {
		const clickId = getClickIdFromCookies()
		if (!clickId) {
			alert('Click ID not found in cookies.')
			return
		}

		try {
			const response = await fetch('https://swipey.ai/api/v1/auth/pre-lander', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': '3b6b40c8-8b6d-4094-8e67-93fc80ae99cb',
				},
				body: JSON.stringify({
					email,
					password,
					clickId,
				}),
			})

			const data = await response.json()

			if (data.success && data.loginUrl) {
				const utmParams = new URLSearchParams(window.location.search)
				const redirectUrl = data.loginUrl + '&' + utmParams.toString()
				window.location.href = redirectUrl
			} else {
				alert(data.message || 'Something went wrong.')
			}
		} catch (error) {
			console.error('API error:', error)
			alert('Failed to create account.')
		}
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
								to{' '}
								<img
									loading='lazy'
									decoding='async'
									src={logo}
									alt='logo'
									className='logInLogo'
								/>
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

							<a className='logInBtn' onClick={handleNextStep}>
								Log In
							</a>

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
						<img
							loading='lazy'
							decoding='async'
							src={logInRight}
							alt='girl'
							className='logInRightImage'
						/>
						<img
							loading='lazy'
							decoding='async'
							src={createRight}
							alt='girl'
							className='logInLeftImageMobil'
						/>
					</div>
					<div className='logInLeftImg'>
						<img
							loading='lazy'
							decoding='async'
							src={logInLeft}
							alt='girl'
							className='logInLeftImage'
						/>
						<img
							loading='lazy'
							decoding='async'
							src={createLeft}
							alt='girl'
							className='logInRightImageMobil'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default LogIn
