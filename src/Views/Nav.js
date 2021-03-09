import React from 'react';
import '../Assets/Style/App.css';
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
export default function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to={"/"}>Accueil</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to={"/experience"}>Partager son expérience</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to={"/universite"}>Rechercher une université</Link>
                    </Typography>
                    <Link to={"/mobilite"}>
                        <Typography variant="h6" className={classes.title}>
                            Les différentes mobilités
                        </Typography>
                    </Link>
                    <Link to={"/finance"}>
                        <Typography variant="h6" className={classes.title}>
                            Financer sa mobilité
                        </Typography>
                    </Link>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

/*function Nav2() {
    return (
        /*<nav>
            <h3> Logo</h3>
            <ul>
                <li> Accueil</li>
                <li> Partager son expérience</li>
                <li> Rechercher une université</li>
                <li> Les différentes mobilités</li>
                <li> Financer sa mobilité</li>
            </ul>
        </nav>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );

}*/

