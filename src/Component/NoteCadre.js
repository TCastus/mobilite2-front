import Grid from "@material-ui/core/Grid";
import {Paper, Typography} from "@material-ui/core";
import React from "react";
import * as PropTypes from "prop-types";

NoteCadre.propTypes = {
    IconOn: PropTypes.elementType.isRequired,
    IconOff: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.number.isRequired,
    cols: PropTypes.number,
};

export default function NoteCadre({IconOn, IconOff, title, note, cols}) {
    return (
        <Grid item xs={ cols === undefined ? 6 : cols }>
            <Paper>
                <Typography variant={"body1"}>{title}</Typography>
                {[1,2,3,4,5].map((value =>
                    (value <= note) ? <IconOn fontSize={"small"} /> : <IconOff fontSize={"small"} />
                ))}
            </Paper>
        </Grid>
    );
}