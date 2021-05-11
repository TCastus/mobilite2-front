import React from "react";
import {Marker, Popup, Circle} from "react-leaflet";
import PropTypes from "prop-types";
import {divIcon} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';
import {Redirect} from 'react-router-dom';
import img from "./../Assets/images/marker-icon-2x.png";
import {Button} from "@material-ui/core";


UniMarker.propTypes = {
    key: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,

};

function UniMarker ({key, latitude, longitude}) {


    return(
        (<>

            <Circle  radius={700} center= {[parseFloat(latitude), parseFloat(longitude)]}>
                <Popup minWidth='400px' minLength='700px' maxWidth='400px' maxLength={'700px'} >
                    <Button href='UniDetail' >
                        Name: {key}
                    </Button>
                </Popup>
            </Circle>


        </>));
}

export default UniMarker;
