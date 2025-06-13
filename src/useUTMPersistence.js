import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const UTM_KEYS = [
	'utm_source',
	'utm_medium',
	'utm_campaign',
	'utm_term',
	'utm_content',
]

function getUTMParams(search) {
	const params = new URLSearchParams(search)
	let utms = {}

	UTM_KEYS.forEach(key => {
		if (params.has(key)) {
			utms[key] = params.get(key)
		}
	})

	return utms
}

export default function useUTMPersistence() {
	const location = useLocation()

	useEffect(() => {
		const currentUTMs = getUTMParams(location.search)
		if (Object.keys(currentUTMs).length > 0) {
			// Зберігаємо UTM, тільки якщо ще не збережені
			const stored = localStorage.getItem('utm_data')
			if (!stored) {
				localStorage.setItem('utm_data', JSON.stringify(currentUTMs))
			}
		}
	}, [location.search])
}
