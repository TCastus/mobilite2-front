import React, {useState} from 'react';
import '../Assets/Style/App.css';
import {makeStyles} from "@material-ui/core/styles";
import {
    Button, CircularProgress,
    Container, FormControlLabel,
    Grid, MenuItem,
    Paper, Radio, RadioGroup, Select,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { Element, scroller } from "react-scroll";
import PageHeader from "../Component/PageHeader";
import {getSearchAdvance, postSearchName} from "../Request/uni_request";
import SearchSlider from "../Component/SearchSlider";
import * as PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {getDefaultErrorMessage} from "../Request/error_handling";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginBottom: theme.spacing(3),
    },
    experience: {
        height: '50vh',
        color: theme.palette.primary.dark,
        background: theme.palette.primary.light,
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    search: {
        height: '50vh',
        color: theme.palette.primary.dark,
        background: theme.palette.third.white,
        margin: '0px',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    paper: {
        background: theme.palette.third.lightgrey,
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        [theme.breakpoints.up("xs")] : {
            padding: theme.spacing(5),
            margin: theme.spacing(5),
        },
        textAlign: 'center',
    },
    paper2: {
        background: theme.palette.third.whitesmoke,
        margin: theme.spacing(5),
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    items: {
        margin: theme.spacing(1, 'auto'),
        textAlign: 'left',
    },
    sliders: {
        margin: theme.spacing(3, 'auto'),
        textAlign: 'left',
        [theme.breakpoints.up("sm")] : {
            margin: theme.spacing(2.5, 'auto'),
        },
    },
    searchUni: {
        margin: theme.spacing(1, 'auto'),
        textAlign: 'center',
    },
    container: {
        maxHeight: 440,
    },
}));

const access = [{
    value: 'Indifférent',
    label: 'indifférent',
},{
    value: 'Low',
    label: 'Demande Faible',
}, {
    value: 'Medium',
    label: 'Demande Moyenne',
}, {
    value: 'High',
    label: 'Demande Forte',
}];

const departments = [{
    value: 'all',
    label: 'Tous'
}, {
    value: 'TC',
    label: 'TC',
}, {
    value: 'BIM',
    label: 'BS BIM',
}, {
    value: 'BB',
    label: 'BS BB',
}, {
    value: 'GCU',
    label: 'GCU',
}, {
    value: 'GEn',
    label: 'GEn',
}, {
    value: 'GM',
    label: 'GM',
}, {
    value: 'IF',
    label: 'IF',
}, {
    value: 'GE',
    label: 'GE',
}, {
    value: 'GI',
    label: 'GI',
}, {
    value: 'SGM',
    label: 'SGM',
},
];

// Provide default form values
// You HAVE to do it for Material not to whine about controlled components
const defaultValues = {
    country: "",
    outside_europe: "true",
    access: "Indifférent",
    department_availability: "all"
};

Rechercher.propTypes = {
    errorHandler: PropTypes.func.isRequired,
};

function Rechercher({errorHandler}) {
    const classes = useStyles();
    const { handleSubmit, control } = useForm({defaultValues});
    const [name, setName] = useState("");

    const [uniList, setUniList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [rechercheDone, setRecherDone] = useState(false);
    const history = useHistory();

    // First form submission
    const searchName = (e) => {
        e.preventDefault();

        postSearchName(name).then(res => {
            setUniList(res.data);
            setRecherDone(true);

            if (!rechercheDone) {
                scroller.scrollTo('scrollResults', {
                    duration: 500,
                    smooth: true,
                });
            }

        }).catch((err) => {
            errorHandler(getDefaultErrorMessage(err));
        });
    };

    // Second form submission
    const searchAdvanced = (form) => {
        console.log(form);
        setLoading(true);

        getSearchAdvance(form).then(res => {
            setUniList(res.data);

            if (!rechercheDone) {
                scroller.scrollTo('scrollResults', {
                    duration: 500,
                    smooth: true,
                });
            }

            setRecherDone(true);
            setLoading(false);

        }).catch((err) => {
            errorHandler(getDefaultErrorMessage(err));
        });
    };

    return (
        <div className={classes.root}>

            <PageHeader title={"Rechercher une université"}/>

            <Container>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant={'h5'} style={{fontVariantCaps: 'small-caps'}}>Rechercher par nom</Typography>
                            <form onSubmit={searchName}>
                                <TextField id="outlined-basic" label="Nom d'université" variant="filled" value={name}
                                    onChange={(e) => setName(e.target.value)}/>
                                <Grid item xs={12} className={classes.searchUni}>
                                    <Button variant="contained" color='primary' type="submit">
                                        Rechercher
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant={'h5'} style={{fontVariantCaps: 'small-caps'}} >Filtrer</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <form onSubmit={handleSubmit(searchAdvanced)}>
                                <Grid container className={classes.items}>
                                    <Grid item sm={6}>
                                        <Grid className={classes.sliders}>
                                            <SearchSlider titre={"Difficulté académique minimale"} control={control} name={"course_difficulty"} />
                                        </Grid>
                                        <Grid className={classes.sliders}>
                                            <SearchSlider titre={"Note coût de la vie minimale"} control={control} name={"cost_living_grade_min"} />
                                        </Grid>
                                        <Grid className={classes.sliders}>
                                            <SearchSlider titre={"Note vie nocturne minimale"} control={control} name={"nightlife_min"} />
                                        </Grid>
                                        <Grid className={classes.sliders}>
                                            <SearchSlider titre={"Note vie culturelle minimale"} control={control} name={"uni_cultural_min"} />
                                        </Grid>
                                    </Grid>

                                    <Grid item sm={6}>
                                        <Grid container className={classes.items}>
                                            <Grid item xs={3} className={classes.items}>
                                                <Typography variant={'h6'}>Pays</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Controller
                                                    render={({ field }) =>
                                                        <TextField id="outlined-basic" label="Pays" variant="filled" size="small" {...field} />
                                                    }
                                                    name="country"
                                                    control={control}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container className={classes.items}>
                                            <Grid item xs={3} className={classes.items}>
                                                <Typography variant={'h6'}>Europe uniquement</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Controller
                                                    render={({ field }) => (
                                                        <RadioGroup row aria-label="outside_europe" {...field}>
                                                            <FormControlLabel value="true" control={<Radio color="primary" />} label="Oui" />
                                                            <FormControlLabel value="false" control={<Radio color="primary" />} label="Non" />
                                                        </RadioGroup>
                                                    )}
                                                    name="outside_europe"
                                                    control={control}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container className={classes.items}>
                                            <Grid item xs={6} md={3} className={classes.items}>
                                                <Typography variant={'h6'}>Demande</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Controller
                                                    render={({ field }) => (
                                                        <Select {...field}>
                                                            {access.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    )}
                                                    name={'access'}
                                                    control={control}/>
                                            </Grid>
                                        </Grid>

                                        <Grid container className={classes.items}>
                                            <Grid item xs={6} md={3} className={classes.items}>
                                                <Typography variant={'h6'}>Département</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Controller
                                                    render={({ field }) => (
                                                        <Select {...field}>
                                                            {departments.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    )}
                                                    name={'department_availability'}
                                                    control={control}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant="contained" color='primary' type="submit">
                                        Rechercher
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>

                <Element name="scrollResults" />

                {loading && <CircularProgress />}
                {!loading && rechercheDone &&
                <div className={classes.root}>
                    <Typography
                        variant={'h5'}>{uniList.length} université{uniList.length > 1 ? "s" : ""} trouvée{uniList.length > 1 ? "s" : ""}</Typography>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Nom</TableCell>
                                    <TableCell align="left">Pays</TableCell>
                                    <TableCell align="left">Ville</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {uniList.map((row) => (
                                    <TableRow key={row.name} hover>
                                        <TableCell align="left" component="th" scope="row" onClick={()=>history.push(`/universite/${row.id}`)}
                                            style={{cursor: 'pointer'}}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.country_name}</TableCell>
                                        <TableCell align="left">{row.city_name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                }
            </Container>

        </div>

    );
}

export default Rechercher;