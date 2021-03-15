import React from 'react';
import '../Assets/Style/App.css';
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

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
export default function Nav() {
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
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link style={navStyle} to={"/"}>Accueil</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link style={navStyle} to={"/experience"}>Partager son expérience</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link style={navStyle} to={"/universite"}>Rechercher une université</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link style={navStyle} to={"/mobilite"}>Les différentes mobilités</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link style={navStyle} to={"/finance"}>Financer sa mobilité</Link>
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

