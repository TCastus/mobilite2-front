import {Grid, Slider, Typography} from "@material-ui/core";
import React from "react";
import * as PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import {makeStyles} from "@material-ui/core/styles";

SearchSlider.propTypes = {
    titre: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
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

export default function SearchSlider({titre, name, control}) {
    const classes = useStyles();

    return(
        <Grid container className={classes.items}>
            <Grid item xs={6}>
                <Typography variant={'h6'}>{titre}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <Slider
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            valueLabelDisplay="auto"
                            max={5}
                            step={1}
                        />
                    )}
                />
            </Grid>
        </Grid>
    );
}