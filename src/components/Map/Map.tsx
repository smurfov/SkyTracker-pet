import darkPlaneIcon from '@/assets/dark plane ico.svg'
import MapPlaceholder from '@/assets/MapPlaceholder.png'
import lightPlaneIcon from '@/assets/plane icon.svg'
import { FLIGHTS } from '@/data/flights.data'
import { useAnimateProgress } from '@/shared/hooks/useAnimateProgress'
import { useFlightModal } from '@/shared/hooks/useFlightModal'
import { useTheme } from '@/shared/hooks/useTheme'
import { type IFlight } from '@/shared/types/flight.types'
import { type LatLngExpression, divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import {
	MapContainer,
	Marker,
	Polyline,
	TileLayer,
	useMap,
} from 'react-leaflet'
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader'

// Updates the map view when a flight is selected
const MapUpdater = ({
	activeFlight,
}: {
	activeFlight: IFlight | undefined
}) => {
	const map = useMap()

	useEffect(() => {
		if (activeFlight) {
			const centerRoute: LatLngExpression = [
				(activeFlight.from.coordinates[0] + activeFlight.to.coordinates[0]) / 2,
				(activeFlight.from.coordinates[1] + activeFlight.to.coordinates[1]) / 2,
			]
			const zoom = 5
			map.setView(centerRoute, zoom)
		}
	}, [activeFlight, map])

	return null
}

// Component for a single flight (marker and route)
const FlightOnMap = ({
	flight,
	isSelected,
}: {
	flight: IFlight
	isSelected: boolean
}) => {
	const { theme } = useTheme()
	const { openModal } = useFlightModal()
	const progress = useAnimateProgress(flight.progress)

	const from = flight.from.coordinates
	const to = flight.to.coordinates

	// Calculate bearing for rotation
	const lat1 = from[0] * (Math.PI / 180)
	const lat2 = to[0] * (Math.PI / 180)
	const lonDiff = (to[1] - from[1]) * (Math.PI / 180)
	const y = Math.sin(lonDiff) * Math.cos(lat2)
	const x =
		Math.cos(lat1) * Math.sin(lat2) -
		Math.sin(lat1) * Math.cos(lat2) * Math.cos(lonDiff)
	const bearing = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360
	const rotationAngle = bearing

	const planeIconUrl = theme === 'dark' ? lightPlaneIcon : darkPlaneIcon

	const planeCustomIcon = divIcon({
		className: 'custom-plane-icon',
		html: `<img src="${planeIconUrl}" style="transform: rotate(${
			rotationAngle - 70
		}deg); opacity: ${isSelected ? 1 : 0.4};" width="35" height="35">`,
		iconSize: [35, 35],
	})

	const currentPosition: LatLngExpression = [
		from[0] + ((to[0] - from[0]) * progress) / 100,
		from[1] + ((to[1] - from[1]) * progress) / 100,
	]

	return (
		<>
			<Marker
				position={currentPosition}
				icon={planeCustomIcon}
				eventHandlers={{
					click: () => {
						openModal(flight.airline.code)
					},
				}}
			/>
			{isSelected && (
				<>
					{/* Completed part of the route */}
					<Polyline
						positions={[from, currentPosition]}
						color='#00aaff'
						weight={3}
					/>
					{/* Remaining part of the route */}
					<Polyline
						positions={[currentPosition, to]}
						color='#00aaff'
						dashArray='5, 10'
						weight={2}
						opacity={0.7}
					/>
				</>
			)}
		</>
	)
}

// Main Map Component
export function MapComponent() {
	const { selectedFlight } = useFlightModal()
	const { theme } = useTheme()
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	const activeFlight = FLIGHTS.find(f => f.airline.code === selectedFlight)

	const initialCenter: LatLngExpression = [51.505, -0.09]
	const initialZoom = 3

	const tileUrl =
		theme === 'dark'
			? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
			: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

	if (isError) {
		return (
			<div className='map-error-fallback'>
				<img src={MapPlaceholder} alt='Map failed to load' />
				<p>Could not load map data. Please try again later.</p>
			</div>
		)
	}

	return (
		<div style={{ height: '100%', width: '100%', position: 'relative' }}>
			{isLoading && (
				<SkeletonLoader
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						height: '100%',
						width: '100%',
						zIndex: 1000,
					}}
				/>
			)}
			<MapContainer
				center={initialCenter}
				zoom={initialZoom}
				style={{ height: '100%', width: '100%' }}
				whenReady={() => setIsLoading(false)}
			>
				<MapUpdater activeFlight={activeFlight} />
				<TileLayer
					url={tileUrl}
					eventHandlers={{
						tileerror: () => {
							setIsLoading(false)
							setIsError(true)
						},
					}}
				/>

				{FLIGHTS.map(flight => (
					<FlightOnMap
						key={flight.airline.code}
						flight={flight}
						isSelected={flight.airline.code === selectedFlight}
					/>
				))}
			</MapContainer>
		</div>
	)
}
