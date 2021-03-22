import React from 'react';
import '../Assets/Style/App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, CssBaseline, Typography} from "@material-ui/core";
import MapPaperSelection from "../Component/Bloc_Destiantion";

const useStyles = makeStyles(() => ({
    root: {
        minHeight : '100vh',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));

function Home() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>

            <div className={classes.Titre}>
                <h1> Mobilités Internationales </h1>
                <h2> Découvrer les avis de vos étudiants </h2>
            </div>

            <Container>
                <MapPaperSelection/>
            </Container>

            <div className={classes.Experience}>
                <Typography variant={'h3'}>Partagez votre expérience</Typography>
                <Typography variant={'h4'}>
                    Vous revenez d&apos;échange ? <br/>
                    Aidez les étudiants dans leur choix en<br/>
                    partageant votre expérience et en<br/>
                    répondant à leurs questions.
                </Typography>
                <Button variant="contained" color="secondary" href="experience">
                    Donner mon avis
                </Button>
            </div>

        </div>
    );
}

export default Home;

