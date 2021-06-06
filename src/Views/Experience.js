import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box, Grid, MenuItem, Typography,
    RadioGroup, FormControlLabel, Radio, Select,
    Container, TextField, Button, Checkbox
} from "@material-ui/core";
import {
    Security as SecurityIcon,
    AttachMoney as AttachMoneyIcon,
    Send as SendIcon,
    MenuBook as MenuBookIcon,
    Chat as ChatIcon,
    AccountBalance as AccountBalanceIcon, MusicNote as MusicNoteIcon, Public as PublicIcon
} from '@material-ui/icons';
import * as PropTypes from "prop-types";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import PageHeader from "../Component/PageHeader";
import RatingForm from "../Component/RatingForm";
import {useForm, Controller} from "react-hook-form";
import {getUniAllShort, postReview} from "../Request/uni_request";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {getDefaultErrorMessage} from "../Request/error_handling";
import { Element, scroller } from 'react-scroll';
import config from "../config.json";
import {useHistory} from "react-router";
import {useParams} from "react-router-dom";

Experience.propTypes = {
    errorHandler: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: 10,
        margin: theme.spacing(5, 'auto'),
        borderRadius: '8px',
        background: theme.palette.third.lightgrey,

    },
    ratingsGrid: {
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: '90%',
        },
        background: "lightgrey",
    },
    comment: {
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        background: "white",

    },
    textFieldSize:{
        width: "70%",
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }
    },
    startRatingSize:{
        width: "30%",
        [theme.breakpoints.up('md')]: {
            width: '70%',
        }
    },
    radio: {
        paddingLeft: '20%',
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

const semesters = ['4A-S1', '4A-S2', '5A-S1', '5A-S2', '4A', '5A'];

const defaultValues = {
    surname: "",
    name: "",
    email: "",
    department: "BB",
    year: 2020,
    comments:"",
    contact: "false",
    security: 0,
    cost_of_living: 0,
    culture: 0,
    night_life: 0,
    mobility_type: "DD",
    univ_appartment: false,
    rent: 500,
    visa: "",
    courses_difficulty: 0,
    student_proximity: 0,
    courses_interest: 0,
    university: -1,
    semester: "4A-S1"
};

const schema = yup.object().shape({
    name: yup.string().required('Champ obligatoire'),
    surname: yup.string().required('Champ obligatoire'),
    email: yup.string().required('Champ obligatoire').email('Mauvais format d\'email'),
    year: yup.number().required('Champ obligatoire')
        .integer('Année entière').min(1957, 'Année non valide').max(2040, 'Année non valide'),
});

export default function Experience({errorHandler}) {
    const classes = useStyles();
    const { handleSubmit, control, formState:{errors}, setValue } = useForm({resolver: yupResolver(schema), defaultValues});

    const [captchaToken, setCaptchaToken] = useState("");
    const [uni, setUni] = React.useState([]);
    const history = useHistory();
    const id_uni = useParams();

    React.useEffect(() => {
        getUniAllShort().then((res) => {
            setUni(res.data);
            setValue('university', id_uni.id ? String(id_uni.id) : res.data[0].id);
        }).catch( err => {
            errorHandler(getDefaultErrorMessage(err));
        });
    }, [errorHandler, setValue]);

    const submitForm = (form) => {
        const form2 = {};
        for (let key in form) {
            form2[key] = form[key] === null ? 0 : form[key];
        }

        if (captchaToken !== "") {
            form2['h-captcha-response'] = captchaToken;
            postReview(form2).then(()=> {
                history.push('/success');
            }).catch( () => {
                errorHandler("Erreurs dans le formulaire !");
                scroll.scrollToTop();
            });
        }
    };

    const formError = () => {
        scroller.scrollTo('scrollForm', {
            duration: 500,
            smooth: true,
        });
    };

    const handleVerificationSuccess = (token) => {
        setCaptchaToken(token);
    };

    return (
        <>
            <PageHeader title={"Partagez votre expérience"}/>

            <Element name="scrollForm" />

            <Container maxWidth="md">
                <form onSubmit={handleSubmit(submitForm, formError)}>
                    <Box component="div" className="header">
                        <Box component="div">
                            <Typography variant={'h4'} className={classes.items} style={{fontVariantCaps: 'small-caps'}}>Vous revenez d&apos;échange ?</Typography>
                            <Typography variant={'h5'} className={classes.items} style={{fontVariantCaps: 'small-caps'}}>Remplissez le formulaire ci-dessous et aidez les futures<br/> générations à faire leur choix !</Typography>
                            <Grid container className={classes.items} spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"} > Prénom* </Typography>
                                    <Controller
                                        render={({ field }) =>
                                            <TextField placeholder="Gérard" {...field}
                                                className={classes.textFieldSize}
                                                error={errors.surname}
                                                helperText={errors.surname?.message}/>}
                                        name="surname"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"}> Nom* </Typography>
                                    <Controller
                                        render={({ field }) => 
                                            <TextField placeholder="Depardieu" {...field} 
                                                className={classes.textFieldSize}
                                                error={errors.name}
                                                helperText={errors.name?.message}/>}
                                        name="name"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12} className={classes.items}>
                                    <Typography variant={"h6"}>Email*</Typography>
                                    <Controller
                                        render={({ field }) =>
                                            <TextField placeholder="gerard.depardieu@gmail.com"
                                                type="email"
                                                error={errors.email}
                                                helperText={errors.email?.message}{...field} />}
                                        name="email"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"} id="depart">Département*</Typography>
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

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"} id="depart">Semestre/année d&apos;échange</Typography>
                                    <Controller
                                        render={({ field }) => (
                                            <Select {...field}>
                                                {semesters.map((sem) => <MenuItem key={sem} value={sem}>{sem}</MenuItem>)}
                                            </Select>
                                        )}
                                        name="semester"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"} >Année d&apos;échange* </Typography>
                                    <Controller
                                        render={({ field }) =>
                                            <TextField type="number" {...field}
                                                error={errors.year}
                                                helperText={errors.year?.message}
                                                className={classes.textFieldSize} />}
                                        name="year"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"}>Université*</Typography>
                                    <Controller
                                        render={({ field }) => (
                                            <Select {...field}>
                                                {uni.map((elem) => <MenuItem key={elem.id} value={elem.id}>{elem.country_name + " - " + elem.name}</MenuItem>)}
                                            </Select>
                                        )}
                                        name="university"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"}>Type de contrat</Typography>
                                    <Controller
                                        render={({ field }) => (
                                            <RadioGroup aria-label="mobility_type" {...field}>
                                                <FormControlLabel value="E" control={<Radio color="primary"/>} label="Échange" className={classes.radio}/>
                                                <FormControlLabel value="DD" control={<Radio color="primary"/>} label="Double Diplôme" className={classes.radio}/>
                                            </RadioGroup>
                                        )}
                                        name="mobility_type"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"}>Visa demandé pour l&apos;échange ?</Typography>
                                    <Controller
                                        render={({ field }) =>
                                            <TextField className={classes.comment} style={{textAlign: 'left'}} placeholder="ex : Comme je suis de nationalité ... j&apos;ai dû faire un visa..." multiline rows={5} {...field} />}
                                        name="visa"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"} > Commentaire </Typography>
                                    <Controller
                                        render={({ field }) =>
                                            <TextField className={classes.comment} style={{textAlign: 'left'}} placeholder="ex : J'ai beaucoup aimé cet échange, j'ai très bien été acceuilli..." multiline rows={5} {...field} />}
                                        name="comments"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"}>Logé à l&apos;université ?</Typography>
                                    <Controller
                                        name="univ_appartment"
                                        control={control}
                                        render={({ field }) => (
                                            <Checkbox
                                                onChange={(e) => field.onChange(e.target.checked)}
                                                checked={field.value}
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant={"h6"}>Loyer moyen payé (€)</Typography>
                                    <Controller
                                        render={({ field }) => <TextField type={"number"} {...field} />}
                                        name="rent"
                                        control={control}
                                    />
                                </Grid>

                                <Grid item xs={12} spacing={3}>
                                    <Typography variant={"body1"}>
                                        Souhaitez-vous que nous partagions votre e-mail<br/>
                                        aux élèves intéressés par cet échange souhaitant vous poser des questions ?
                                    </Typography>

                                    <Controller
                                        render={({ field }) => (
                                            <RadioGroup aria-label="contact" {...field}>
                                                <FormControlLabel value={"false"} control={<Radio color="primary"/>} label="Non" className={classes.radio}/>
                                                <FormControlLabel value={"true"} control={<Radio color="primary"/>} label="Oui" className={classes.radio}/>
                                            </RadioGroup>
                                        )}
                                        name="contact"
                                        control={control}
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box component="div" maxWidth="sm" className={classes.grid}>
                            <Grid container className={classes.ratingsGrid} md={12}>

                                <RatingForm className={classes.startRatingSize} control={control} title="Sécurité" name="security" Icon={SecurityIcon} />
                                <RatingForm control={control} title="Coût de la vie" name="cost_of_living" Icon={AttachMoneyIcon} />
                                <RatingForm control={control} title="Vie culturelle" name="culture" Icon={PublicIcon} />
                                <RatingForm control={control} title="Vie nocturne" name="night_life" Icon={MusicNoteIcon} />
                                <RatingForm control={control} title="Difficulté des cours" name="courses_difficulty" Icon={MenuBookIcon} />
                                <RatingForm control={control} title="Contact avec les étudiants" name="student_proximity" Icon={ChatIcon} />
                                <RatingForm control={control} title="Intérêt dans les cours" name="courses_interest" Icon={AccountBalanceIcon} />


                                <Grid item xs={12} className={classes.items}>
                                    <HCaptcha onVerify={(token) => handleVerificationSuccess(token)} languageOverride="fr"
                                        sitekey={config.HCAPTCHA_SITEKEY}
                                        theme="light"
                                    />

                                    <Button variant="contained" color="primary" type="submit" disabled={captchaToken === ""}>
                                        Envoyer  <SendIcon fontSize={"small"}/>
                                    </Button>
                                    {captchaToken === "" && <Typography component={"p"} variant={"caption"} style={{color:"red"}}>Captcha non validé</Typography> }

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </form>
            </Container>
        </>
    );
}