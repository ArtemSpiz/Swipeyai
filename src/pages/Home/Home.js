import Hero from '../../sections/Home/Hero/Hero'
import Explore from '../../sections/Home/Explore/Explore'

import './Home.css'
function Home() {
	return (
		<>
			<div className='Home'>
				<Hero />
				<Explore />
				<Hero />
			</div>
		</>
	)
}

export default Home
