import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },

    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    navitem: {
        color: 'white',
        fontSize : 16,
        textDecoration: 'none',
        lineHeight: 1
    }

}));

export default function BottomAppBar({routes}) {
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