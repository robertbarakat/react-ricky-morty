import { ICharacterPayload, IEpisodePayload, ILocationPayload, IPaginationInfo } from '../../shared/models';
import axiosInstance from '../interceptors/rickyMortonApi';

/**
 * Services for Ricky And Morton API
 * @summary Collection of endpoints for the Ricky and Morton API
 */

// GET paginated Ricky and Morton Characters
export const getRickyMortonCharacters = (page?:number) => {
    return axiosInstance.get(`/character/?page=${page || '1'}`).then(({data}) => {
        const results:ICharacterPayload[] = data.results;
        const info: IPaginationInfo = data.info;
        return { results, info };
    });
};


// GET Ricky and Morton Location by ID
export const getRickyMortonLocationById = (id:string) => {
    return axiosInstance.get(`/location/${id}`).then(({data}) => {
        return data as ILocationPayload;
    });
};


// GET Ricky and Morton Episodes by IDs
export const getRickyMortonEpisodeById = (ids:string[]) => {
    return axiosInstance.get(`/episode/${ids}`).then(({data}) => {
        return data as IEpisodePayload | IEpisodePayload[];
    });
};