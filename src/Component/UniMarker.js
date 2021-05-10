import React from "react";
import {Marker, Popup} from "react-leaflet";
import PropTypes from "prop-types";
import {divIcon} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';
import {Redirect} from 'react-router-dom';

UniMarker.propTypes = {
    key: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,

};

function UniMarker ({key, latitude, longitude}) {


    const direct = (event) => {
        return <Redirect from="/" to="./Experience"/>;
    };

    const iconMarkup = renderToStaticMarkup(<i className="./../Assets/images/marker-icon-2x.png" />);
    const customMarkerIcon = divIcon({
        //iconUrl: require('./../Assets/images/marker-icon-2x.png'),
        html: iconMarkup,
    });



    return(
        (<>

            <Marker onClick={direct} id = {key} icon={customMarkerIcon} position= {[parseFloat(latitude), parseFloat(longitude)]}>
                <Popup>
                    {key}
                </Popup>
            </Marker>
        </>));
}


export default UniMarker;
