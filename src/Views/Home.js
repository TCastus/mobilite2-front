import React from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from '@material-ui/core/styles';
import {Button, CircularProgress, Grid, Typography} from "@material-ui/core";
import PlaneIcon from "../Assets/Icon/PlaneIcon";
import Box from "@material-ui/core/Box";
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
import {Link} from "react-router-dom";
import PageHeader from "../Component/PageHeader";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {getUniAll} from "../Request/uni_request";

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
    shareExp: {
        backgroundColor: '#404040',
        color: '#c59b08',
        padding: theme.spacing(3),
        display: "flex",
        alignItems: "center",
    },
    avisButton: {
        marginTop: theme.spacing(3),
    }
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

            <Box component="div" className={classes.shareExp}>
                <Grid container spacing={1}>
                    <Grid item sm={6} style={{display: "flex", alignItems:"center", textAlign:"center", fontVariantCaps: 'small-caps', textDecoration:'underline'}}>
                        <Typography component={Link} to={"experience"} variant={'h4'} style={{color: '#c59b08', margin:'0 auto'}}>Partagez votre expérience <BorderColorTwoToneIcon/></Typography>
                    </Grid>

                    <Grid item sm={6}>
                        <Typography variant={'h6'} style={{textAlign: 'left'}}>
                            Vous êtes partis en d&apos;échange ? Aidez les étudiants dans leur choix en partageant votre expérience et en répondant à leurs questions.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
