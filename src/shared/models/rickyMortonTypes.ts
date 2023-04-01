export type IPaginationInfo = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}

export type IOriginLocation = {
    name: string,
    url: string
}

export type ICharacterPayload = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: IOriginLocation,
    location: IOriginLocation,
    image: string,
    episode: string[],
    url: string,
    created: string,
    [key:string]: any
}

export type ILocationPayload = {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string,
    [key:string]: any
}

export type IEpisodePayload = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string,
    [key:string]: any
}