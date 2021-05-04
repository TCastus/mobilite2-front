import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {blueGrey} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import '../Assets/Style/style.css';
import SecurityIcon from '@material-ui/icons/Security';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {TextField} from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
    title: {
        height: '12vh',
        color: theme.palette.primary.light,
        background: 'rgba(100,100,100,100)',
        margin: '0px',
        padding: 2,
        textAlign: 'center',
        backgroundImage: `url("../Assets/images/plane.svg")`,


    },

    avis: {
        textAlign: 'center',
        margin: '0px',
        padding: 2,
        height: '20vh',
    },

    Box: {
        border: '2px solid white',
        color: theme.palette.secondary,
        padding: 10,
        //textAlign: 'center',
        //width: '200px',
        //height: '200px',
        margin: '20px',
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "whitesmoke",
    },

    BoxWhite: {
        border: '2px solid black',
        color: theme.palette.secondary,
        //padding: 20,
        //textAlign: 'center',
        //margin: '24px',
        //borderWidth: '3px',
        //borderRadius: '0px 0px 10px 0px',
        background: 'white',
        width: '400px'

    }

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
        <Box component="div" className="header">
            <Box component="div" className= "note">
                <Typography>PARTAGER SON EXPERIENCE
                </Typography>
            </Box>

            <Box component="div">
                <Grid component="div" className={classes.Box} background="white">
                    <Grid container spacing={1}>
                        <Grid item xs={12} spacing={3}>
                            <InputLabel htmlFor="Prénom :" color="black">Prenom </InputLabel>
                            <Input type="text" name="Prénom" id="Prénom" placeholder="Votre pseudo"/>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <InputLabel htmlFor="Nom de Famille :">Nom de Famille </InputLabel>
                            <Input type="text" name="Nom de Famille" id="Nom de Famille" placeholder="Nom"/>
                        </Grid>
                        <Grid item xs={12} spacing={3}>
                            <InputLabel id="depart">Département</InputLabel>
                            <Select labelId="depart" id="select" value={value} open={open} onClose={handleClose} onOpen={handleOpen} onChange={handleChange}
                            >
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
                            <InputLabel textAlign="center">Souhaitez-vous que nous partagions votre e-mail
                                aux élèves intéressés par votre échange souhaitant vous poser des questions
                                ? </InputLabel>
                            <FormControl component="fieldset">
                                <RadioGroup row aria-label="position" name="position" defaultValue="end">
                                    <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'a'} onChange={handleChange2} value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}/>} label="Oui" />
                                    <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'b'} onChange={handleChange2} value="b" name="radio-button-demo" inputProps={{ 'aria-label': 'B' }}/>} label="Non" />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                    </Grid>
                </Grid>

            </Box>

            <Box component="div">
                <Typography className={classes.Box}>
                    <SecurityIcon></SecurityIcon>
                    <InputLabel htmlFor="sécu"> Sécurité </InputLabel>
                    <br/>
                    <Rating id="sécu"
                        name="hover-feedback"
                        //value={value}
                        precision={0.5}

                    />
                    <br/>
                    <AccountBoxIcon></AccountBoxIcon>
                    <InputLabel htmlFor="social"> Contact Humain </InputLabel>
                    <br/>
                    <Rating id="social" name="hover-feedback2"
                        //value={value}
                        precision={0.5}
                        color={blueGrey}

                    />
                    <br/>
                </Typography>
            </Box>

            <Box component="div" className={classes.Box}>
                <Typography>
                    Commentaire
                </Typography>
                <br/>
                <TextField className={classes.BoxWhite} style={{textAlign: 'left'}} hintText="Message Field"
                    floatingLabelText="MultiLine and FloatingLabel" multiline rows={5}/>
            </Box>

            <Box component="div">
                <Button aria-label="submit" variant="contained" edge="start" color="secondary" component="span">
                    <InputLabel> Submit </InputLabel>
                    <SendIcon/>
                </Button>
            </Box>
        </Box>


    );
}