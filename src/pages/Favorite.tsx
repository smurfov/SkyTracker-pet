import { FlightItem } from '@/components/Flight/FlightItem/FlightItem'
import { FLIGHTS } from '@/data/fligths.data'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { useMemo } from 'react'
import './Favorite.scss'

export function Favorite() {
	const favorites = useAppSelector(state => state.favorites)

	const flights = useMemo(() => {
		return FLIGHTS.filter(flight => favorites.includes(flight.aircraftReg))
	}, [favorites])

	return (
		<div className='favorite'>
			<h1 className='favorite__title'>Favorite</h1>
			<p className='favorite__text'>
				There YOU can all flight which YOU add in favorites
			</p>
			<div className='favorite__list'>
				{flights.map((flight, index) => (
					<FlightItem key={index} flight={flight} />
				))}
			</div>
		</div>
	)
}
