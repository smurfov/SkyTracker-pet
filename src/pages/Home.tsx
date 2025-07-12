import { FlightDetail } from '../components/Flight/FlightDetail/FlightDetail'
import { FlightList } from '../components/Flight/FlightList/FlightList'

export function Home() {
	return (
		<div>
			<FlightList />
			<FlightDetail />
		</div>
	)
}
