import { useEffect, useRef, useState } from 'react'
import './LazyImage.css'

function LazyImage({ src, alt, className = '' }) {
	const [isVisible, setIsVisible] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const imgRef = useRef()

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1 }
		)

		if (imgRef.current) {
			observer.observe(imgRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const handleLoad = () => setIsLoaded(true)

	return (
		<img
			ref={imgRef}
			src={isVisible ? src : ''}
			alt={alt}
			onLoad={handleLoad}
			className={`${className} lazy-image ${isLoaded ? 'loaded' : ''}`}
			loading='lazy'
		/>
	)
}

export default LazyImage
