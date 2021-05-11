import React from "react";
import {Popup, Circle} from "react-leaflet";
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";


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

            <Circle  radius={700} center= {[parseFloat(latitude), parseFloat(longitude)]}>
                <Popup minWidth='400px' minLength='700px' maxWidth='400px' maxLength={'700px'} >
                    <Button href={"detail/" +id} >
                        {name}
                    </Button>
                </Popup>
            </Circle>


        </>));
}

export default UniMarker;
