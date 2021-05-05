import {Slider} from "@material-ui/core";
import React from "react";

function valuetext(value) {
    return `${value}`;
}
export default function SliderDISABLE () {
    return(
        <Slider
            defaultValue={3}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
            disabled
        />
    );
}