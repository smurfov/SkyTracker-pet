import { useEffect, useRef, useState } from 'react'

const FLIGHT_DURATION = 100000

export function useAnimateProgress(initialProgress: number | undefined) {
	const [flightProgress, setFlightProgress] = useState(initialProgress || 0)
	const animationFrameId = useRef<number>()
	const startTime = useRef<number>()

	useEffect(() => {
		if (initialProgress === undefined) {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
			setFlightProgress(0)
			return
		}

		setFlightProgress(initialProgress)
		startTime.current = undefined

		const animate = (timestamp: number) => {
			if (startTime.current === undefined) {
				startTime.current =
					timestamp - (initialProgress / 100) * FLIGHT_DURATION
			}

			const elapsedTime = timestamp - startTime.current
			let newProgress = (elapsedTime / FLIGHT_DURATION) * 100

			if (newProgress >= 100) {
				newProgress = 0
				startTime.current = timestamp
			}

			setFlightProgress(newProgress)
			animationFrameId.current = requestAnimationFrame(animate)
		}

		animationFrameId.current = requestAnimationFrame(animate)

		return () => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
		}
	}, [initialProgress])

	return flightProgress
}
