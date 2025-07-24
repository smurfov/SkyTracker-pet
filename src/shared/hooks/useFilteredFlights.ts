import { FLIGHTS } from '@/data/flights.data'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { useContext, useMemo } from 'react'
import { FilterContext } from '../providers/filter/filter.context'

export function useFilteredFlights() {
	const { filter, setFilter } = useContext(FilterContext)
	const debouncedFilter = useDebounce(filter, 400)

	const flightsArray = useMemo(() => Object.values(FLIGHTS), [])

	const filteredFlights = useMemo(() => {
		if (!debouncedFilter.trim()) return flightsArray
		const searchLower = debouncedFilter.trim().toLowerCase()
		return flightsArray.filter(flight => {
			const fromCity = flight.from.city.toLowerCase()
			const fromCountry = flight.from.country.toLowerCase()
			const toCity = flight.to.city.toLowerCase()
			const toCountry = flight.to.country.toLowerCase()
			const airline = flight.airline.name.toLowerCase()
			return (
				fromCity.includes(searchLower) ||
				fromCountry.includes(searchLower) ||
				toCity.includes(searchLower) ||
				toCountry.includes(searchLower) ||
				airline.includes(searchLower)
			)
		})
	}, [debouncedFilter, flightsArray])

	return { debouncedFilter, setFilter, filteredFlights }
}
