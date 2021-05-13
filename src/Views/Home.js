import React from 'react';
import '../Assets/Style/App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import MapPaperSelection from "../Component/MapPaperSelection";
import PlaneIcon from "../Assets/Icon/PlaneIcon";
import Box from "@material-ui/core/Box";
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
import {Link} from "react-router-dom";
import PageHeader from "../Component/PageHeader";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight : '100vh',
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
    mapContainer: {
        backgroundColor: 'white',
        color: '#c59b08',
        padding: 10,
        margin: '20px',
        borderWidth: '3px',
        borderRadius: '5px 5px 5px 5px',
        opacity: 0.75,
        background: "whitesmoke",
        font: 'small-caps bold 24px/1 sans-serif',
        textDecoration: 'overline',
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
    return (
        <Box component ="div" className="note">

            <PageHeader classeName={classes.homeHeader} title={"Mobilités Internationales"}
                subtitle={"Découvrez les avis des étudiants revenus d'échange"} />
                        
            <Box className= {classes.mapContainer}>
                <Container >
                    <MapPaperSelection/>
                </Container>
            </Box>

            <Box component="div" className={classes.shareExp}  >
                <Typography variant={'h4'}>PARTAGEZ VOTRE EXPERIENCE</Typography>
                <PlaneIcon />

                <Grid container spacing={1}>
                    <Grid item xs={6} sm={7}>
                        <Typography variant={'h6'}>
                            Vous revenez d&apos;échange ? <br/>
                            Aidez les étudiants dans leur choix en<br/>
                            partageant votre expérience et en<br/>
                            répondant à leurs questions.
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm ={2} >
                        <Button variant="contained" color="primary" component={Link} to={"experience"}>
                            Donner mon avis
                            <BorderColorTwoToneIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}


