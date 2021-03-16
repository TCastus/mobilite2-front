import React from 'react';
import '../Assets/Style/App.css';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

// The prop-types module creates requirements for props of components
Nav.propTypes = {
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
    });
});

export default function Nav({routes}) {
    const classes = useStyles();
    const navStyle = {
        color: 'white',
        fontSize : 16,
        textDecoration: 'none',
        lineHeight: 1

    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {routes.map((route, index) => {
                        return (<Typography key={"nav_" + index} variant="h6" className={classes.title}>
                            <Link style={navStyle} to={route.path}>{route.name}</Link>
                        </Typography>);
                    })}
                </Toolbar>
            </AppBar>
        </div>
    );
}

