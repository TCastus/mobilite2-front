import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";


const useStyles = makeStyles(() => ({

    Experience: {
        height: '50vh',
        color: 'black',
        background: 'lightcyan',
        margin: '20px',
        padding: 2,
        textAlign: 'center',
    }

}));

export default function Experience () {
    const classes = useStyles();
    return (
        <div className={classes.Experience}>
            <h2>Partagez votre expérience</h2>
            <h3>
                Vous revenez d&apos;échange ? <br/>
                Aidez les étudiants dans leur choix en<br/>
                partageant votre expérience et en<br/>
                répondant à leurs questions.
            </h3>
            <Button variant="contained" color="secondary" href="experience">
                Donner mon avis
            </Button>
        </div>
    );
}