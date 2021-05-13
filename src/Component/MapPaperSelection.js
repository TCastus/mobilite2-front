// import '../Assets/Style/SelectionMap.css';
import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import {MapContainer, TileLayer} from "react-leaflet";
import {getUniAll} from '../Request/uni_request';
import {CircularProgress} from "@material-ui/core";
import UniMarker from "./UniMarker";


const useStyles = makeStyles((theme) => ({
    paper: {
        background: 'cadetblue',
        width: "100%",
        margin: theme.spacing(3),
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    map: {
        width: '100%',
        height: '400px',
        margin: theme.spacing(3),
        align: "left",
    },
    uniList: {
        align: "right",
    }
}));


export default function MapPaperSelection () {
    const classes = useStyles();
    const [uniA, setUniA] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        getUniAll().then((res) => {
            setUniA(res.data);
            setLoaded(true);
            console.log(res.data);
        });
    }, []);

    return ( loaded ?
        (<>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant={'h2'}> Choisissez votre destination </Typography>

                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        {loaded &&
                        <MapContainer center={[parseFloat(uniA[0].latitude), parseFloat(uniA[0].longitude)]} zoom={13} scrollWheelZoom={true} className={classes.map}>

                            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                            {uniA.map((uni) => {
                                console.log(uni);
                                return <UniMarker latitude={uni.latitude} longitude={uni.longitude} name={uni.name} id ={uni.id} key={uni.id}/>;
                            })}
                        </MapContainer>}
                    </Grid>

                    <Grid item xs={6}>
                        <Typography display="inColomn">U</Typography>
                        <Typography display="inColomn">N</Typography>
                        <Typography display="inColomn">I</Typography>
                        <Typography display="inColomn">V</Typography>
                        <Typography display="inColomn">E</Typography>
                        <Typography display="inColomn">R</Typography>
                        <Typography display="inColomn">S</Typography>
                        <Typography display="inColomn">I</Typography>
                        <Typography display="inColomn">T</Typography>
                        <Typography display="inColomn">E</Typography>
                        <Typography variant={'h5'}>
                            Cliquez sur une destination
                        </Typography>
                        <Typography display="inColomn">
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </>) : <CircularProgress />);


}