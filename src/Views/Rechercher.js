import React from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Container, Grid, Typography} from "@material-ui/core";
import PlaneIcon from "../Assets/Icon/PlaneIcon";
import SearchBox from "../Component/SearchBox";
import PageHeader from "../Component/PageHeader";
import {Link} from "react-router-dom";
import BorderColorTwoToneIcon from "@material-ui/icons/BorderColorTwoTone";
import Box from "@material-ui/core/Box";



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

    shareExp: {
        backgroundColor: 'black',
        color: '#c59b08',
        padding: 10,
        margin: '20px',
        borderWidth: '8px',
        borderRadius: '5px 5px 5px 5px',
        opacity: 0.75,
        background: "whitesmoke",
        font: 'small-caps bold 24px/1 sans-serif',
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


            <Box component="div" className={classes.shareExp}  >
                <Typography variant={'h4'}>PARTAGEZ VOTRE EXPERIENCE</Typography>
                <PlaneIcon />

                <Grid container spacing={1}>
                    <Grid item xs={6} sm={7}>
                        <Typography variant={'h6'}>
                            Vous revenez d&apos;échange ? <br/>
                            Aidez les étudiants dans leur choix en<br/>
                            partageant votre expérience et en<br/>
                            répondant à leurs questions.
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sm ={2} >
                        <Button variant="contained" color="primary" component={Link} to={"experience"}>
                            Donner mon avis
                            <BorderColorTwoToneIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </div>

    );
}

export default Rechercher;