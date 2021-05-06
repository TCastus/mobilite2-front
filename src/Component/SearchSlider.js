import {Grid, Slider, Switch, Typography} from "@material-ui/core";
import React from "react";
import SliderENABLE from "./pageRecherche/SliderENABLE";
import SliderDISABLE from "./pageRecherche/SliderDISABLE";
import * as PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

SearchSlider.propTypes = {
    name: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    activated: PropTypes.array.isRequired,
    number: PropTypes.number.isRequired,
    setActivated: PropTypes.func.isRequired,
    sliderValues: PropTypes.array.isRequired,
    setSliderValues: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
    items: {
        margin: theme.spacing(1, 'auto'),
        textAlign: 'left',
    },
    switch: {
        textAlign: "right",
    },

}));

export default function SearchSlider({name, titre, activated, number, setActivated, sliderValues, setSliderValues}) {
    const classes = useStyles();

    const handleSwitch = () => {
        const a2 = [...activated];
        a2[number] = !a2[number];
        setActivated(a2);
    };

    return(
        <Grid container className={classes.items}>
            <Grid item xs={3} className={classes.switch}>
                <Switch
                    checked={activated[number]}
                    onChange={handleSwitch}
                    name={name}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Grid>
            <Grid item xs={3}>
                <Typography variant={'h6'}>{titre}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={5}
                    marks
                    disabled={activated[number]}
                />
            </Grid>
        </Grid>
    );
}