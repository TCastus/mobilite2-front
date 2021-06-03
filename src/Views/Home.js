import React from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from '@material-ui/core/styles';
import {CircularProgress, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import PageHeader from "../Component/PageHeader";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {getUniAll} from "../Request/uni_request";
import {getDefaultErrorMessage} from "../Request/error_handling";
import * as PropTypes from "prop-types";

Home.propTypes = {
    errorHandler: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    title: {
        height: '20vh',
        color: theme.palette.primary.light,
        background: 'rgba(100,100,100,100)',
        margin: '0px',
        padding: 2,
        textAlign: 'center',
    },
    experience: {
        height: '50vh',
        color: 'black',
        background: theme.palette.primary.light,
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    container: {
        background: 'cadetblue',
        width: "100%",
        paddingTop: theme.spacing(2),
        [theme.breakpoints.up['md']]: {
            padding: theme.spacing(5),
        },
        textAlign: 'center',
    },
    map: {
        marginTop: theme.spacing(2),
        width: '100%',
        height: '500px',
    },
}));

export default function Home({errorHandler}) {
    const classes = useStyles();

    const [uniA, setUniA] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        getUniAll().then((res) => {
            setUniA(res.data);
            setLoaded(true);
            console.log(res.data);
        }).catch( err => {
            errorHandler(getDefaultErrorMessage(err));
        });
    }, [errorHandler]);

    return (
        <Box component="div" className="note">

            <PageHeader title={"Mobilités Internationales"}
                subtitle={"Découvrez les avis des étudiants revenus d'échange"}/>

            {loaded ?
                <Box elevation={3} className={classes.container}>
                    <Typography variant={'h2'}> Choisissez votre destination </Typography>

                    <MapContainer center={[parseFloat(uniA[0].latitude), parseFloat(uniA[0].longitude)]} zoom={3}
                        scrollWheelZoom={false} className={classes.map}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                        {uniA.map((uni) =>
                            uni.latitude && uni.longitude &&
                            <Marker key={uni.id} position={[parseFloat(uni.latitude), parseFloat(uni.longitude)]}>
                                <Popup>
                                    <Link to={"/universite/"+uni.id}>{uni.name}</Link>
                                </Popup>
                            </Marker>

                        )}
                    </MapContainer>
                </Box>
                : <CircularProgress/>}
        </Box>
    );
}
