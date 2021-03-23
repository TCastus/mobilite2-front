// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import {Link} from "react-router-dom";
// import * as PropTypes from "prop-types";
// import GitHubIcon from '@material-ui/icons/GitHub';
// import {Container, Grid} from "@material-ui/core";
//
// // menuButton: {
// //     marginRight: theme.spacing(2),
// // },
//
// FooterAppBar.propTypes = {
//     routes: PropTypes.array.isRequired,
// };
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.primary.dark,
//         flexGrow: 1,
//     },
//
//     // footerLink: {
//     //     color: 'white',
//     //     fontSize : 16,
//     //     textDecoration: 'none',
//     //     lineHeight: 1,
//     // },
//     // TC: {
//     //     textAlign: "center",
//     // },
// }));
//
// export default function FooterAppBar({routes}) {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <Grid containter spacing={0} direction="row">
//                 <Grid item xs={2}>
//                     {routes.map((route, index) => {
//                         return (<Typography key={"nav_" + index} variant="h6">
//                             <Link to={route.path} typographClass>{route.name}</Link>
//                         </Typography>);
//                     })}
//                 </Grid>
//
//
//                 <Grid item xs={6}>
//                     <Typography>
//                         TC INSA Lyon
//                     </Typography>
//                 </Grid>
//
//                 <Grid item xs={3}>
//                     <div>
//                         <GitHubIcon />
//                         <Typography>Voir sur Github</Typography>
//                     </div>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }

import React from 'react';
import {Box, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) =>
    ({
        carre:{
            backgroundColor: '#cfe8fc',
            height: '100vh',
            marginLeft: 0,
        },

    })

);


function FooterAppBar(){
    const classes = useStyles();
    return(
        <Container maxWidth= 'md' fixed > {/* balise pour centrer*/}
            <Typography component="div" style={{ backgroundColor: '#ff0000', height: '100vh', marginLeft: 0 }} >{/ typography qui crée mes composant*/}
                <Container >
                    <div className = {classes.carre}>
                    </div>
                </Container>
            </Typography>
        </Container>
    );
}


export default FooterAppBar;