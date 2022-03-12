// Inspired by the original Spyfall const.js
export const SPY_ROLE = 'spy'
export const SPY_LOCATION = '???'
export const MIN_PLAYER = 3
export const MAX_PLAYER = 10
export const DEFAULT_DURATION = 60 * 6
export type GAME_STATES = 'STARTED' | 'STOPPED'
export const GAME_STATES = {
	STARTED: 'STARTED' as GAME_STATES,
	STOPPED: 'STOPPED' as GAME_STATES
}