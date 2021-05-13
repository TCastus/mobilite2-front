import React from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Container, Typography} from "@material-ui/core";
import PlaneIcon from "../Assets/Icon/PlaneIcon";
import SearchBox from "../Component/SearchBox";
import PageHeader from "../Component/PageHeader";



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight : '100vh',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    experience: {
        height: '50vh',
        color: 'black',
        background: theme.palette.primary.light,
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    search: {
        height: '50vh',
        color: 'black',
        background: 'white',
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));



function Rechercher() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <PageHeader title={"Rechercher une université"}/>

            <Container>
                <SearchBox/>
            </Container>


            <div className={classes.experience}>
                <Typography variant={'h3'}>Partagez votre expérience</Typography>
                <PlaneIcon />

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

export default Rechercher;