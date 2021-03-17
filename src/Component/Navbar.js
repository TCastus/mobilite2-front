import React from 'react';
import '../Assets/Style/App.css';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

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

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {routes.map((route, index) => {
                        return (<Typography key={"nav_" + index} variant="h6" className={classes.title}>
                            <Link to={route.path} className={classes.navitem} typographClass>{route.name}</Link>
                        </Typography>);
                    })}
                </Toolbar>
            </AppBar>
        </div>
    );
}

