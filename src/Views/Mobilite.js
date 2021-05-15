import React from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, Typography} from "@material-ui/core";
import PlaneIcon from "../Assets/Icon/PlaneIcon";
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
    boxFAQ: {
        backgroundColor: 'whitesmoke',
        padding: 10,
        textAlign: 'center',
        borderWidth: '8px',
        borderRadius: '5px 5px 5px 5px',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



export default function Mobilite() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <PageHeader title={"Les différentes mobilités"}/>

            <Box component="div" className={classes.boxFAQ}>
                <Typography variant={'h4'}>
                    Besoin d&apos;informations supplémentaires sur les échanges ?
                </Typography>
                <Typography variant={'h5'}>
                    Découvre les informations essentielles que tu dois savoir spécifiques à ton département !
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.boxFAQ}>
                        <Button variant="contained" color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/mod/page/view.php?id=12790">
                            TC
                        </Button>

                        <Button variant="contained" color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3344">
                            SGM
                        </Button>

                        <Button variant="contained" color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=4303">
                            IF
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.boxFAQ}>

                        <Button variant="contained" color="primary" target = "_blank" href="https://intranetgm.insa-lyon.fr/international/mobilite-sortante">
                            GM
                        </Button>

                        <Button variant="contained" color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3343">
                            GI
                        </Button>

                        <Button variant="contained" color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3713">
                            GE
                        </Button>

                    </Grid>
                </Grid>
                <Grid container spacing={3}  >
                    <Grid item xs={12} className={classes.boxFAQ}>

                        <Button variant="contained" color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3075">
                            GEN
                        </Button>

                        <Button variant="contained" color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=5463">
                            GCU
                        </Button>

                        <Button variant="contained" color="primary" target = "_blank" href="https://intranetbs.insa-lyon.fr/content/documents-utiles-0">
                            BS
                        </Button>
                    </Grid>
                </Grid>



            </Box>
            <Box component="div" className={classes.shareExp}>
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

