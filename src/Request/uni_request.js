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
    return client.get("check")
        .then(res => {
            return res;
        }).catch(rematchError);
};