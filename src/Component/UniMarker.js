import React from "react";
import {Marker, Popup} from "react-leaflet";
import PropTypes from "prop-types";

UniMarker.propTypes = {
    key: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,

};

function UniMarker ({key, latitude, longitude}) {
    return(
        (<>
            <Marker position= {[parseFloat(latitude), parseFloat(longitude)]}>
                <Popup>
                    {key}
                </Popup>
            </Marker>
        </>));
}

export default UniMarker;