import './Explore.css'
import checkMark from '../../../assets/img/checkMark.png'
import Fire from '../../../assets/img/fire.png'
import girlImg1 from '../../../assets/img/girlImage1.png'
import girlImg2 from '../../../assets/img/girlImage2.png'
import girlImg3 from '../../../assets/img/girlImage3.png'
import girlImg4 from '../../../assets/img/girlImage4.png'
import girlImg5 from '../../../assets/img/girlImage5.png'
import girlImg6 from '../../../assets/img/girlImage6.png'
import girlImg7 from '../../../assets/img/girlImage7.png'
import girlImg8 from '../../../assets/img/girlImage8.png'
import girlImg9 from '../../../assets/img/girlImage9.png'
import girlImg10 from '../../../assets/img/girlImage10.png'
import girlImg11 from '../../../assets/img/girlImage11.png'
import girlImg12 from '../../../assets/img/girlImage12.png'

import { useNavigate } from 'react-router-dom'

const girlsCard = [
	{
		image: girlImg1,
		name: 'Mai',
		age: '22',
		checkMark: true,
	},
	{
		image: girlImg2,
		name: 'Imani',
		age: '26',
		checkMark: true,
	},
	{
		image: girlImg3,
		name: 'Olivia',
		age: '24',
		checkMark: false,
	},
	{
		image: girlImg4,
		name: 'Valentina',
		age: '23',
		checkMark: true,
	},
	{
		image: girlImg5,
		name: 'Mai',
		age: '32',
		checkMark: false,
	},
	{
		image: girlImg6,
		name: 'Mary',
		age: '35',
		checkMark: false,
	},
	{
		image: girlImg7,
		name: 'Olivia',
		age: '27',
		checkMark: false,
	},
	{
		image: girlImg8,
		name: 'SoyToress',
		age: '30',
		checkMark: true,
	},
	{
		image: girlImg9,
		name: 'Nastia',
		age: '25',
		checkMark: false,
	},
	{
		image: girlImg10,
		name: 'Elle',
		age: '20',
		checkMark: true,
	},
	{
		image: girlImg11,
		name: 'Caroline',
		age: '26',
		checkMark: true,
	},
	{
		image: girlImg12,
		name: 'Valentina',
		age: '23',
		checkMark: true,
	},
]

function Explore() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/sign-up')
	}
	return (
		<>
			<div className='explore'>
				<div className='exploreTitle'>
					<span className='exploreTitle2'>Explore</span> AI Girls
				</div>

				<div className='exploreGirlsCard'>
					{girlsCard.map((girl, index) => (
						<div
							key={index}
							style={{ backgroundImage: `url(${girl.image})` }}
							className='girlCard'
							onClick={handleClick}
						>
							<div className='girlCardFire'>
								<img
									loading='lazy'
									decoding='async'
									src={Fire}
									alt='fire'
									className='fire'
								/>
							</div>

							<div className='girlInfo'>
								<div className='girlText'>
									<div className='girlName'>{girl.name},</div>
									<div className='girlAge'>{girl.age}</div>
								</div>
								{girl.checkMark && (
									<img
										loading='lazy'
										decoding='async'
										src={checkMark}
										alt='verified'
										className='checkMark'
									/>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Explore
