function Cross({ onClick, className }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			className={className}
			onClick={onClick}
		>
			<path
				d='M11.3333 4.6665L4.66666 11.3332M4.66666 4.6665L11.3333 11.3332'
				stroke='#1D1327'
				stroke-width='1.2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default Cross
