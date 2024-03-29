import React from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, Typography} from "@material-ui/core";
import PageHeader from "../Component/PageHeader";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight : '80vh',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    boxFAQ: {
        padding: 50,
        margin: -5,
        textAlign: 'center',
        borderWidth: '8px',
        borderRadius: '5px 5px 5px 5px',
        '& > *': {
            margin: theme.spacing(1, 'auto'),
        },
        fontVariantCaps: theme.fontVariantCaps.smallCaps,
        alignItems: 'center',
    },
    button: {
        margin: "10px",
    }
}));

export default function Mobilite() {
    const classes = useStyles();
    return (
        <Box component= "div" className={classes.root}>

            <PageHeader title={"Se renseigner sur les mobilités"}/>

            <Box component="div" className={classes.boxFAQ}>
                <Typography variant={'h4'}>
                    Besoin d&apos;informations supplémentaires sur les échanges ?
                </Typography>
                <Typography variant={'h5'}>
                    Consulte les informations spécifiques données par ton département
                </Typography>
            </Box>
            <Box component={"div"}>

                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.boxFAQ}>
                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=2784">
                            TC
                        </Button>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3344">
                            SGM
                        </Button>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=4303">
                            IF
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.boxFAQ}>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://intranetgm.insa-lyon.fr/international/mobilite-sortante">
                            GM
                        </Button>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3343">
                            GI
                        </Button>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3713">
                            GE
                        </Button>

                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.boxFAQ}>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=3075">
                            GEN
                        </Button>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://moodle.insa-lyon.fr/course/view.php?id=5463">
                            GCU
                        </Button>

                        <Button variant="contained" className={classes.button} color="primary" target = "_blank" href="https://intranetbs.insa-lyon.fr/content/documents-utiles-0">
                            BS
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

