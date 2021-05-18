import React from 'react';
import '../Assets/Style/App.css';
import {Box, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import PageHeader from "../Component/PageHeader";



const useStyles = makeStyles((theme) =>
    ({


        content: {
            backgroundColor: theme.palette.third.white,
            color: theme.palette.third.gold,
            padding: 10,
            margin: '20px',
            borderWidth: '3px',
            borderRadius: '5px',
            opacity: 0.75,
            background: theme.palette.third.whitesmoke,
        },
    })
);


function MentionLegales() {

    const classes = useStyles();

    return (
        <Box component="div">
            <PageHeader title={<SpeakerNotesIcon></SpeakerNotesIcon>} subtitle="MENTIONS LEGALES">
            </PageHeader>

            <Box component= "div" className={classes.content}>
                <Typography>
                    INFOS A COMPLETER
                </Typography>
            </Box>
        </Box>

    );
}

export default MentionLegales;