import React from "react";
import {Popup, Marker} from "react-leaflet";
import PropTypes from "prop-types";

UniMarker.propTypes = {
    name: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,
    id: PropTypes.number,
    key: PropTypes.number,

};

function UniMarker ({name, latitude, longitude, id}) {
    return(
        (<>
            <Marker position={[parseFloat(latitude), parseFloat(longitude)]}>
                <Popup>
                    {name}
                </Popup>
            </Marker>
        </>));
}

export default UniMarker;
