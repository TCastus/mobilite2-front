import React from 'react';
import '../Assets/Style/App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container, CssBaseline, Grid, Toolbar, Typography} from "@material-ui/core";
import MapPaperSelection from "../Component/MapPaperSelection";
import PlaneIcon from "../Assets/Icon/PlaneIcon";
import Box from "@material-ui/core/Box";
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';

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

    Box: {
        backgroundColor: 'black',
        color: '#c59b08',
        padding: 10,
        //textAlign: 'center',
        //width: '200px',
        //height: '200px',
        margin: '20px',
        borderWidth: '3px',
        borderRadius: '5px 5px 5px 5px',
        opacity: 0.75,
        background: "whitesmoke",
        font: 'small-caps bold 24px/1 sans-serif',
        textDecoration: 'overline',

    },
    Box2: {
        backgroundColor: 'white',
        color: '#c59b08',
        padding: 10,
        //textAlign: 'center',
        //width: '200px',
        //height: '200px',
        margin: '20px',
        borderWidth: '3px',
        borderRadius: '5px 5px 5px 5px',
        opacity: 0.75,
        background: "whitesmoke",
        font: 'small-caps bold 24px/1 sans-serif',
        textDecoration: 'overline',
    },

    Box3: {
        backgroundColor: 'black',
        color: '#c59b08',
        padding: 10,
        margin: '20px',
        borderWidth: '5px',
        borderRadius: '5px 5px 5px 5px',
        opacity: 0.75,
        background: "whitesmoke",
        font: 'small-caps bold 24px/1 sans-serif',

    }
}));

export default function Home() {

    const classes = useStyles();
    return (
        <Box component ="div" className="note">

            <Box className={classes.Box}>
                <Typography variant="h3"> Mobilités Internationales </Typography>
                <Typography variant="h4"> Découvrez les avis des étudiants revenus d&apos;échange</Typography>
            </Box>
            <Box className= {classes.Box2}>
                <Container >
                    <MapPaperSelection/>
                </Container>
            </Box>

            <Box component="div" className={classes.Box3}  >
                <Typography variant={'h4'}>PARTAGER VOTRE EXPERIENCE</Typography>
                <PlaneIcon />

                <Grid container spacing={1}>
                    <Grid item xs={6} sm = {7}>
                        <Typography variant={'h6'}>
                            Vous revenez d&apos;échange ? <br/>
                            Aidez les étudiants dans leur choix en<br/>
                            partageant votre expérience et en<br/>
                            répondant à leurs questions.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm ={2} >
                        <Button variant="contained" color="primary" href="experience">
                            Donner mon avis
                            <BorderColorTwoToneIcon></BorderColorTwoToneIcon>
                        </Button>

                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}


