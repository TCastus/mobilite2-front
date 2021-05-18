import React, {useEffect, useState} from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import {
    Button, Chip,
    Container,
    FormControl,
    Grid,
    Paper,
    Switch, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import PageHeader from "../Component/PageHeader";
import SearchSlider from "../Component/SearchSlider";
import TextFieldPays from "../Component/pageRecherche/TextFieldPays";
import TextFieldPaysDISABLED from "../Component/pageRecherche/TextFieldPaysDISABLED";
import RadioSearch from "../Component/pageRecherche/RadioSearch";
import RadioSearchDISABLED from "../Component/pageRecherche/RadioSearchDISABLED";
import DemandeChoix from "../Component/pageRecherche/DemandeChoix";
import DemandeChoixDISABLE from "../Component/pageRecherche/DemandeChoixDISABLE";
import DepartChoix from "../Component/pageRecherche/DepartChoix";
import DepartChoixDISABLE from "../Component/pageRecherche/DepartChoixDISABLE";
import {getSearchAdvance, getSearchName, getUniAll} from "../Request/uni_request";



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginBottom: theme.spacing(3),
    },
    experience: {
        height: '50vh',
        color: 'black',
        background: theme.palette.primary.light,
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    search: {
        height: '50vh',
        color: 'black',
        background: 'white',
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    paper: {
        background: 'lightgrey',
        margin: theme.spacing(5),
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    paper2: {
        background: 'whitesmoke',
        margin: theme.spacing(5),
        padding: theme.spacing(5),
        textAlign: 'center',
    },

    items: {
        margin: theme.spacing(1, 'auto'),
        textAlign: 'left',
    },

    switch: {
        textAlign: "right",
    },
    searchUni: {
        margin: theme.spacing(1, 'auto'),
        textAlign: 'center',
    },
    container: {
        maxHeight: 440,
    },
}));



function Rechercher() {
    const classes = useStyles();

    // Uni name for first search form
    const [name, setName] = useState("");
    //setName("Alice");

    // Switch states for second form
    const sliders = ['Note globale', 'Sécurité', 'Cout de la vie', 'Vie culturelle', 'Vie nocturne'];
    const [swActivated, setSwActivated] = useState(Array(sliders.length).fill(false));
    const [sliderValues, setSliderValues] = useState(Array(sliders.length).fill(0));

    // University results
    const [uniList, setUniList] = useState([]);
    const [rechercheDone, setRecherDone] = useState(false);

    // Temporary, to replace search
    useEffect(() => {
        getUniAll().then((res) => {
            setUniList(res.data);
            setRecherDone(true);
            console.log(res.data);
        });
    }, []);


    // First form submission
    const searchName = () => {
        getSearchName(name).then(res => {
            setUniList(res.data);
            setRecherDone(true);
        });
    };

    // Second form submission
    const searchAdvanced = () => {
        let form = {};
        for (let i = 0; i < sliders.length; i++) {
            if (swActivated[i]) {
                form[sliders[i]] = sliderValues[i];

            }
        }

        getSearchAdvance(form).then(res => {
            setUniList(res.data);
            setRecherDone(true);
        });
    };
    const [state, setState] = React.useState({
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedI: false,
    });

    const handleSwitch = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <div className={classes.root}>

            <PageHeader title={"Rechercher une université"}/>

            <Container>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant={'h5'}>Rechercher par nom</Typography>
                            <form onSubmit={searchName}>
                                <TextField variant="filled"  id="outlined-basic" label="Nom d'université" size="normal" value={name}
                                    onChange={(e) => setName(e.target.value)}/>
                                <Grid item xs={12} className={classes.searchUni}>
                                    <Button variant="contained" color='theme.palette.primary.light' type="submit">
                                        Rechercher
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant={'h5'}>Filtrer</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <form onSubmit={searchAdvanced}>
                                <Grid container className={classes.items}>

                                    <Grid item xs={6}>
                                        <SearchSlider name={"checkedA"} titre={"Note globale"} activated={swActivated}
                                            number={1} setActivated={setSwActivated} sliderValues={sliderValues}
                                            setSliderValues={setSliderValues}/>
                                        <SearchSlider name={"checkedB"} titre={"Sécurité"} activated={swActivated}
                                            number={2} setActivated={setSwActivated}/>
                                        <SearchSlider name={"checkedC"} titre={"Coût de la vie"} activated={swActivated}
                                            number={3} setActivated={setSwActivated}/>
                                        <SearchSlider name={"checkedD"} titre={"Vie nocturne"} activated={swActivated}
                                            number={4} setActivated={setSwActivated}/>
                                        <SearchSlider name={"checkedE"} titre={"Vie culturelle"} activated={swActivated}
                                            number={5} setActivated={setSwActivated}/>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Grid container className={classes.items}>
                                            <Grid item xs={3} className={classes.switch}>
                                                <Switch checked={state.checkedF} onChange={handleSwitch} name="checkedF"
                                                    color="primary" inputProps={{'aria-label': 'secondary checkbox'}}/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant={'h6'}>Pays</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {state.checkedF ? <TextFieldPays/> : <TextFieldPaysDISABLED/>}
                                            </Grid>
                                        </Grid>
                                        <Grid container className={classes.items}>
                                            <Grid item xs={3} className={classes.switch}>
                                                <Switch checked={state.checkedG} onChange={handleSwitch} name="checkedG"
                                                    color="primary" inputProps={{'aria-label': 'secondary checkbox'}}/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant={'h6'}>Hors Europe</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div>
                                                    <FormControl component="fieldset">
                                                        {state.checkedG ? <RadioSearch/> : <RadioSearchDISABLED/>}
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container className={classes.items}>
                                            <Grid item xs={3} className={classes.switch}>
                                                <Switch checked={state.checkedH} onChange={handleSwitch} name="checkedH"
                                                    color="primary" inputProps={{'aria-label': 'secondary checkbox'}}/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant={'h6'}>Demande</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {state.checkedH ? <DemandeChoix/> : <DemandeChoixDISABLE/>}
                                            </Grid>
                                        </Grid>

                                        <Grid container className={classes.items}>
                                            <Grid item xs={3} className={classes.switch}>
                                                <Switch checked={state.checkedI} onChange={handleSwitch} name="checkedI"
                                                    color="primary" inputProps={{'aria-label': 'secondary checkbox'}}/>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant={'h6'}>Département</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {state.checkedI ? <DepartChoix/> : <DepartChoixDISABLE/>}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant="contained" color='theme.palette.primary.light' type="submit">
                                        Rechercher
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
                <div className={classes.root}>
                    {rechercheDone &&
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Nom</TableCell>
                                    <TableCell align="right">Pays</TableCell>
                                    <TableCell align="center">Départements</TableCell>
                                    <TableCell align="left">Demande</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {uniList.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell align="right" component="th" scope="row"> {row.name} </TableCell>
                                        <TableCell align="right">{row.id}</TableCell>
                                        <TableCell align="center">
                                            {[...new Set(row.placesDD
                                                .map((res)=>res.department_availability.map((dep)=>dep.name))
                                                .reduce((list1, list2)=>list1.concat(list2)))]
                                                .map((item) => <Chip className={classes.chip} key={item} size={"small"} label={item} />)}
                                        </TableCell>
                                        <TableCell align="left">{row.access}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    }
                </div>
            </Container>

        </div>

    );
}

export default Rechercher;