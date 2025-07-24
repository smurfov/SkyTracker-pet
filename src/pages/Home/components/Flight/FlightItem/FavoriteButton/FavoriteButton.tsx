import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { addFavorite, removeFavorite } from '@/store/favorites/favorites.slice'
import { StarIcon } from '@heroicons/react/24/solid'
import './FavoriteButton.scss'

interface Props {
	flightId: string
}

export function FavoriteButton({ flightId }: Props) {
	const dispatch = useAppDispatch()
	const favorites = useAppSelector(state => state.favorites)
	const isFavorite = favorites.includes(flightId)

	const handleToggleFavorite = () => {
		if (isFavorite) {
			dispatch(removeFavorite(flightId))
		} else {
			dispatch(addFavorite(flightId))
		}
	}

	return (
		<button
			className={`favorite-button ${isFavorite ? 'active' : ''}`}
			onClick={() => {
				handleToggleFavorite()
			}}
		>
			<StarIcon />
		</button>
	)
}
