import { type IFlight } from '@/shared/types/flight.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://opensky-network.org/api'

// https://openskynetwork.github.io/opensky-api/rest.html#all-state-vectors
type TStateVector = [
	string, // 0 icao24
	string, // 1 callsign
	string, // 2 origin_country
	number, // 3 time_position
	number, // 4 last_contact
	number, // 5 longitude
	number, // 6 latitude
	number, // 7 baro_altitude
	boolean, // 8 on_ground
	number, // 9 velocity
	number, // 10 true_track
	number, // 11 vertical_rate
	number[], // 12 sensors
	number, // 13 geo_altitude
	string, // 14 squawk
	boolean, // 15 spi
	number // 16 position_source
]

interface IServerResponse {
	time: number
	states: TStateVector[]
}

export const openskyApi = createApi({
	reducerPath: 'openskyApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: builder => ({
		getAllStateVectors: builder.query<IFlight[], void>({
			query: () => '/states/all',
			transformResponse: (response: IServerResponse) => {
				if (!response || !response.states) {
					return []
				}
				return response.states.slice(0, 20).map(flight => ({
					id: flight[0] || 'N/A',
					callsign: flight[1] || 'N/A',
					originCountry: flight[2] || 'N/A',
					from: {
						city: flight[2] || 'Unknown',
						country: flight[2] || 'Unknown',
					},
					to: { city: 'Unknown', country: 'Unknown' },
					airline: { name: 'Unknown', logo: '' },
					departureTime: new Date(flight[3] * 1000).toLocaleTimeString(),
					arrivalTime: new Date(flight[4] * 1000).toLocaleTimeString(),
					status: 'In flight',
					progress: Math.floor(Math.random() * 100),
					isFavorite: false,
				}))
			},
		}),
	}),
})

export const { useGetAllStateVectorsQuery } = openskyApi
