import { MapComponent } from '@/components/Map/Map'
import { FlightDetail } from '../components/Flight/FlightDetail/FlightDetail'
import { FlightList } from '../components/Flight/FlightList/FlightList'
import './Home.scss'

export function Home() {
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
