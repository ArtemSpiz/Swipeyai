// utils/utm.js

export const saveUTMParams = () => {
	const params = new URLSearchParams(window.location.search)
	params.forEach((value, key) => {
		if (key.startsWith('utm_') || key.startsWith('sub') || key === 'ref_id') {
			localStorage.setItem(key, value)
		}
	})
}

export const getUTMParams = () => {
	const result = {}
	Object.keys(localStorage).forEach(key => {
		if (key.startsWith('utm_') || key.startsWith('sub') || key === 'ref_id') {
			result[key] = localStorage.getItem(key)
		}
	})
	return result
}
