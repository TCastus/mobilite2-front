import '../Assets/Style/SelectionMap.css';
import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography} from "@material-ui/core";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


const useStyles = makeStyles((theme) => ({
    paper: {
        background: '#77c0ff',
        margin: theme.spacing(5),
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    map: {
        width: '100%',
        height: '400px',
        margin: theme.spacing(2),
        align: "left",
    },
    uniList: {
        align: "right",
    }
}));

export default function MapPaperSelection () {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant={'h2'}> Choisissez votre destination </Typography>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={classes.map}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant={'h5'}>Universités</Typography>
                </Grid>
            </Grid>

        </Paper>
    );
}