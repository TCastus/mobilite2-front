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
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    map: {
        marginTop: theme.spacing(3),
        width: '100%',
        height: '500px',
    },
    shareExp: {
        backgroundColor: 'black',
        color: '#c59b08',
        padding: 10,
        margin: '20px',
        borderWidth: '8px',
        borderRadius: '5px 5px 5px 5px',
        opacity: 0.75,
        background: "whitesmoke",
        font: 'small-caps bold 24px/1 sans-serif',
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
                : <CircularProgress/>};

            <Box component="div" className={classes.shareExp}>
                <Typography variant={'h4'}>PARTAGEZ VOTRE EXPERIENCE</Typography>
                <PlaneIcon/>

                <Grid container spacing={1}>
                    <Grid item xs={6} sm={7}>
                        <Typography variant={'h6'}>
                            Vous revenez d&apos;échange ? <br/>
                            Aidez les étudiants dans leur choix en<br/>
                            partageant votre expérience et en<br/>
                            répondant à leurs questions.
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm={2}>
                        <Button variant="contained" color="primary" component={Link} to={"experience"}>
                            Donner mon avis
                            <BorderColorTwoToneIcon/>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}


