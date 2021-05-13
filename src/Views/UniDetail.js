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
import {Link} from "react-router-dom";


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

/*const continent = {
    "AS" : "Asie",
    "AF" : "Afrique",
    "AdN" : "Amerique du Nord",
    "AdS" : "Amerique du Sud",
    "EU" : "Europe",
    "OC" : "Oceanie"
};

const mobitype = {
    "DD" : "Double Diplôme",
    "E" : "Echange"
};

const period = {
    "Hebdo" : "Hebdomadaire",
    "Mensuel" :  "Mensuel",
    "Trim" : "Trimestriel",
    "Sem" : "Semestriel",
    "An" : "Annuel"
};

const access = {
    "High" : "Demande forte",
    "Medium" : "Demande normale",
    "Low" : "Demande faible"
};

const languages = {
    "TOEIC" : "TOEIC",
    "INC" : "INCONNU",
    "AUCUN" : "AUCUN"
};*/

function UniDetail(props) {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false); // true if API content is loaded
    const [uni, setUni] = useState({}); // contains API content

    // eslint-disable-next-line react/prop-types
    const uni_id = props.match.params.id;

    // Load university data from API
    useEffect(() => {
        console.log(loaded);
        getUni(uni_id).then((res) => {
            console.log(res.data);
            setUni(res.data);
            setLoaded(true);
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

                            <Typography variant={"h6"}>L universite en elle-meme</Typography>
                            <Typography variant={"body1"}>Classement mondial de l universite : {uni.cwur_rank}</Typography>
                            <Typography variant={"body1"}>Site web : {uni.website}</Typography>

                            <Typography variant={"h6"}>Comment y acceder ?</Typography>
                            <Typography variant={"body1"}>Duree de l echange : {"1 semestre"}</Typography>
                            <Typography variant={"body1"}>Quand partir ? : {"4A S1"}</Typography>
                            <Typography variant={"body1"}>Nombre de places en double diplomes : {"2"}</Typography>
                            <Typography variant={"body1"}>Nombre de places en echange : {"2"}</Typography>
                            <Typography variant={"body1"}>Demande : {"Demande forte"}</Typography>
                            <Typography variant={"body1"}>Niveau d anglais requis : {"TOEIC"}</Typography>

                            <Typography variant={"h6"}>Les cours</Typography>
                            <Typography variant={"body1"}>Départements concernés :</Typography>{uni.department_availability.map((item) => <Chip className={classes.chip} key={item.name} size={"small"} label={item.name} />)}
                            <Typography variant={"body1"}>Difficulte des cours : {uni.courses_difficulty+" /5"}</Typography>
                            <Typography variant={"body1"}>Interet des cours : {uni.courses_interest+" /5"}</Typography>

                            <Typography variant={"h6"}>Logement</Typography>
                            <Typography variant={"body1"}>Résidence sur le campus : {uni.univ_appartment ? "Oui" : "Non"}</Typography>
                            <Typography variant={"body1"}>Coût de la vie (approximatif) :</Typography>

                            <Typography variant={"body1"}>Coût de la vie (approximatif) :</Typography>
                            <Typography variant={"body1"}>Le campus : </Typography>
                        </div>
                        <Button variant="contained" color="secondary" component={Link} to="/experience">
                            Je suis allé(e) ici !
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant={"h4"} className={classes.avis}>Commentaires</Typography>
                        {
                            uni.reviews.length === 0 ? (
                                <div>
                                    <Typography variant={"body1"}>Pas de commentaire pour cette université</Typography>
                                    <Button variant="contained" color="secondary" component={Link} to="/experience">
                                        Donner mon avis
                                    </Button>
                                </div>
                            ) :
                                uni.reviews.map((item, index) =>
                                    <Card key={index} className={classes.commentCard}>
                                        <Typography variant={"h6"} className={classes.commentTitle}>Commentaire de {item.surname} {item.name} diplômé en {item.diploma_year}</Typography>
                                        <Typography variant={"body1"} className={classes.comment}>{item.comments}</Typography>
                                    </Card>
                                )
                        }

                    </Grid>
                </Grid>
            </Container>
        </>) : <CircularProgress />);
}

export default UniDetail;