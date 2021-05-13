import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {blueGrey} from "@material-ui/core/colors";
import {Box, Grid, MenuItem, Typography, FormControl,
    RadioGroup, FormControlLabel, Radio, InputLabel, Select,
    Input, Container, TextField} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { Security as SecurityIcon,
    AccountBox as AccountBoxIcon,
    AttachMoney as AttachMoneyIcon,
    EmojiPeople as EmojiPeopleIcon,
    Send as SendIcon } from '@material-ui/icons';

import PageHeader from "../Component/PageHeader";
import RatingForm from "../Component/RatingForm";


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
        color: theme.palette.secondary,
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "lightgrey",
        textAlign: "center",
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

export default function Experience() {
    const classes = useStyles();

    return (
        <>
            <PageHeader title={"Partagez votre expérience"}/>

            <Container maxWidth="md">
                <form>
                    <Box component="div" className="header">
                        <Box component="div">
                            <Grid component="div" className={classes.grid} >
                                <Typography variant={'h4'} className={classes.items}>Vous revenez d&apos;échange ?</Typography>
                                <Typography variant={'h5'} className={classes.items}>Remplissez le formulaire ci-dessous et aidez les futures<br/> générations à faire leur choix !</Typography>
                                <Grid container className={classes.items}>
                                    <Grid item xs={6}>
                                        <Grid container spacing={1} className={classes.items}>

                                            <Grid item xs={12} spacing={3}>
                                                <Typography> Prénom </Typography>
                                                <Input name="Prénom" type="text" id="prenom" placeholder="Votre prénom"/>
                                            </Grid>

                                            <Grid item xs={12} spacing={3}>
                                                <Typography> Nom de famille </Typography>
                                                <Input name="Nom" type="text" id="nom" placeholder="Votre nom"/>
                                            </Grid>

                                            <Grid item xs={12} spacing={3}>
                                                <Typography id="depart">Département</Typography>
                                                <Select labelId="depart" type="depart" id="select">
                                                    <MenuItem value="10">TC</MenuItem>
                                                    <MenuItem value="20">IF</MenuItem>
                                                    <MenuItem value="30">BS</MenuItem>
                                                    <MenuItem value="40">SGM</MenuItem>
                                                    <MenuItem value="50">GCU</MenuItem>
                                                    <MenuItem value="60">GE</MenuItem>
                                                    <MenuItem value="70">GEN</MenuItem>
                                                    <MenuItem value="80">GI</MenuItem>
                                                    <MenuItem value="90">GM</MenuItem>
                                                </Select>
                                            </Grid>
                                            <Grid item xs={12} spacing={3}>
                                                <Typography>Année d&apos;échange </Typography>
                                                <Input type="number" name="Annee" id="Annee" placeholder="ex : 2016"/>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={6} spacing={3}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography> Commentaire </Typography>
                                                <TextField className={classes.comment} style={{textAlign: 'left'}} placeholder="ex : J'ai beaucoup aimé cet échange, j'ai très bien été acceuilli..." hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel" multiline rows={5}/>
                                            </Grid>
                                            <Grid item xs={12} spacing={3} className={classes.items}>
                                                <Typography>Email</Typography>
                                                <Input type="email" name="Email" id="Email" placeholder="ex : toto@gmail.com"/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography textAlign="center">
                                                    Souhaitez-vous que nous partagions votre e-mail<br/>
                                                    aux élèves intéressés par votre échange souhaitant vous poser des questions ?
                                                </Typography>
                                                <FormControl component="fieldset">
                                                    <RadioGroup row aria-label="position" name="position" defaultValue="end">
                                                        <FormControlLabel value="end" control={<Radio color="primary" value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}/>} label="Oui" />
                                                        <FormControlLabel value="end" control={<Radio color="primary" value="b" name="radio-button-demo" inputProps={{ 'aria-label': 'B' }}/>} label="Non" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Box>

                        <Box component="div" maxWidth="sm">
                            <Grid container className={classes.ratingsGrid}>

                                <RatingForm title={"Sécurité"} Icon={SecurityIcon} />
                                <RatingForm title={"Coût de la vie"} Icon={AttachMoneyIcon} />
                                <RatingForm title={"Vie culturelle"} Icon={AccountBoxIcon} />
                                <RatingForm title={"Vie nocturne"} Icon={EmojiPeopleIcon} />


                                <Grid item xs={12}>
                                    <Typography variant={'h4'}>
                                        Note globale
                                        <Grid item xs={12}>
                                            <Rating id="note" name="hover-feedback5" precision={0.5} color={blueGrey}/>
                                        </Grid>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.items}>
                                    <Box component="div">
                                        <Input aria-label="submit" variant="contained" edge="start" color="secondary" component="span" type="submit">
                                            <InputLabel> Submit </InputLabel>
                                            <SendIcon/>
                                        </Input>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </form>
            </Container>
        </>
    );
}