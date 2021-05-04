import React, {useState} from 'react';
import '../Assets/Style/App.css';
import {
    AppBar, Collapse,
    Fade, FormControlLabel,
    Grow,
    Hidden,
    IconButton,
    makeStyles,
    Paper,
    Switch,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import MenuIcon from '@material-ui/icons/Menu';

// The prop-types module creates requirements for props of components
Navbar.propTypes = {
    routes: PropTypes.array.isRequired,
};

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        navitem: {
            color: 'white',
            fontSize : 16,
            textDecoration: 'none',
            lineHeight: 1
        }
    });
});

/**
 * Navbar component, rendered from the routeIndex.navigation list,
 * passed as a prop
 */
export default function Navbar({routes}) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Hidden xsDown>
                        {routes.map((route, index) => {
                            return (<Typography key={"nav_" + index} variant="h6" className={classes.title}>
                                <Link to={route.path} className={classes.navitem} typographClass>{route.name}</Link>
                            </Typography>);
                        })}
                    </Hidden>

                    <Hidden mdUp>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleChange}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Collapse in={checked}>
                <Paper elevation={4} className={classes.paper}>
                    {routes.map((route, index) => {
                        console.log(route);
                        return (<Typography key={"nav_small_" + index} variant="h6">
                            <Link to={route.path} typographClass>{route.name}</Link>
                        </Typography>);
                    })}
                </Paper>
            </Collapse>
        </div>
    );
}

