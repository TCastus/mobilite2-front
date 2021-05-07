import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {blueGrey} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import '../Assets/Style/style.css';
import SecurityIcon from '@material-ui/icons/Security';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import {Container, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import PageHeader from "../Component/PageHeader";

const useStyles = makeStyles((theme) => ({
    avis: {
        textAlign: 'center',
        margin: '0px',
        padding: 2,
        height: '20vh',
    },

    Box: {
        border: '2px solid white',
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "whitesmoke",

    },
    Box2: {
        color: theme.palette.secondary,
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "lightgrey",
        textAlign: "center",
    },

    BoxWhite: {
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        background: "white",
        width: '400px'

    },


    items:{
        margin: theme.spacing(1, 'auto'),
    },

}));



export default function Experience() {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange2 = (event) => {
        setSelectedValue(event.target.value);
    };

    const [value, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div className={classes.root}>
            <PageHeader title={"Partagez votre expérience"}/>
            <Container maxWidth="md">
                <Box component="div" className="header">
                    <Box component="div">
                        <Grid component="div" className={classes.Box} >
                            <Typography variant={'h4'} className={classes.items}>Vous revenez d&apos;échange ?</Typography>
                            <Typography variant={'h5'} className={classes.items}>Remplissez le formulaire ci-dessous et aidez les futures<br/> générations à faire leur choix !</Typography>

                            <Grid container className={classes.items}>
                                <Grid item xs={6}>
                                    <Grid container spacing={1} className={classes.items}>
                                        <Grid item xs={12} spacing={3}>
                                            <Typography> Prénom </Typography>
                                            <Input type="text" name="Prénom" id="Prénom" placeholder="Votre prénom"/>
                                        </Grid>
                                        <Grid item xs={12} spacing={3}>
                                            <Typography> Nom de famille </Typography>
                                            <Input type="text" name="Nom de Famille" id="Nom de Famille" placeholder="Votre nom"/>
                                        </Grid>
                                        <Grid item xs={12} spacing={3}>
                                            <Typography id="depart">Département</Typography>
                                            <Select labelId="depart" id="select" value={value} open={open} onClose={handleClose} onOpen={handleOpen} onChange={handleChange}>
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
                                            <Input type="text" name="Annee" id="Annee" placeholder="ex : 2016"/>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6} spacing={3}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography> Commentaire </Typography>
                                            <TextField className={classes.BoxWhite} style={{textAlign: 'left'}} placeholder="ex : J'ai beaucoup aimé cet échange, j'ai très bien été acceuilli..." hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel" multiline rows={5}/>
                                        </Grid>
                                        <Grid item xs={12} spacing={3} className={classes.items}>
                                            <Typography>Email</Typography>
                                            <Input type="text" name="Email" id="Email" placeholder="ex : toto@email.fr"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography textAlign="center">
                                                Souhaitez-vous que nous partagions votre e-mail<br/>
                                                aux élèves intéressés par votre échange souhaitant vous poser des questions ?
                                            </Typography>
                                            <FormControl component="fieldset">
                                                <RadioGroup row aria-label="position" name="position" defaultValue="end">
                                                    <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'a'} onChange={handleChange2} value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}/>} label="Oui" />
                                                    <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'b'} onChange={handleChange2} value="b" name="radio-button-demo" inputProps={{ 'aria-label': 'B' }}/>} label="Non" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>

                    <Box component="div" maxWidth="sm">
                        <Grid container className={classes.Box2}>
                            <Grid item xs={3}>
                                <Container maxWidth="md">
                                    <Typography variant={'h6'} className={classes.Box}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <SecurityIcon> </SecurityIcon>
                                            </Grid>
                                            <Grid item xs={12}>
                                                Sécurité
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Rating id="sécu" name="hover-feedback" /*value={value} */ precision={0.5}/>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container maxWidth="sm">
                                    <Typography variant={'h6'} className={classes.Box}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <AttachMoneyIcon> </AttachMoneyIcon>
                                            </Grid>
                                            <Grid item xs={12}>
                                                Coût de la vie
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Rating id="cout" name="hover-feedback2"/*value={value}*/ precision={0.5} color={blueGrey}/>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container maxWidth="sm">
                                    <Typography variant={'h6'} className={classes.Box}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <AccountBoxIcon> </AccountBoxIcon>
                                            </Grid>
                                            <Grid item xs={12}>
                                                Vie culturelle
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Rating id="social" name="hover-feedback3"/*value={value}*/ precision={0.5} color={blueGrey}/>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={3}>
                                <Container maxWidth="sm">
                                    <Typography variant={'h6'} className={classes.Box}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <EmojiPeopleIcon> </EmojiPeopleIcon>
                                            </Grid>
                                            <Grid item xs={12}>
                                                Vie nocturne
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Rating id="nuit" name="hover-feedback4"/*value={value}*/ precision={0.5} color={blueGrey}/>
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </Container>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={'h4'}>
                                    Note globale
                                    <Grid item xs={12}>
                                        <Rating id="note" name="hover-feedback5"/*value={value}*/ precision={0.5} color={blueGrey}/>
                                    </Grid>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.items}>
                                <Box component="div">
                                    <Button aria-label="submit" variant="contained" edge="start" color="secondary" component="span">
                                        <InputLabel> Submit </InputLabel>
                                        <SendIcon/>
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}