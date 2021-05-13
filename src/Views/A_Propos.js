import React from 'react';
import '../Assets/Style/App.css';
import {Box, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InfoIcon from '@material-ui/icons/Info';
import PageHeader from "../Component/PageHeader";



const useStyles = makeStyles((theme) =>
    ({
        style:{
            alignItems:"center",
            font: 'small-caps bold 24px/1 sans-serif',
        },

        content: {
            backgroundColor: 'white',
            color: '#c59b08',
            padding: 10,
            margin: '20px',
            borderWidth: '3px',
            borderRadius: '5px 5px 5px 5px',
            opacity: 0.75,
            background: "whitesmoke",
            font: 'small-caps bold 24px/1 sans-serif',
        },
    })
);


function Apropos() {

    const classes = useStyles();

    return (
        <Box component="div">
            <PageHeader title={<InfoIcon></InfoIcon>} subtitle="A PROPOS">
            </PageHeader>

            <Box component= "div" className={classes.content}>
                <Typography>
                    INFOS A COMPLETER
                </Typography>
            </Box>
        </Box>

    );
}

export default Apropos;