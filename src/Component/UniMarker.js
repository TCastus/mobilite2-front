import React from "react";
import {Marker, Popup} from "react-leaflet";
import PropTypes from "prop-types";
import {divIcon} from "leaflet";
import { renderToStaticMarkup } from 'react-dom/server';
import { Redirect, useHistory } from "react-router-dom";


UniMarker.propTypes = {
    key: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,

};

function UniMarker ({key, latitude, longitude}) {


    const state = {
        redirect: false
    };

    const setRedirect = () => {
        this.setState({
            redirect: true
        });
    };

    const renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/UniDetail' />; // utiliser l'id
        }
    };
    const iconMarkup = renderToStaticMarkup(<i className="./../Assets/images/marker-icon-2x.png" />);
    const customMarkerIcon = divIcon({
        //iconUrl: require('./../Assets/images/marker-icon-2x.png'),
        html: iconMarkup,
    });



    return(
        (<>

            <Marker id = {key} icon={customMarkerIcon} position= {[parseFloat(latitude), parseFloat(longitude)]} onClick={setRedirect}>
                <Popup>
                    {key}
                </Popup>
            </Marker>
        </>));
}


export default UniMarker;
