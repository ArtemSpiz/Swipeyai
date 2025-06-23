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
								<a className='resetPasBtnSend' onClick={handleNextStep}>
									Send
								</a>
								<a className='resetPasBtnBack' href='/log-in'>
									Back to Log In
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

export default ResetPassword
