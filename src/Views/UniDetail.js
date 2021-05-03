import React, {useEffect, useState} from 'react';
import '../Assets/Style/App.css';
import '../Assets/Style/Universite.css';


import Grid from '@material-ui/core/Grid';
import {
    AttachMoney as AttachMoneyIcon,
    Language as LanguageIcon,
    Lock as LockIcon,
    LockOpen as LockOpenIcon,
    MoneyOff as MoneyOffIcon,
    MusicNote as MusicNoteIcon,
    MusicOff as MusicOffIcon,
    Public as PublicIcon,
    Star as StarIcon,
    StarBorder as StarBorderIcon
} from '@material-ui/icons';
import {getUni} from "../Request/uni_request";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    map: {
        width: '80%',
        height: '400px',
        margin: theme.spacing(2),
        align: "center",
    },
}));

function UniDetail() {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const [uni, setUni] = useState({});

    useEffect(() => {
        getUni().then((res) => {
            setUni(res.data);
            setLoaded(true);
            console.log(res.data);
        });
    }, []);

    return (loaded ?
        (<>
            <div className="header">
                <h1 className="title">{uni.name}</h1>
                <h2 className="subtitle">Ville, Pays, Continent</h2>
            </div>
            <div className="presGen">
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <MapContainer center={[parseFloat(uni.latitude), parseFloat(uni.longitude)]} zoom={13} scrollWheelZoom={true} className={classes.map}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[parseFloat(uni.latitude), parseFloat(uni.longitude)]}>
                                <Popup>
                                    {uni.name}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <h3 className="avis">Les avis des étudiants</h3>
                        <Grid container spacing={2}>
                            <Grid item sm={4} xs={6}>
                                <div className="noteGlobale">
                                    Note globale
                                </div>
                            </Grid>
                            <Grid item sm={8} xs={6}>
                                <StarIcon fontSize="large"/>
                                <StarIcon fontSize="large"/>
                                <StarIcon fontSize="large"/>
                                <StarIcon fontSize="large"/>
                                <StarBorderIcon fontSize="large"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sm={1.5} xs={6}>
                                <div className="note">
                                    <p>Coût de la vie</p>
                                    <AttachMoneyIcon fontSize="small"/>
                                    <AttachMoneyIcon fontSize="small"/>
                                    <AttachMoneyIcon fontSize="small"/>
                                    <AttachMoneyIcon fontSize="small"/>
                                    <MoneyOffIcon fontSize="small"/>
                                </div>
                            </Grid>
                            <Grid item sm={1.5} xs={6}>
                                <div className="note">
                                    <p>Sécurité</p>
                                    <LockIcon fontSize="small"/>
                                    <LockIcon fontSize="small"/>
                                    <LockIcon fontSize="small"/>
                                    <LockIcon fontSize="small"/>
                                    <LockOpenIcon fontSize="small"/>
                                </div>
                            </Grid>
                            <Grid item sm={1.5} xs={6}>
                                <div className="note">
                                    <p>Vie nocturne</p>
                                    <MusicNoteIcon fontSize="small"/>
                                    <MusicNoteIcon fontSize="small"/>
                                    <MusicNoteIcon fontSize="small"/>
                                    <MusicNoteIcon fontSize="small"/>
                                    <MusicOffIcon fontSize="small"/>
                                </div>
                            </Grid>
                            <Grid item sm={1.5} xs={6}>
                                <div className="note">
                                    <p>Vie culturelle</p>
                                    <PublicIcon fontSize="small"/>
                                    <PublicIcon fontSize="small"/>
                                    <PublicIcon fontSize="small"/>
                                    <PublicIcon fontSize="small"/>
                                    <LanguageIcon fontSize="small"/>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="infos">

                            <h4>+Les cours</h4>
                            <h4>+Recommandations</h4>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>) : <CircularProgress />);
}

export default UniDetail;