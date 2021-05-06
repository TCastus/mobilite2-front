import Navbar from "./Navbar";
import * as PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, Grid, Switch, Typography} from "@material-ui/core";
import React from "react";
import RadioSearch from "./pageRecherche/RadioSearch";
import RadioSearchDISABLED from "./pageRecherche/RadioSearchDISABLED";

Navbar.propTypes = {
    activated: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
    switch: {
        textAlign: "right",
    },
    items: {
        margin: theme.spacing(1, 'auto'),
        textAlign: 'left',
    },

}));
export default function SearchRadio({ref, name, titre, activated, number, setActivated}){
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
                    <div>
                        <FormControl component="fieldset">
                            {activated[number] ? <RadioSearch/> : <RadioSearchDISABLED />}
                        </FormControl>
                    </div>
                </Grid>
            </Grid>

        </>
    );
}