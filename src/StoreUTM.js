import { useEffect } from 'react'

function StoreUTM() {
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const utmParams = {}
		for (const [key, value] of params.entries()) {
			if (key.startsWith('utm_') || key.startsWith('sub') || key === 'ref_id') {
				utmParams[key] = value
			}
		}
		if (Object.keys(utmParams).length > 0) {
			localStorage.setItem('utm_data', JSON.stringify(utmParams))
		}
	}, [])

	return null
}

export default StoreUTM
