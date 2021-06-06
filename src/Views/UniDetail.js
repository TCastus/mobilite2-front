import React, {useEffect, useState} from 'react';
import '../Assets/Style/App.css';

import Grid from '@material-ui/core/Grid';
import {
    AccountBalance as AccountBalanceIcon,
    AttachMoney as AttachMoneyIcon, Chat as ChatIcon,
    Language as LanguageIcon,
    MenuBook as MenuBookIcon,
    MoneyOff as MoneyOffIcon,
    MusicNote as MusicNoteIcon,
    MusicOff as MusicOffIcon,
    Public as PublicIcon, Security as SecurityIcon,
    NoEncryption as NoEncryptionIcon,
    ImportContacts as ImportContactsIcon,
    SpeakerNotesOff as SpeakerNotesOffIcon,
    Clear as ClearIcon,

} from '@material-ui/icons';
import {getUni} from "../Request/uni_request";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, Container, Typography} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";
import PageHeader from "../Component/PageHeader";
import NotePaper from "../Component/NotePaper";
import {Link, useParams} from "react-router-dom";
import {Box} from "@material-ui/core";
import * as PropTypes from "prop-types";
import {getDefaultErrorMessage} from "../Request/error_handling";


UniDetail.propTypes = {
    errorHandler: PropTypes.func.isRequired,
};

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
    comment: {
        textAlign: "left",
    },
    commentCard: {
        padding: theme.spacing(2),
    },

    textCenter: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontVariantCaps: theme.fontVariantCaps.smallCaps,

    },
    textWeight: {
        fontWeight: 'normal',
    }
}));

const mobi_type = {
    'E': 'Échange',
    'DD': 'Double-diplome'
};

const access = {
    'Low': 'Basse',
    'Medium': 'Moyenne',
    'High': 'Élevée'
};

export default function UniDetail({errorHandler}) {
    const classes = useStyles();

    const [loaded, setLoaded] = useState(false);
    const [uni, setUni] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getUni(id).then((res) => {
            console.log(res.data);
            setUni(res.data);
            setLoaded(true);
        }).catch( err => {
            errorHandler(getDefaultErrorMessage(err));
        });
    }, [id, errorHandler]);

    return (loaded ?
        (<>
            <PageHeader title={uni.name} subtitle={uni.city_name+", "+uni.country_name}/>
            <Container className={classes.presGen} maxWidth={"lg"}>
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        {uni.latitude && uni.longitude &&
                                <MapContainer center={[parseFloat(uni.latitude), parseFloat(uni.longitude)]} zoom={8}
                                    scrollWheelZoom={false} className={classes.map}>

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
                        }
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <Typography variant={"h4"} className={classes.avis} style={{fontVariantCaps: 'small-caps'}}>Les avis des étudiants</Typography>

                        <Typography variant={"body1"} className={classes.textCenter}>Nombre d&apos;étudiants ayant donné leur avis : {uni.review_number} </Typography>

                        {uni.review_number > 0 ?
                            <Grid container spacing={2}>
                                <NotePaper IconOn={AttachMoneyIcon} IconOff={MoneyOffIcon} title={"Coût de la vie"}
                                    note={uni.cost_of_living.cost_of_living__avg}/>
                                <NotePaper IconOn={SecurityIcon} IconOff={NoEncryptionIcon} title={"Sécurité"}
                                    note={uni.security.security__avg}/>
                                <NotePaper IconOn={MusicNoteIcon} IconOff={MusicOffIcon} title={"Vie nocturne"}
                                    note={uni.night_life.night_life__avg}/>
                                <NotePaper IconOn={PublicIcon} IconOff={LanguageIcon} title={"Vie culturelle"}
                                    note={uni.culture.culture__avg}/>
                                <NotePaper IconOn={MenuBookIcon} IconOff={ImportContactsIcon} title={"Difficulté des cours"}
                                    note={uni.courses_difficulty.courses_difficulty__avg}/>
                                <NotePaper IconOn={AccountBalanceIcon} IconOff={ClearIcon} title={"Intérêt dans les cours"}
                                    note={uni.courses_interest.courses_interest__avg}/>
                                <NotePaper IconOn={ChatIcon} IconOff={SpeakerNotesOffIcon}
                                    title={"Contact avec les étudiants"} note={uni.student_proximity.student_proximity__avg}/>
                            </Grid> : <Typography variant={"body1"}>Pas assez de reviews pour noter l&apos;université</Typography>
                        }

                        {/*{uni.placesDD.length > 0 && [...new Set(uni.placesDD*/}
                        {/*    .map((res)=>res.department_availability.map((dep)=>dep.name))*/}
                        {/*    .reduce((list1, list2)=>list1.concat(list2)))]*/}
                        {/*    .map((item) => <Chip className={classes.chip} key={item} size={"small"} label={item} />)}*/}


                        <Box component = { "div" } className={classes.infos}>

                            <Typography variant={"h5"} className={classes.textCenter}>Informations générales</Typography>
                            {uni.cwur_rank && <Typography>Classement mondial de l universite : {uni.cwur_rank}</Typography>}
                            {uni.website && <Typography>Site web : <a href={uni.website}>{uni.website}</a></Typography>}

                            <Typography variant={"h5"}  className={classes.textCenter}>Accessibilité</Typography>
                            {uni.placesDD.length > 0 && <><Typography variant={'body1'}>Places en double diplôme : </Typography>
                                <ul>
                                    {uni.placesDD.map((place) =>
                                        <Typography component={"li"} variant={"body1"} key={`${place.number}_${place.department_availability}`}>
                                            {place.number} places pour {place.department_availability.map((elem) => elem.name + " ")}
                                        </Typography>
                                    )}
                                </ul> </>}

                            {uni.placesExchange.length > 0 && <><Typography variant={'body1'}>Places en échange : </Typography>
                                <ul>
                                    {uni.placesExchange.map((place) =>
                                        <Typography component={"li"} variant={"body1"} key={`${place.number}_${place.department_availability}_${place.semester}`}>
                                            {place.number} places pour {place.department_availability.map((elem) => elem.name + " " )}
                                            {place.semester.length > 1 ? 'au semestre' : 'aux semestres'} {place.semester.map((elem) => elem.name + " ")}
                                        </Typography>
                                    )}
                                </ul> </>}

                            <Typography>Demande : {access[uni.access]}</Typography>
                            {uni.rent.rent__avg && <Typography>Coût du logement moyen : {uni.rent.rent__avg}</Typography>}
                        </Box>

                        <Button variant="contained" color="primary" component={Link} to={`/experience/${uni.id}`}>
                            Je suis allé.e ici !
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant={"h4"} className={classes.avis}>Commentaires</Typography>
                        {
                            uni.reviews.length === 0 ? (
                                <Box component={"div"}>
                                    <Typography variant={"body1"}>Aucun commentaire pour cette université</Typography>
                                </Box>
                            ) :
                                uni.reviews.map((item, index) =>
                                    <Card key={index} className={classes.commentCard}>
                                        <Typography variant={"h6"} className={classes.comment}>
                                            Commentaire de {item.surname} {item.name} {item.email_perm.length > 0 ? `(${item.email_perm})`:''}
                                        </Typography>
                                        <Typography variant={"body2"} className={classes.comment}>
                                            parti en {mobi_type[item.mobility_type]} en {item.year} en {item.semester}
                                        </Typography>
                                        <Typography variant={"body1"} className={classes.comment}>
                                            Commentaire : {item.comments}
                                        </Typography>
                                        <Typography variant={"body1"} className={classes.comment}>
                                            Visa : {item.visa}
                                        </Typography>
                                    </Card>
                                )
                        }

                    </Grid>
                </Grid>
            </Container>
        </>) : <CircularProgress />);
}