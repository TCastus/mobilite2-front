import React from 'react';
import '../Assets/Style/App.css';
import TestApi from "../Component/APITest";
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import Titre from "../Component/Bloc_Titre_Home";
import Destination from "../Component/Bloc_Destiantion";
import Experience from "../Component/Bloc_Experience";


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
            <Titre/>
            <Destination/>
            <Experience/>
            <CssBaseline/>
            <TestApi/>
        </div>
    );
}

export default Home;

