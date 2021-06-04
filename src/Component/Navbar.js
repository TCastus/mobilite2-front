import React from 'react';
import {
    AppBar, Drawer, Hidden, IconButton, List, ListItem,
    ListItemIcon, ListItemText, makeStyles, Toolbar, Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import MenuIcon from '@material-ui/icons/Menu';

import '../Assets/Style/App.css';
import plane from '../Assets/Icon/plane.png';

Navbar.propTypes = {
    routes: PropTypes.array.isRequired,
};

const useStyles = makeStyles((theme) => {
    return ({
        toolbar: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        mobititle: {
            [theme.breakpoints.up("md")] : {
                marginRight: theme.spacing(6)
            },
            fontWeight: theme.fontType.bold,
            color: theme.palette.third.white,
        },
        link: {
            color: theme.palette.third.white,
            fontSize : 16,
            textDecoration: 'none',
            lineHeight: 1,
            margin: theme.spacing(2),
        },
        drawerTitle: {
            minWidth: "240px",
            padding: theme.spacing(1),
        }
    });
});

/**
 * Navbar component, rendered from the routeIndex.navigation list,
 * passed as a prop
 */
export default function Navbar({routes}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>

                    <Hidden mdUp>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <img src={plane} height={"30px"} style={{paddingRight: '20px'}} alt={"Airplane"} />
                    <Typography variant={"h6"} className={classes.mobititle} component={Link} to={"/"}>Mobilités internationales</Typography>

                    <Hidden smDown>
                        {routes.map((route, index) => {
                            return (
                                <Typography key={"nav_" + index} variant="h6" className={classes.link} component={Link} to={route.path}>
                                    {route.name}
                                </Typography>);
                        })}
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >

                    <Typography variant={"h6"} className={classes.drawerTitle}>
                        <img src={plane} height={"30"} width={"30"} alt={"Airplane"} style={{verticalAlign: "middle", margin: "10px"}}/>
                        Mobilités internationales
                    </Typography>

                    <List>
                        {routes.map((route, index) => {
                            return (
                                <ListItem button key={"nav_" + index} component={Link} to={route.path}>
                                    <ListItemIcon>{route.icon}</ListItemIcon>
                                    <ListItemText primary={route.name} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Drawer>
            </Hidden>
        </div>
    );
}