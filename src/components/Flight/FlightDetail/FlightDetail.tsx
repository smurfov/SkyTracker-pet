import darkIconPlane from '@/assets/dark plane ico.svg'
import iconPlane from '@/assets/plane icon.svg'
import { FLIGHTS } from '@/data/flights.data'
import { useAnimateProgress } from '@/shared/hooks/useAnimateProgress'
import { useFlightModal } from '@/shared/hooks/useFlightModal'
import { useTheme } from '@/shared/hooks/useTheme'
import { useEffect, useState } from 'react'
import { DetailsButtons } from './Details/Details.buttons'
import { DeatailsFlightInfo } from './Details/Details.flightInfo'
import { DetailsHeader } from './Details/Details.header'
import { DetailsRoute } from './Details/Details.route'
import './FlightDetail.scss'

export function FlightDetail() {
	const { isOpen, selectedFlight, closeModal } = useFlightModal()
	const [isVisible, setIsVisible] = useState<boolean>(isOpen)
	const { theme } = useTheme()

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true)
		}
	}, [isOpen])

	const handleClose = () => {
		setIsVisible(false)
		setTimeout(() => closeModal(), 1000)
	}

	const flight = FLIGHTS.find(f => f.airline.code === selectedFlight)

	const flightProgress = useAnimateProgress(flight?.progress)

	return (
		<div
			className={`flight-detail no-scrollbar ${
				selectedFlight && isVisible
					? 'flight-detail--visible'
					: 'flight-detail--hidden'
			}`}
		>
			{isOpen && (
				<>
					{/* Header */}
					<DetailsHeader
						airline={flight?.airline}
						airplane={flight?.airplane}
						color1={flight?.colorGradient[0]}
						color2={flight?.colorGradient[1]}
						handleClose={handleClose}
						move={isVisible}
					/>
					{/* Main */}
					<div className='flight-detail__main'>
						{/* Locations */}
						<DetailsRoute
							flightProgress={flightProgress}
							from={flight?.from}
							to={flight?.to}
							iconPlane={theme === 'dark' ? iconPlane : darkIconPlane}
							infoFrom={{
								distance: '2400',
								time: '3h 30m',
								scheduled: '08:35',
								actual: '08:40',
							}}
							infoTo={{
								distance: '500',
								time: '30m',
								scheduled: '12:35',
								estimated: '12:40',
							}}
						/>
						{/* Flight Info */}
						<DeatailsFlightInfo
							airplane={flight?.airplane.name}
							country={flight?.airline.country}
							flightInfo={flight?.route}
							isoCode={flight?.airline.isoCode}
						/>

						{/* Buttons */}
						<DetailsButtons />
					</div>
				</>
			)}
		</div>
	)
}
