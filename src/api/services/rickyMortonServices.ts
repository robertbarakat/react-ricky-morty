import { ICharacterPayload, IEpisodePayload, ILocationPayload, IPaginationInfo } from '../../shared/models';
import axiosInstance from '../interceptors/rickyMortonApi';

/**
 * Services for Ricky And Morton API
 * @summary Collection of endpoints for the Ricky and Morton API
 */

export const getRickyMortonCharacters = (page?:number) => {
    return axiosInstance.get(`/character/?page=${page || '1'}`).then((res) => {
        const results:ICharacterPayload[] = res.data.results;
        const info: IPaginationInfo = res.data.info;
        return { results, info };
    });
};

export const getRickyMortonLocation = () => {
    return axiosInstance.get('/location').then((res) => {
        const results:ILocationPayload[] = res.data.results;
        const info: IPaginationInfo = res.data.info;
        return { results, info };
    });
};

export const getRickyMortonEpisode = () => {
    return axiosInstance.get('/episode').then((res) => {
        const results:IEpisodePayload[] = res.data.results;
        const info: IPaginationInfo = res.data.info;
        return { results, info };
    });
};