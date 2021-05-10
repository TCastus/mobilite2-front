import React from "react";
import {Marker, Popup} from "react-leaflet";
import PropTypes from "prop-types";
import {divIcon} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';


UniMarker.propTypes = {
    key: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,

};

function UniMarker ({key, latitude, longitude}) {

    const handleClick = event => {
        let id = {key};
    };
    const iconMarkup = renderToStaticMarkup(<i className="./../Assets/images/marker-icon-2x.png" />);
    const customMarkerIcon = divIcon({
        //iconUrl: require('./../Assets/images/marker-icon-2x.png'),
        html: iconMarkup,
    });



    return(
        (<>

            <Marker id = {key} icon={customMarkerIcon} position= {[parseFloat(latitude), parseFloat(longitude)]} onClick={handleClick}>
                <Popup>
                    {key}
                </Popup>
            </Marker>
        </>));
}

export default UniMarker;
