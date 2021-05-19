import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box, Grid, MenuItem, Typography,
    RadioGroup, FormControlLabel, Radio, Select,
    Container, TextField, Button
} from "@material-ui/core";
import {
    Security as SecurityIcon,
    AccountBox as AccountBoxIcon,
    AttachMoney as AttachMoneyIcon,
    EmojiPeople as EmojiPeopleIcon,
    Send as SendIcon
} from '@material-ui/icons';

import PageHeader from "../Component/PageHeader";
import RatingForm from "../Component/RatingForm";
import {useForm, Controller} from "react-hook-form";


const useStyles = makeStyles((theme) => ({
    grid: {
        border: '2px solid white',
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "whitesmoke",

    },
    ratingsGrid: {
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "lightgrey",
    },
    comment: {
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        background: "white",

    },
    items:{
        margin: theme.spacing(1, 'auto'),
    },
}));

const departments = [
    "BB",
    "BIM",
    "GCU",
    "GE",
    "GEN",
    "GI",
    "GM",
    "IF",
    "SGM",
    "TC"
];

const defaultValues = {
    surname: "",
    name: "",
    department: "BB",
    year: 2020,
    comment:"",
    contact: "false",
    email: "",
    security: 0,
    cost_of_living: 0,
    culture: 0,
    night_life: 0,

    // MISSING FROM THE FORM
    mobility_type: "DD",
    univ_appartment: "false",
    rent: 0,
    visa: "false",
    courses_difficulty: 0,
    student_proximity: 0,
    courses_interest: 0,
    university: 0,
    semester: "4A-S1"
};

export default function Experience() {
    const classes = useStyles();
    const { handleSubmit, control } = useForm({defaultValues});

    const submitForm = (form) => {
        console.log(form);
    };

    return (
        <>
            <PageHeader title={"Partagez votre expérience"}/>

            <Container maxWidth="md">
                <form onSubmit={handleSubmit(submitForm)}>
                    <Box component="div" className="header">
                        <Box component="div">
                            <Grid component="div" className={classes.grid} >
                                <Typography variant={'h4'} className={classes.items}>Vous revenez d&apos;échange ?</Typography>
                                <Typography variant={'h5'} className={classes.items}>Remplissez le formulaire ci-dessous et aidez les futures<br/> générations à faire leur choix !</Typography>
                                <Grid container className={classes.items}>
                                    <Grid item xs={6}>
                                        <Grid container spacing={1} className={classes.items}>

                                            <Grid item xs={12}>
                                                <Typography> Prénom </Typography>
                                                <Controller
                                                    render={({ field }) => <TextField placeholder="Éric" {...field} />}
                                                    name="surname"
                                                    control={control}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Typography> Nom de famille </Typography>
                                                <Controller
                                                    render={({ field }) => <TextField placeholder="Maurincomme" {...field} />}
                                                    name="name"
                                                    control={control}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Typography id="depart">Département</Typography>
                                                <Controller
                                                    render={({ field }) => (
                                                        <Select {...field}>
                                                            {departments.map((dep) => <MenuItem key={dep} value={dep}>{dep}</MenuItem>)}
                                                        </Select>
                                                    )}
                                                    name="department"
                                                    control={control}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography>Année d&apos;échange </Typography>
                                                <Controller
                                                    render={({ field }) =>
                                                        <TextField type="number" {...field} />}
                                                    name="year"
                                                    control={control}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography> Commentaire </Typography>
                                                <Controller
                                                    render={({ field }) =>
                                                        <TextField className={classes.comment} style={{textAlign: 'left'}}
                                                            placeholder="ex : J'ai beaucoup aimé cet échange, j'ai très bien été acceuilli..."
                                                            multiline rows={5} {...field} />}
                                                    name="comment"
                                                    control={control}
                                                />
                                            </Grid>
                                            <Grid item xs={12} className={classes.items}>
                                                <Typography>Email</Typography>
                                                <Controller
                                                    render={({ field }) =>
                                                        <TextField type="email" {...field} />}
                                                    name="email"
                                                    placeholder="eric.maurincomme@insa-lyon.fr"
                                                    control={control}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography>
                                                    Souhaitez-vous que nous partagions votre e-mail<br/>
                                                    aux élèves intéressés par votre échange souhaitant vous poser des questions ?
                                                </Typography>
                                                <Controller
                                                    render={({ field }) => (
                                                        <RadioGroup aria-label="contact" {...field}>
                                                            <FormControlLabel value={"false"} control={<Radio color="primary"/>} label="Non"/>
                                                            <FormControlLabel value={"true"} control={<Radio color="primary"/>} label="Oui"/>
                                                        </RadioGroup>
                                                    )}
                                                    name="contact"
                                                    control={control}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Box>

                        <Box component="div" maxWidth="sm">
                            <Grid container className={classes.ratingsGrid}>

                                <RatingForm control={control} title="Sécurité" name="security" Icon={SecurityIcon} />
                                <RatingForm control={control} title="Coût de la vie" name="cost_of_living" Icon={AttachMoneyIcon} />
                                <RatingForm control={control} title="Vie culturelle" name="culture" Icon={AccountBoxIcon} />
                                <RatingForm control={control} title="Vie nocturne" name="night_life" Icon={EmojiPeopleIcon} />


                                <Grid item xs={12} className={classes.items}>
                                    <Button variant="contained" color="secondary" type="submit">
                                        Envoyer  <SendIcon fontSize={"small"}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </form>
            </Container>
        </>
    );
}