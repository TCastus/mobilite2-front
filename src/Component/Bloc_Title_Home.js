import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    Titre: {
        height: '20vh',
        color: theme.palette.primary.light,
        background: 'rgba(100,100,100,100)',
        margin: '0px',
        padding: 2,
        textAlign: 'center',
    },

}));

export default function Titre (){
    const classes = useStyles();
    return(
        <div className={classes.Titre}>
            <h1> Mobilités Internationales </h1>
            <h2> Découvrer les avis de vos étudiants </h2>
        </div>
    );
}