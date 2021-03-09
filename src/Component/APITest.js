import React from "react";
import {getHealthCheck} from "../Request/uni_request";
import {getDefaultErrorMessage} from "../Request/error_handling";
import {Typography} from "@material-ui/core";

/**
 * A component used to test the connectivity with the API
 */
/* test */
export default class TestApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        };
    }

    componentDidMount() {
        getHealthCheck().then(res => {
            const message = res.data;
            this.setState({message});
        }).catch( err => {
            console.log(getDefaultErrorMessage(err));
        });
    }

    render() {
        return (
            <Typography>
                Server says : &quot;{this.state.message.message}&quot;
            </Typography>
        );
    }

}