import * as PropTypes from "prop-types";
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';

import {Box, Grid, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";
import BorderColorTwoToneIcon from "@material-ui/icons/BorderColorTwoTone";

FooterAppBar.propTypes = {
    routes: PropTypes.array.isRequired,
};
const useStyles = makeStyles((theme) =>
    ({
        footer: {
            backgroundColor: theme.palette.secondary.light,
            padding: theme.spacing(2),
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",

        },
        shareExp: {
            backgroundColor: theme.palette.third.darkGrey,
            color: theme.palette.third.gold,
            padding: theme.spacing(3),
            display: "flex",
            alignItems: "center",

        },
        avisButton: {
            marginTop: theme.spacing(3),
        },
        github: {
            color: theme.palette.secondary.contrastText,
        },
        links: {
            textAlign: "left",

        },
        link: {
            color: theme.palette.primary.dark,
        },
    })
);


function FooterAppBar({routes}) {
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.shareExp}>
                <Grid container spacing={1}>
                    <Grid item sm={6} style={{display: "flex", alignItems:"center", textAlign:"center", fontVariantCaps: 'small-caps', textDecoration:'underline'}}>
                        <Typography component={Link} to={"experience"} variant={'h4'} style={{color: '#c59b08', margin:'0 auto'}}>Partagez votre expérience
                        </Typography>
                    </Grid>

                    <Grid item sm={6}>
                        <Typography variant={'h6'} style={{textAlign: 'left'}}>
                            Vous êtes partis en d&apos;échange ? Aidez les étudiants dans leur choix en partageant votre expérience et en répondant à leurs questions.
                        </Typography>
                    </Grid>

                    <Grid item sm={6} style={{alignItems:"center"}}>
                        <BorderColorTwoToneIcon />
                    </Grid>
                </Grid>
            </Box>

            <Box className={classes.footer}>
                <div className={classes.links}>
                    {routes.map((route, index) => {
                        return (<Typography key={"nav_" + index} variant="h6">
                            <Link to={route.path} className={classes.link}>{route.name}</Link>
                        </Typography>);
                    })}
                </div>

                <Typography variant={"h6"}>TC INSA Lyon, 2021</Typography>

                <div className={classes.github}>
                    <a href={"https://github.com/TCastus/mobilite2-front"}><Typography className={classes.github} variant={"h6"}> Voir sur
                        Github <GitHubIcon/> </Typography></a>
                </div>
            </Box>
        </>
    );
}

export default FooterAppBar;