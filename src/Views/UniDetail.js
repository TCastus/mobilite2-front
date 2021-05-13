import React, {useEffect, useState} from 'react';
import '../Assets/Style/App.css';

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
import {Button, Card, Chip, Container, Typography} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";
import PageHeader from "../Component/PageHeader";
import NotePaper from "../Component/NotePaper";


const useStyles = makeStyles((theme) => ({
    map: {
        [theme.breakpoints.up("md")] : {
            margin: theme.spacing(2),
        },
        width: '100%',
        height: '100%',
        minHeight: '200px',
        align: "center",
    },
    presGen: {
        background:'white',
        marginBottom: theme.spacing(5),
    },
    avis: {
        fontWeight: 'bold',
        paddingTop:'0.5em',
        paddingBottom:'0.3em',
    },
    infos: {
        padding: theme.spacing(2),
        textAlign: 'left',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    commentTitle: {
        textAlign: "left",
    },
    comment: {
        textAlign: "left",
    },
    commentCard: {
        padding: theme.spacing(2),
    }
}));

function UniDetail() {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false); // true if API content is loaded
    const [uni, setUni] = useState({}); // contains API content

    // Load university data from API
    useEffect(() => {
        getUni().then((res) => {
            setUni(res.data);
            setLoaded(true);
            console.log(res.data);
        });
    }, []);

    return (loaded ?
        (<>
            <PageHeader title={uni.name} subtitle={"Ville, pays, continent"}/>

            <Container className={classes.presGen} maxWidth={"lg"}>
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <MapContainer center={[parseFloat(uni.latitude), parseFloat(uni.longitude)]} zoom={13} scrollWheelZoom={false} className={classes.map}>
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
                        <Typography variant={"h4"} className={classes.avis}>Les avis des étudiants</Typography>

                        <Grid container spacing={2}>
                            <NotePaper IconOn={StarIcon} IconOff={StarBorderIcon} title={"Note globale"} note={3} cols={12} />
                            <NotePaper IconOn={AttachMoneyIcon} IconOff={MoneyOffIcon} title={"Coût de la vie"} note={4} />
                            <NotePaper IconOn={LockIcon} IconOff={LockOpenIcon} title={"Sécurité"} note={4} />
                            <NotePaper IconOn={MusicNoteIcon} IconOff={MusicOffIcon} title={"Vie nocturne"} note={4} />
                            <NotePaper IconOn={PublicIcon} IconOff={LanguageIcon} title={"Vie culturelle"} note={4} />
                        </Grid>

                        <div className={classes.infos}>
                            <Typography variant={"h6"}>Logement</Typography>
                            <Typography variant={"body1"}>Résidence sur le campus : {uni.univ_appartment ? "Oui" : "Non"}</Typography>
                            <Typography variant={"body1"}>Coût de la vie (approximatif) :</Typography>


                            <Typography variant={"h6"}>Les cours</Typography>
                            <Typography variant={"body1"}>
                                Départements conernés :
                                {uni.department_availability.map((item) => <Chip className={classes.chip} key={item.name} size={"small"} label={item.name} />)}
                            </Typography>
                            <Typography variant={"body1"}>Coût de la vie (approximatif) :</Typography>
                            <Typography variant={"body1"}>Le campus : </Typography>
                        </div>
                        <Button variant="contained" color="secondary" href="experience">
                            Je suis allée ici !
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant={"h4"} className={classes.avis}>Commentaires</Typography>
                        {uni.reviews.map((item, index) =>
                            <Card key={index} className={classes.commentCard}>
                                <Typography variant={"h6"} className={classes.commentTitle}>Commentaire de {item.surname} {item.name} diplômé en {item.diploma_year}</Typography>
                                <Typography variant={"body1"} className={classes.comment}>{item.comments}</Typography>
                            </Card>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>) : <CircularProgress />);
}

export default UniDetail;