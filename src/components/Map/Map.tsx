import { FLIGHTS } from '@/data/fligths.data'
import { useFlightModal } from '@/shared/hooks/useFlightModal'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet'

export function MapComponent() {
	const { selectedFlight } = useFlightModal()
	const activeFlight = FLIGHTS.find(f => f.airline.code === selectedFlight)

	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={3}
			style={{ height: '100%', width: '100%' }}
		>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			{activeFlight && (
				<>
					<Marker position={activeFlight.from.coordinates} />
					<Marker position={activeFlight.to.coordinates} />
					<Polyline
						positions={[
							activeFlight.from.coordinates,
							activeFlight.to.coordinates,
						]}
						color='blue'
					/>
				</>
			)}
		</MapContainer>
	)
}
