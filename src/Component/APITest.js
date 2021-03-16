import React, {useState} from "react";
import {getHealthCheck} from "../Request/uni_request";
import {getDefaultErrorMessage} from "../Request/error_handling";
import {Typography} from "@material-ui/core";

/**
 * A component used to test the connectivity with the API
 */
export default function TestApi () {
    const [message, setMessage] = useState([]);

    getHealthCheck().then(res => {
        setMessage(res.data);
    }).catch( err => {
        console.log(getDefaultErrorMessage(err));
    });

    return (
        <Typography>
            Server says : &quot;{message.message}&quot;
        </Typography>
    );
}