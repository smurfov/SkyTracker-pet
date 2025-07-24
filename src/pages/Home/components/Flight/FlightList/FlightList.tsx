import aviationService from '@/services/external/aviation/aviation.service'
import { useFilteredFlights } from '@/shared/hooks/useFilteredFlights'
import { useQuery } from '@tanstack/react-query'
import { SkeletonLoader } from '../../SkeletonLoader/SkeletonLoader'
import { FlightItem } from '../FlightItem/FlightItem'
import './FlightList.scss'

export function FlightList() {
	const { data, isPending } = useQuery({
		queryKey: ['flights'],
		queryFn: () => aviationService.fetchFlights({}),
	})

	const { filteredFlights } = useFilteredFlights(data?.data || [])

	return (
		<div className='flight__list no-scrollbar'>
			{isPending ? (
				<SkeletonLoader count={10} />
			) : (
				!!filteredFlights.length &&
				filteredFlights.map(flight => (
					<FlightItem key={flight.flight.iata} flight={flight} />
				))
			)}
		</div>
	)
}
