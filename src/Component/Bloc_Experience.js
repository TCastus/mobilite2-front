import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    Experience: {
        height: '50vh',
        color: 'black',
        background: theme.palette.primary.light,
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    }
}));

export default function Experience () {
    const classes = useStyles();
    return (
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
    );
}