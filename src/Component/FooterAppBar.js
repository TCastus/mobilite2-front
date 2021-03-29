import * as PropTypes from "prop-types";
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';

import {Box, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

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
            alignItems:"center"
        },
        github: {
            color: theme.palette.secondary.contrastText,
        },
        links: {
            textAlign: "left",

        },
        link: {
            color: theme.palette.primary.dark,
        }

    })
);


function FooterAppBar({routes}) {
    const classes = useStyles();
    return (
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
                <a href={"https://github.com/TCastus/mobilite2-front"}><Typography className={classes.github} variant={"body1"}> Voir sur
                    Github <GitHubIcon/> </Typography></a>
            </div>
        </Box>
    );
}


export default FooterAppBar;