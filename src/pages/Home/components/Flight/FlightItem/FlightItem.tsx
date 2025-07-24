import { AIRLINE_IMAGES } from '@/data/airlines-images.data'
import type { IFLightData } from '@/services/external/aviation/aviation.types'
import { useFlightModal } from '@/shared/hooks/useFlightModal'
import { FavoriteButton } from './FavoriteButton/FavoriteButton'
import './FlightItem.scss'

interface Props {
	flight: IFLightData
}

export function FlightItem({ flight }: Props) {
	// const [flightProgress, setFlightProgress] = useState<number>(flight.progress)
	const { selectedFlight, openModal } = useFlightModal()
	const isActive = selectedFlight === flight.flight.number
	// const { theme } = useTheme()
	// const flightProgress = useAnimateProgress(flight.progress)

	const images = AIRLINE_IMAGES.find(i => i.name === flight.airline.name)

	return (
		<div className={`flight__item ${isActive && 'active'}`}>
			{flight.aircraft?.registration && (
				<FavoriteButton flightId={flight.aircraft.registration} />
			)}
			<button
				className='flight__btn'
				onClick={() => {
					openModal(flight.flight.number)
					// localStorage.setItem('flightProgress', JSON.stringify(flightProgress))
				}}
			>
				{/* Top */}
				<div className='flight__top'>
					<div className='flight__logo-block'>
						<img
							className='flight__logo'
							src={images?.logo || ''}
							alt={flight.airline.name}
						/>
						<div className='flight__code'>{flight.aircraft?.registration}</div>
					</div>
					<div className='flight__reg-block'>
						<div className='flight__reg'>{flight.aircraft?.icao24}</div>
					</div>
				</div>
				{/* Bottom */}
				<div className='flight__bottom'>
					{/* From */}
					<div className='flight__from'>
						<div className='flight__city'>{flight.departure.icao}</div>
						<div className='flight__iata'>{flight.departure.iata}</div>
					</div>
					{/* Progress Bar */}
					{/* <div className='flight__progress-bar'>
						<div className='flight__progress-bg'>
							<div
								className='flight__progress'
								style={{ width: `${flightProgress}%` }}
							></div>
							<div
								className='flight__progress-rest'
								style={{ width: `${100 - flightProgress}%` }}
							></div>
							<img
								className='flight__plane'
								src={theme === 'dark' ? iconPlane : darkIconPlane}
								alt='plane icon'
								style={{ left: `${flightProgress + 1 || 1}%` }}
							/>
						</div>
					</div> */}
					{/* To */}
					<div className='flight__to'>
						<div className='flight__city flight__city--right'>
							{flight.arrival.icao}
						</div>
						<div className='flight__iata flight__iata--right'>
							{flight.arrival.iata}
						</div>
					</div>
				</div>
			</button>
		</div>
	)
}
