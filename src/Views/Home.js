import React from 'react';
import '../Assets/Style/App.css';
import TestApi from "../Component/APITest";
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";


const useStyles = makeStyles(() => ({
    root: {
        minHeight : '100vh',
        backgroundImage: `url(${'./../Assets/images/Carte.jpg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));

function Home() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1> Accueil </h1>
            <CssBaseline/>
            <TestApi/>
        </div>
    );
}

export default Home;

