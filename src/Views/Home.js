import React from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from '@material-ui/core/styles';
import {CircularProgress, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import PageHeader from "../Component/PageHeader";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {getUniAll} from "../Request/uni_request";


const useStyles = makeStyles((theme) => ({


    container: {
        background: theme.palette.third.cadetblue,
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

export default function Home() {
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
