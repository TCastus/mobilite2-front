import React, {useEffect, useState} from 'react';
import '../Assets/Style/App.css';

import Grid from '@material-ui/core/Grid';
import {
    AccountBalance as AccountBalanceIcon,
    AttachMoney as AttachMoneyIcon, Chat as ChatIcon,
    Language as LanguageIcon,
    Lock as LockIcon,
    LockOpen as LockOpenIcon, MenuBook as MenuBookIcon,
    MoneyOff as MoneyOffIcon,
    MusicNote as MusicNoteIcon,
    MusicOff as MusicOffIcon,
    Public as PublicIcon, Security as SecurityIcon,
    Star as StarIcon,
    StarBorder as StarBorderIcon,
    NoEncryption as NoEncryptionIcon,
    ImportContacts as ImportContactsIcon,
    SpeakerNotesOff as SpeakerNotesOffIcon,
    Clear as ClearIcon,

} from '@material-ui/icons';
import {getUni} from "../Request/uni_request";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, Chip, Container, Typography} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";
import PageHeader from "../Component/PageHeader";
import NotePaper from "../Component/NotePaper";
import {Link, useParams} from "react-router-dom";
import {Box} from "@material-ui/core";



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
        background: theme.palette.third.white,
        marginBottom: theme.spacing(5),
    },
    avis: {
        fontWeight: theme.fontType.bold,
        paddingTop:'0.5em',
        paddingBottom:'0.3em',
        fontVariantCaps: theme.fontVariantCaps.smallCaps,
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
    },

    textCenter: {
        textAlign: 'center',
        fontVariantCaps: theme.fontVariantCaps.smallCaps,

    },

    textWeight: {
        fontWeight: 'normal',
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

export default function UniDetail() {
    const classes = useStyles();

    const [loaded, setLoaded] = useState(false); // true if API content is loaded
    const [uni, setUni] = useState({}); // contains API content

    const { id } = useParams();

    // Load university data from API
    useEffect(() => {
        getUni(id).then((res) => {
            console.log(res.data);
            setUni(res.data);
            setLoaded(true);
        });

    }, [id]);

    return (loaded ?
        (<>
            <PageHeader title={uni.name} subtitle={"Ville, pays, continent"}/>
            <Container className={classes.presGen} maxWidth={"lg"}>
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <MapContainer center={[parseFloat(uni.latitude), parseFloat(uni.longitude)]} zoom={8} scrollWheelZoom={false} className={classes.map}>
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
                        <Typography variant={"h4"} className={classes.avis} style={{fontVariantCaps: 'small-caps'}}>Les avis des étudiants</Typography>

                        <Grid container spacing={2}>
                            <NotePaper IconOn={StarIcon} IconOff={StarBorderIcon} title={"Note globale"} note={3} cols={12} />
                            <NotePaper IconOn={AttachMoneyIcon} IconOff={MoneyOffIcon} title={"Coût de la vie"} note={4} />
                            <NotePaper IconOn={SecurityIcon} IconOff={NoEncryptionIcon} title={"Sécurité"} note={4} />
                            <NotePaper IconOn={MusicNoteIcon} IconOff={MusicOffIcon} title={"Vie nocturne"} note={4} />
                            <NotePaper IconOn={PublicIcon} IconOff={LanguageIcon} title={"Vie culturelle"} note={4} />
                            <NotePaper IconOn={MenuBookIcon} IconOff={ImportContactsIcon} title={"Difficulté des cours"} note={4} />
                            <NotePaper IconOn={AccountBalanceIcon} IconOff={ClearIcon} title={"Intérêt dans les cours"} note={4} />
                            <NotePaper IconOn={ChatIcon} IconOff={SpeakerNotesOffIcon} title={"Contact avec les étudiants"} note={4} />



                        </Grid>

                        <Box component = { "div" } className={classes.infos}>

                            <Typography variant={"h5"} className={classes.textCenter} >L universite en elle-meme</Typography>
                            <Typography variant={"h6"} className={classes.textWeight}>
                                <Typography>Classement mondial de l universite : {uni.cwur_rank}</Typography>
                                <Typography>Site web : {uni.website}</Typography>
                            </Typography>

                            <Typography variant={"h5"}  className={classes.textCenter}>Comment y acceder ?</Typography>
                            <Typography variant={"h6"} className={classes.textWeight}>
                                <Typography>Duree de l echange : {"1 semestre"}</Typography>
                                <Typography>Quand partir ? : {"4A S1"}</Typography>
                                <Typography>Nombre de places en double diplomes : {"2"}</Typography>
                                <Typography>Nombre de places en echange : {"2"}</Typography>
                                <Typography>Demande : {"Demande forte"}</Typography>
                                <Typography>Niveau d anglais requis : {"TOEIC"}</Typography>
                            </Typography>

                            <Typography variant={"h5"} className={classes.textCenter}>Les cours</Typography>
                            <Typography variant={"h6"} className={classes.textWeight}>
                                <Typography>Départements concernés en DD :</Typography>
                                <Typography>Difficulte des cours : {uni.courses_difficulty+" /5"}</Typography>
                                <Typography>Interet des cours : {uni.courses_interest+" /5"}</Typography>
                            </Typography>


                            <Typography variant={"h5"} className={classes.textCenter}>Logement</Typography>
                            <Typography variant={"h6"} className={classes.textWeight}>
                                <Typography>Résidence sur le campus : {uni.univ_appartment ? "Oui" : "Non"}</Typography>
                                <Typography>Coût de la vie (approximatif) :</Typography>

                                <Typography>Coût de la vie (approximatif) :</Typography>
                                <Typography>Le campus : </Typography>
                            </Typography>

                            <Typography variant={"h5"} className={classes.textCenter}>Aides Financières</Typography>
                            <Typography variant={"h6"} className={classes.textWeight}> Aides proposées :</Typography>

                        </Box>
                        <Button variant="contained" color="primary" component={Link} to="/experience">
                            Je suis allé(e) ici !
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant={"h4"} className={classes.avis}>Commentaires</Typography>
                        {
                            uni.reviews.length === 0 ? (
                                <Box component={"div"}>
                                    <Typography variant={"body1"}>Pas de commentaire pour cette université</Typography>
                                    <Button variant="contained" color="primary" component={Link} to="/experience">
                                        Donner mon avis
                                    </Button>
                                </Box>
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