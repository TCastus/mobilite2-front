import axios from "axios";
import config from "../config.json";
import {rematchError} from "./error_handling";
import {Typography} from "@material-ui/core";
import React from "react";

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

export const getUni = (i) => {
    let path = '/api/university/';
    let path2 = path.replace('/university/', '/university/'+ i +'/');
    return client.get(path2)
        .then(res => {
            return res;
        }).catch(rematchError);
};

export const getUniAll = () => {
    return client.get('/api/university/')
        .then(res => {
            return res;
        }).catch(rematchError);
};

