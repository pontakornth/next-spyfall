import roles from '../data/roles.json'
/**
 * Return list of available place
 * @returns 
 */
export function getPlaceList(): string[] {
	return Object.keys(roles)
}

/**
 * Return list of role in the given place.
 * @returns list of role in the given place.
 */
export function getRoleListFromPlace(place: string): string[] {
	if (place in roles) {
		// TODO: Remove any
		return (roles as any)[place]
	}
	return []
}