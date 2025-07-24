import './Home.scss'
import { FlightDetail } from './Home/components/Flight/FlightDetail/FlightDetail'
import { FlightList } from './Home/components/Flight/FlightList/FlightList'
import { MapComponent } from './Home/components/Map/Map'

export default function Home() {
	return (
		<div className='home'>
			<div className='home__map'>
				<MapComponent />
			</div>
			<div className='home__content'>
				<FlightList />
				<FlightDetail />
			</div>
		</div>
	)
}
