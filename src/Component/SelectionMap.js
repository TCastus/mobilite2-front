import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import {makeStyles} from "@material-ui/core/styles";
import {Marker, Popup} from "leaflet/dist/leaflet-src.esm";

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '200vh',
    },
}));

export default function SelectionMap () {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {/*<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>*/}
            {/*    <TileLayer*/}
            {/*        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
            {/*        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
            {/*    />*/}
            {/*    <Marker position={[51.505, -0.09]}>*/}
            {/*        <Popup>*/}
            {/*            A pretty CSS3 popup. <br /> Easily customizable.*/}
            {/*        </Popup>*/}
            {/*    </Marker>*/}
            {/*</MapContainer>*/}
        </div>
    );
}

// export default function MapWindow() {
//     return (
//         <Map center={[45.4, -75.7]} zoom={12}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//         </Map>
//     );
// }