import React from 'react';
import '../Assets/Style/App.css';
import {AppBar, makeStyles, SvgIcon, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import PlaneIcon from "../Assets/Icon/PlaneIcon";

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
                    <PlaneIcon />

                    <SvgIcon>
                        <path d="m444.336 213.712-44.91 44.91 25.626 101.652 82.923-82.923z" fill="#2f374f"/>
                        <path d="m232.203 1.58-82.105 82.106 100.762 26.517 44.983-44.984z" fill="#3b5a71"/>
                        <path d="m31.092 294.616-31.092 31.091 113.369 73.134 63.632-113.343z" fill="#4bb9ec"/>
                        <path d="m107.963 392.181 72.349 113.837 31.091-31.089 9.119-145.911z" fill="#1982bf"/>
                        <path d="m398.505 152.037-114.364 123.511 143.284 230.847 55.061-55.063z" fill="#1982bf"/>
                        <path d="m58.095 27.197-55.002 55 230.916 143.214 123.523-114.372z" fill="#4bb9ec"/>
                        <path d="m492.045 14.06-385.37 385.37-13.73-13.72 13.25-33.83c18.14-41.22 37.35-70.73 62.31-95.68l187.16-187.16c24.31-24.31 56.06-44.96 94.35-61.38l3.46-1.48c13.05-5.59 27.97-2.72 38.02 7.32z" fill="#edf5ff"/>
                        <path d="m502.345 55.05c-14.41 33.64-31.85 68.87-61.61 98.62l-187.38 187.38c-29.39 29.39-63.85 46.82-96.71 61.28l-.57.24-33.25 13.01-16.15-16.15 385.37-385.37 2.98 2.98c10.04 10.04 12.92 24.96 7.32 38.01z" fill="#d5e8fe"/>
                    </SvgIcon>

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

