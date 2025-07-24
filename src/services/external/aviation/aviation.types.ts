export interface IFetchFlightParams {
	limit?: number
	offset?: number
}

export interface IAirportInfo {
	airport: string
	timezone: string
	iata: string
	icao: string
	terminal: string | null
	gate: string | null
	delay: number | null
	scheduled: string
	estimated: string
	actual: string | null
	estimated_runway: string | null
	actual_runway: string | null
	baggage?: string | null
}

export interface IAirline {
	name: string
	iata: string
	icao: string
}

export interface IFlight {
	number: string
	iata: string
	icao: string
}

export interface IAircraft {
	registration: string
	iata: string
	icao: string
	icao24: string
}

export interface ILive {
	updated: string
	latitude: number
	longitude: number
	altitude: number
	direction: number
	speed_horizontal: number
	speed_vertical: number
	is_ground: boolean
}

export interface IFLightData {
	flight_data: string
	flight_status: string
	departure: IAirportInfo
	arrival: IAirportInfo
	flight: IFlight
	airline: IAirline
	aircraft: IAircraft | null
	live: ILive | null
}

export interface IFetchFlightsResponse {
	data: IFLightData[] | undefined
}
