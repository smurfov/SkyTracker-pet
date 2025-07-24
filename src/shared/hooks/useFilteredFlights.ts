import type { IFLightData } from '@/services/external/aviation/aviation.types'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { useContext, useMemo } from 'react'
import { FilterContext } from '../providers/filter/filter.context'

export function useFilteredFlights(flights: IFLightData[]) {
	const { filter, setFilter } = useContext(FilterContext)
	const debouncedFilter = useDebounce(filter, 400)

	const filteredFlights = useMemo(() => {
		if (!debouncedFilter.trim()) return flights
		const searchLower = debouncedFilter.trim().toLowerCase()
		return flights.filter(flight => {
			const fromAirport = flight.departure.airport?.toLowerCase() || ''
			const toAirport = flight.arrival.airport?.toLowerCase() || ''
			const airlineName = flight.airline.name.toLowerCase()
			return (
				fromAirport.includes(searchLower) ||
				toAirport.includes(searchLower) ||
				airlineName.includes(searchLower)
			)
		})
	}, [debouncedFilter, flights])

	return { debouncedFilter, setFilter, filteredFlights }
}