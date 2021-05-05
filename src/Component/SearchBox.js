import '../Assets/Style/SelectionMap.css';
import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import {Button,Grid,FormControl,Switch,TextField, Paper, Typography} from "@material-ui/core";
import SliderENABLE from "../Component/SliderENABLE";
import SliderDISABLE from "../Component/SliderDISABLE";
import TextFieldPays from "../Component/TextFieldPays";
import TextFieldPaysDISABLED from "../Component/TextFieldPaysDISABLED";
import RadioSearch from "../Component/RadioSearch";
import RadioSearchDISABLED from "../Component/RadioSearchDISABLED";
import DepartChoix from "../Component/DepartChoix";
import DepartChoixDISABLE from "../Component/DepartChoixDISABLE";
import DemandeChoix from "../Component/DemandeChoix";
import DemandeChoixDISABLE from "../Component/DemandeChoixDISABLE";


function sliderState(bool){
    if (bool === true){
        return (<SliderENABLE/>);
    } else {
        return (<SliderDISABLE/>);
    }
}

function textFieldState(bool){
    if (bool === true){
        return (<TextFieldPays/>);
    } else {
        return (<TextFieldPaysDISABLED/>);
    }
}

function radioState(bool){
    if (bool === true){
        return (<RadioSearch/>);
    } else {
        return (<RadioSearchDISABLED/>);
    }
}
function demandeState(bool){
    if (bool === true){
        return (<DemandeChoix/>);
    } else {
        return (<DemandeChoixDISABLE/>);
    }
}

function departState(bool){
    if (bool === true){
        return (<DepartChoix/>);
    } else {
        return (<DepartChoixDISABLE/>);
    }
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
                            {sliderState(state.checkedA)}
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
                            {sliderState(state.checkedB)}
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
                            {sliderState(state.checkedC)}
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
                            {sliderState(state.checkedD)}
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
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Vie culturelle</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {sliderState(state.checkedE)}
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
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Pays</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <form className={classes.root} noValidate autoComplete="off">
                                {textFieldState(state.checkedF)}
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
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Hors Europe</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <FormControl component="fieldset">
                                    {radioState(state.checkedG)}
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
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Demande</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {demandeState(state.checkedH)}

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
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant={'h6'}>Département</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {departState(state.checkedI)}
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