import '../Assets/Style/SelectionMap.css';
import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import {Button,Grid,FormControl,FormControlLabel,Switch, RadioGroup, Radio, Slider, TextField,MenuItem, Paper, Typography} from "@material-ui/core";

function valuetext(value) {
    return `${value}`;
}
const currencies = [
    {
        value: 'Choisir',
        label: 'Choisir un département',
    },
    {
        value: 'TC',
        label: 'Télécomunications, Services et Usages',
    },
    {
        value: 'BIM',
        label: 'Bioscience BIM',
    },
    {
        value: 'BB',
        label: 'Biosciences BB',
    },
    {
        value: 'GCU',
        label: 'Génie Civil et Urbanisme',
    },
    {
        value: 'GEn',
        label: 'Génie Energétique et Environnement',
    },
    {
        value: 'GM',
        label: 'Génie Mécanique',
    },
    {
        value: 'IF',
        label: 'Informatique',
    },
    {
        value: 'GE',
        label: 'Génie Electrique',
    },
    {
        value: 'GI',
        label: 'Génie Industriel',
    },
    {
        value: 'SGM',
        label: 'Science et Génie des Matériaux',
    },
];

const currencies2 = [
    {
        value: 'Choisir',
        label: 'Choisir un niveau de demande',
    },
    {
        value: 'Faible',
        label: 'Demande Faible',
    },
    {
        value: 'Moyen',
        label: 'Demande Moyenne',
    },
    {
        value: 'Fort',
        label: 'Demande Forte',
    },

];

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

    const [currency, setCurrency] = React.useState('Choisir');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const [currency2, setCurrency2] = React.useState('Choisir');

    const handleChange3 = (event) => {
        setCurrency2(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedValue(event.target.value);
    };

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
        checkedF: true,
        checkedG: true,
        checkedH: true,
        checkedI: true,
    });

    const handleSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={'h5'}>Rechercher par nom</Typography>
                    <br/>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Nom d'université" variant="filled" size="normal"  />
                    </form>
                    <br/>
                    <Button variant="contained" color='theme.palette.primary.light'>
                        Rechercher
                    </Button>
                    <br/>
                </Grid>



                <Grid item xs={12}>
                    <Typography variant={'h5'}>Filtrer</Typography>
                </Grid>



                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedA}
                                onChange={handleSwitch}
                                name="checkedA"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />

                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Note globale</Typography>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedB}
                                onChange={handleSwitch}
                                name="checkedB"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />

                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Sécurité</Typography>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedC}
                                onChange={handleSwitch}
                                name="checkedC"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Coût de la vie</Typography>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedD}
                                onChange={handleSwitch}
                                name="checkedD"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Vie nocturne</Typography>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedE}
                                onChange={handleSwitch}
                                name="checkedE"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Vie culturelle</Typography>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                    </Grid>

                </Grid>



                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedF}
                                onChange={handleSwitch}
                                name="checkedF"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Pays</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Pays" variant="filled" size="small"  />
                            </form>
                        </Grid>
                    </Grid>


                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedG}
                                onChange={handleSwitch}
                                name="checkedG"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Hors Europe</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <FormControl component="fieldset">
                                    <RadioGroup row aria-label="position" name="position" defaultValue="end">
                                        <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'a'} onChange={handleChange2} value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}/>} label="Oui" />
                                        <FormControlLabel value="end" control={<Radio color="primary" checked={selectedValue === 'b'} onChange={handleChange2} value="b" name="radio-button-demo" inputProps={{ 'aria-label': 'B' }}/>} label="Non" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </Grid>
                    </Grid>


                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedH}
                                onChange={handleSwitch}
                                name="checkedH"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Demande</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Demande"
                                value={currency2}
                                onChange={handleChange3}
                                variant="filled"
                            >
                                {currencies2.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>

                    <Grid container>
                        <Grid item xs={3}>
                            <Switch
                                checked={state.checkedI}
                                onChange={handleSwitch}
                                name="checkedI"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Département</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Département"
                                value={currency}
                                onChange={handleChange}
                                variant="filled"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>

                </Grid>


                <Grid item xs={12}>
                    <Button variant="contained" color='theme.palette.primary.light'>
                        Rechercher
                    </Button>
                </Grid>
            </Grid>

        </Paper>
    );
}