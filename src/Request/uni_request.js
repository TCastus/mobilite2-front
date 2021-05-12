import axios from "axios";
import config from "../config.json";
import {rematchError} from "./error_handling";

/**
 * Prepare the request with the address and headers
 * @type {AxiosInstance}
 */
const client = axios.create({
    // use production URL for the built (production) version, otherwise, use localhost
    // use prod anyways if config says so
    baseURL: process.env.NODE_ENV==="production" || config.ALWAYS_USE_PROD ? config.API_PROD : config.API_DEV
});

/**
 * API Test function
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getHealthCheck = () => {
    return client.get("api/check")
        .then(res => {
            return res;
        }).catch(rematchError);
};

/**
 * Get university detail from API
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getUni = () => {
    return client.get('/api/university/1/')
        .then(res => {
            return res;
        }).catch(rematchError);
};

/**
 * Performs a get request to search university by name
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getSearchName = (name) => {
    return client.get('/api/university/search?name='+name)
        .then(res => {
            return res;
        }).catch(rematchError);
};

/**
 * Use API advanced search form to retrieve selected universities
 * @param form
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getSearchAdvance = (form) => {
    return client.post('/api/university/search', form)
        .then(res => {
            return res;
        }).catch(rematchError);
};