import { useEffect, useState } from 'react'

export function useAnimateProgress(progress: number | undefined) {
	const [flightProgress, setFlightProgress] = useState(progress)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setFlightProgress(progress => {
				const newProgress = progress ? progress + 1 : 0
				if (newProgress >= 100) {
					clearInterval(intervalId)
					return 100
				} else {
					return newProgress
				}
			})
		}, 500)

		return () => clearInterval(intervalId)
	}, [])

	return flightProgress
}
