import '../Assets/Style/SelectionMap.css';
import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import {Button,Grid,FormControl,FormControlLabel, RadioGroup, Radio, Slider, TextField, Paper, Typography} from "@material-ui/core";

function valuetext(value) {
    return `${value}`;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        background: 'lightgrey',
        margin: theme.spacing(5),
        padding: theme.spacing(5),
        textAlign: 'center',
    },

}));

export default function SearchBox () {
    const classes = useStyles();

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange2 = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={3}>

                <Grid item xs={6}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <Typography variant={'h5'}>Rechercher par nom</Typography>
                    <br/>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Nom d'université" variant="filled" size="normal"  />
                    </form>
                    <br/>
                    <Button variant="contained" color='theme.palette.primary.light'>
                        Rechercher
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant={'h5'}>Filtrer</Typography>
                    <Typography variant={'h6'}>Note globale minimale</Typography>
                    <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                    />
                    <Typography variant={'h6'}>Sécurité</Typography>
                    <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                    />
                    <Typography variant={'h6'}>Coût de la vie</Typography>
                    <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                    />
                    <Typography variant={'h6'}>Vie nocturne</Typography>
                    <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                    />
                    <Typography variant={'h6'}>Vie culturelle</Typography>
                    <Slider
                        defaultValue={3}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={5}
                    />
                    <Typography variant={'h6'}>Pays</Typography>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Pays" variant="filled" size="small"  />
                    </form>
                    <br/>
                    <Typography variant={'h6'}>Hors Europe</Typography>
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup row aria-label="position" name="position" defaultValue="end">
                                <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'a'} onChange={handleChange2} value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}/>} label="Oui" />
                                <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'b'} onChange={handleChange2} value="b" name="radio-button-demo" inputProps={{ 'aria-label': 'B' }}/>} label="Non" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <br/>

                    <Button variant="contained" color='theme.palette.primary.light'>
                        Rechercher
                    </Button>
                </Grid>
            </Grid>

        </Paper>
    );
}