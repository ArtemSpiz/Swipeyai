import { useEffect, useState } from 'react'
import './CreateAccount.css'
import createRight from '../../assets/img/createRight.png'
import createLeft from '../../assets/img/createLeft.png'
import Cross from '../../assets/svg/Cross'
import coin from '../../assets/img/coin.png'
import Arrow from '../../assets/svg/Arrow'
import Eye from '../../assets/svg/Eye'
import { useNavigate } from 'react-router-dom'

function CreateAccount() {
	const navigate = useNavigate()

	const [step, setStep] = useState(1)
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
			setStep(2)
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

		const utm = JSON.parse(localStorage.getItem('utm_data') || '{}')

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
					...utm,
				}),
			})

			const data = await response.json()

			if (data.success && data.loginUrl) {
				const redirectUrl = new URL(data.loginUrl)

				window.location.href = redirectUrl.toString()
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
			<div className='createAccount'>
				<div className='wrapperSign'>
					<a href='/'>
						<Cross className='cross' onClick={handleClick} />
					</a>
					<div className='createWrapper'>
						<div className='createText'>
							<div className='createTitle'>Create your account</div>
							<div className='createSubtitles'>
								& Get 20{' '}
								<img
									loading='lazy'
									decoding='async'
									src={coin}
									alt='coin'
									className='coin'
								/>{' '}
								FREE To Unlock Spicy Videos
							</div>
						</div>

						<div className='createSteps'>Step {step} of 2</div>

						<div className='createButtons'>
							<input
								className={`createEmail ${!isEmailValid ? 'invalid' : ''}`}
								type='email'
								placeholder='Email'
								value={email}
								onChange={e => {
									setEmail(e.target.value)
									setIsEmailValid(true)
								}}
								disabled={emailSubmitted}
							/>

							{emailSubmitted && (
								<div className='createPasswordWrapper'>
									<input
										className='createPassword'
										type={showPassword ? 'text' : 'password'}
										placeholder='Password'
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>

									<Eye className='eye' onClick={togglePasswordVisibility} />
								</div>
							)}

							{emailSubmitted ? (
								<a className='createBtn' onClick={submitAccount}>
									Create Free Account
								</a>
							) : (
								<a className='createBtn' onClick={handleNextStep}>
									Next Step
								</a>
							)}
						</div>

						<div className='createTermOfService'>
							By signing up, you agree to
							<span className='createTermOfService2'>
								Term of Service & Privacy Policy
							</span>
						</div>

						<div className='createLogIn'>
							<div className='createAsk'>Already have an account?</div>
							<a
								className='createLogInBtn'
								href='http://swipey.ai/?open_modal=sign-in'
								target='_blank'
								rel='noopener noreferrer'
							>
								Log in <Arrow />
							</a>
						</div>
					</div>
				</div>

				<div className='createImages'>
					<div className='createRightImg'>
						<img
							loading='lazy'
							decoding='async'
							src={createRight}
							alt='girl'
							className='createRightImage'
						/>
					</div>
					<div className='createLeftImg'>
						<img
							loading='lazy'
							decoding='async'
							src={createLeft}
							alt='girl'
							className='createLeftImage'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateAccount
