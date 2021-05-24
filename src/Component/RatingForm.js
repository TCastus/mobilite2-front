import React from "react";
import * as PropTypes from "prop-types";
import { Container, Grid, Typography } from "@material-ui/core";
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import {blueGrey} from "@material-ui/core/colors";
import {Controller} from "react-hook-form";

RatingForm.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
    control: PropTypes.object.isRequired,
};

const useStyles = makeStyles((theme) => ({
    ratingBox: {
        border: '2px solid white',
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "whitesmoke",
    },
}));

/**
 * A genereic rating form element in a box
 * @param title rating label
 * @param Icon label icon
 */
export default function RatingForm({title, Icon, name, control}) {
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Container maxWidth="sm">
                <Typography variant={'h6'} className={classes.ratingBox}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Icon />
                        </Grid>
                        <Grid item xs={12}>
                            {title}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                render={({ field }) => (
                                    <Rating {...field} precision={0.5} color={blueGrey}
                                        onChange={(_, value) => field.onChange(value)}/>
                                )}
                                name={name}
                                control={control}
                            />
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </Grid>
    );
}
