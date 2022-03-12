import type Player from '../@types/Player'
import { combine } from 'zustand/middleware'
import create from 'zustand'
import { DEFAULT_DURATION } from '../const'
import { getPlaceList } from '../services/roles'
import { nanoid } from 'nanoid'

const useStore = create(
	combine(
		{
			players: [] as Player[],
			place: '',
			location: '',
			duration: DEFAULT_DURATION,
		},
		(set, get) => ({
			joinGame: (name: string) => {
				const newPlayer: Player = { name, id: nanoid() }
				set({ players: [...get().players, newPlayer] })
			},
			leaveGame: (id: string) => {
				set({ players: get().players.filter(p => p.id != id) })
			},
			getPlace: () => {
				const placeList = getPlaceList()
				const place = placeList[Math.floor(Math.random() * placeList.length)]
				set({ place })
			}
		})
	)
)

export default useStore