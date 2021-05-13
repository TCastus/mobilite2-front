import Navbar from "./Navbar";
import * as PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Switch, Typography} from "@material-ui/core";
import React from "react";
import DemandeChoix from "./pageRecherche/DemandeChoix";
import DemandeChoixDISABLE from "./pageRecherche/DemandeChoixDISABLE";


Navbar.propTypes = {
    ref: PropTypes.string,
    name: PropTypes.string,
    titre: PropTypes.string,
    activated: PropTypes.bool,
    number: PropTypes.number,
    setActivated: PropTypes.func
};

const useStyles = makeStyles(() => ({
    switch: {
        textAlign: "right",
    },

}));
export default function DemChoix({ref, name, titre, activated, number, setActivated}){
    const classes = useStyles();

    const handleSwitch = () => {
        const a2 = [...activated];
        a2[number] = !a2[number];
        setActivated(a2);
    };
    
    return(
        <>
            <Grid item xs={3} className={classes.switch}>
                <Grid container className={classes.items}>

                    <Switch
                        ref={ref}
                        checked={activated[number]}
                        onChange={handleSwitch}
                        name={name}
                        color="primary"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Typography variant={'h6'}>{titre}</Typography>
                </Grid>
                <Grid item xs={6}>
                    {activated[number] ? <DemandeChoix/> : <DemandeChoixDISABLE/>}
                </Grid>
            </Grid>
        </>
        
    );
}