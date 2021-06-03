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
export const getUni = (i) => {
    return client.get('/api/university/'+ i +'/')
        .then(res => {
            return res;
        }).catch(rematchError);
};

/**
 * Get all universities' details from API
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getUniAll = () => {
    return client.get('/api/university/')
        .then(res => {
            return res;
        }).catch(rematchError);
};

export const postReview = (form) => {
    return client.post('/api/review/', form)
        .then(res=> {
            return res;
        }).catch(rematchError);
};

/**
 * Performs a post request to search university by name
 * @returns {Promise<AxiosResponse<any>>}
 */
export const postSearchName = (name) => {
    return client.post('/api/search', {name:name})
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
    return client.post('/api/search', form)
        .then(res => {
            return res;
        }).catch(rematchError);
};
