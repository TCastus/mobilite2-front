import React from 'react';
import '../Assets/Style/App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, CssBaseline, Typography} from "@material-ui/core";
import MapPaperSelection from "../Component/MapPaperSelection";

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
}));

function Home() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>

            <div className={classes.title}>
                <h1> Mobilités Internationales </h1>
                <h2> Découvrer les avis de vos étudiants </h2>
            </div>

            <Container>
                <MapPaperSelection/>
            </Container>

            <div className={classes.experience}>
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

