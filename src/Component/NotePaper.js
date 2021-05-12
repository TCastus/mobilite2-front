import Grid from "@material-ui/core/Grid";
import {Paper, Typography} from "@material-ui/core";
import React from "react";
import * as PropTypes from "prop-types";

NotePaper.propTypes = {
    IconOn: PropTypes.elementType.isRequired,
    IconOff: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.number.isRequired,
    cols: PropTypes.number,
};

/**
 * Material-UI paper as a grid element which displays a grade out of 5
 * with icons to replace stars
 * @param IconOn the icon to display for a full star
 * @param IconOff the icon to display for an empty star
 * @param title card label
 * @param note grade out of 5
 * @param cols number of columns to occupy in the grid
 * @returns {JSX.Element}
 * @constructor
 */
export default function NotePaper({IconOn, IconOff, title, note, cols}) {
    return (
        <Grid item xs={ cols === undefined ? 6 : cols }>
            <Paper>
                <Typography variant={"body1"}>{title}</Typography>
                {[1,2,3,4,5].map((value =>
                    (value <= note) ? <IconOn key={value} fontSize={"small"} /> : <IconOff key={value} fontSize={"small"} />
                ))}
            </Paper>
        </Grid>
    );
}