import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Preserver = () => {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const params = new URLSearchParams(location.search)

		const hasUPM = params.has('upm') || params.has('utm_source')

		if (hasUPM) {
			localStorage.setItem('savedQuery', location.search)
		} else {
			const saved = localStorage.getItem('savedQuery')
			if (saved && location.search === '') {
				navigate(`${location.pathname}${saved}`, { replace: true })
			}
		}
	}, [location, navigate])

	return null
}

export default Preserver
