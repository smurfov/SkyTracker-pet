import axios from 'axios'
import type {
	IFetchFlightParams,
	IFetchFlightsResponse,
} from './aviation.types'

class AviationService {
	private apiUrl: string
	private apiToken: string

	constructor() {
		this.apiUrl = import.meta.env.VITE_API_URL
		this.apiToken = import.meta.env.VITE_API_TOKEN
	}

	async fetchFlights({ limit = 10, offset }: IFetchFlightParams) {
		try {
			const params = {
				access_key: this.apiToken,
				limit,
				offset,
			}

			const response = await axios.get<IFetchFlightsResponse>(
				`${this.apiUrl}/flights`,
				{ params }
			)
			return response.data
		} catch (error) {
			console.error('Ошибка при получении списка рейсов:', error)
			throw error
		}
	}
}

export default new AviationService()
