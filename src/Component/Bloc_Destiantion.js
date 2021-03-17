import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({

    Destination: {
        height: '40vh',
        color: 'black',
        background: 'white',
        margin: '20px',
        padding: 2,
        textAlign: 'center',
    },

    Experience: {
        height: '50vh',
        color: 'black',
        background: 'lightcyan',
        margin: '20px',
        padding: 2,
        textAlign: 'center',
    }

}));

export default function Destination () {
    const classes = useStyles();
    return (
        <div className={classes.Destination}>
            <h2> Choisissez votre destination </h2>
        </div>
    );
}