import { EPISODE_BASE_URL, LOCATION_BASE_URL } from "../constants"

// Methods to extract the location and episodes ID from an url string
export const getLocationId = (str:string) => str.slice(LOCATION_BASE_URL.length)
export const getEpisodeId = (str:string) => str.slice(EPISODE_BASE_URL.length)