import React from "react";
import * as PropTypes from "prop-types";
import {Box, Typography} from "@material-ui/core";
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import backgroundMapImg from "../Assets/images/map_background.png";

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundImage: `url(${backgroundMapImg})`,
        backgroundClip: 'border-box',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(5),
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '4em',
    },
    subtitle: {
        color: 'white',
        fontSize: '1.8em',
    },
}));

/**
 * Page header with a title and subtitle, to be called at the top of pages
 * @param title a string, the title
 * @param subtitle a string for the subtitle
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageHeader({title, subtitle}) {
    const classes = useStyles();

    return (
        <Box className={classes.header}>
            <Typography variant={"h1"} className={classes.title}>{title}</Typography>
            {subtitle ? <Typography variant={"h2"} className={classes.subtitle}>{subtitle}</Typography> :<></>}
        </Box>
    );
}