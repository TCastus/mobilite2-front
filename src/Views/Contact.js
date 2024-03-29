import React from 'react';
import '../Assets/Style/App.css';
import {Box, Button, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PageHeader from "../Component/PageHeader";
import Grid from "@material-ui/core/Grid";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import louis from "../Assets/Contact/louis.png";
import estelle from "../Assets/Contact/estelle.png";
import esther from "../Assets/Contact/esther.png";
import alice from "../Assets/Contact/alice.png";
import bastien from "../Assets/Contact/bastien.png";
import thomas from "../Assets/Contact/thomas.png";



const useStyles = makeStyles((theme) =>
    ({
        style:{
            alignItems:"center",
            font: 'small-caps bold 24px/1 sans-serif',
        },

        title: {
            color: '#c59b08',
            padding: 20,
            margin: '40px',
            font: 'small-caps bold 35px/1 sans-serif',
        },
        title2: {
            color: '#c59b08',
            padding: 10,
            font: 'small-caps bold 24px/1 sans-serif',
        },
        content: {
            padding: 30,
            margin: theme.spacing(1, 'auto'),

            textAlign: 'center',
            [theme.breakpoints.up("xs")] : {
                padding: 15,
                margin: 1,
            },
        },

        width:{
            [theme.breakpoints.up('md')]: {
                width: '100%',
            }
        },
    })
);


function Contact() {

    const classes = useStyles();

    return (
        <Box component="div">
            <PageHeader title={<ContactPhoneIcon> </ContactPhoneIcon>} subtitle="CONTACT">
            </PageHeader>

            <Box component= "div"  mx="auto" >
                <Typography variant={'h4'} className={classes.title2}>
                    <br/>
                    Contacter l&apos;équipe technique du site
                </Typography>
                <Typography variant={'h7'} className={classes.content}>
                    <Grid container>
                        <Grid item xs>
                            <EmailIcon />
                            <br/><br/>astus.insalyon@gmail.com
                        </Grid>

                        <Grid item xs >
                            <HomeIcon> </HomeIcon>
                            <br/>ASTUS :
                            <br/>Bâtiment Claude Chappe - INSA Lyon
                            <br/>6 avenue des arts 69621
                            <br/>Villeurbanne cedex
                        </Grid>

                        <Grid item xs >
                            <GitHubIcon> </GitHubIcon>
                            <br/><br/>
                            <Button variant="contained" target = "_blank" href="https://github.com/TCastus/mobilite2-front">
                                Découvrir notre GitHub front-end
                            </Button>
                            <br/><br/>
                            <Button variant="contained" target = "_blank" href="https://github.com/TCastus/mobilite2-back">
                                Découvrir notre GitHub back-end
                            </Button>
                        </Grid>
                    </Grid>
                </Typography>
                <Typography variant={'h4'} className={classes.title2}>
                    <br/>
                    Contacter les responsables des échanges à l&apos;international
                </Typography>
                <Typography  className={classes.content}>
                    <Grid container>
                        <Grid item xs={12}>
                            <EmailIcon />
                            <br/>
                        </Grid>
                        <Grid item xs>
                            <br/>TC : <br/>Oana IOVA, oana.iova@insa-lyon.fr
                            <br/>
                            <br/> BS : <br/>ri-bs@insa-lyon.fr
                            <br/>
                            <br/> GM : <br/>4GM : M’hamed Boutaous, mhamed.boutaous@insa-lyon.fr <br/> 5GM : Lionel Manin, lionel.manin@insa-lyon.fr
                            <br/>
                            <br/> SGM : <br/>5SGM et PFE : Alain Fave, alain.fave@insa-lyon.fr <br/> 4SGM : Lucile Joly-Pottuz, lucile.joly-pottuz@insa-lyon.fr
                            <br/>
                            <br/> GE : <br/>ge-ri@insa-lyon.fr

                        </Grid>
                        <Grid item xs>
                            <br/> IF : <br/>Egyed-Zsigmond Elod, elod.egyed-zsigmond@insa-lyon.fr <br/> Gelan Jerome,
                            jerome.gelan@insa-lyon.fr <br/> Servigne Sylvie, sylvie.servigne@insa-lyon.fr
                            <br/>
                            <br/> GCU : <br/>Christian Obrecht, christian.obrecht@insa-lyon.fr
                            <br/>
                            <br/> GEN : <br/>Gaëlle DUCOM, gaelle.ducom@insa-lyon.fr
                            <br/>
                            <br/> GI : <br/>4GI: Anne-Laure Ladier, anne-laure.ladier@insa-lyon.fr <br/>5GI: Lorraine Trilling, lorraine.trilling@insa-lyon.fr
                        </Grid>
                    </Grid>
                </Typography>
                <Typography variant={'h4'} className={classes.title2}>
                    Contacter les créateurs du site
                </Typography>
                <Typography  className={classes.content} >
                    <Box component="div">
                        <Grid container>
                            <Grid item xs>
                                <img src={louis} className={classes.width} alt={"photo de louis - responsable du projet"} />
                                <br/>
                                <Button width={"100%"} target= "_blank" href="https://www.linkedin.com/in/louis-gombert-92830a209/">
                                    <LinkedInIcon />
                                </Button>
                                <Button target= "_blank" href="mailto:louis.gombert@insa-lyon.fr">
                                    <EmailIcon />
                                </Button>
                            </Grid>
                            <Grid item xs >
                                <img src={esther} className={classes.width} alt={"photo de esther - team front end"}/>
                                <br/>
                                <Button target= "_blank" href="mailto:esther.allain@insa-lyon.fr">
                                    <EmailIcon />
                                </Button>
                            </Grid>
                            <Grid item xs >
                                <img src={alice} className={classes.width} alt={"photo de alice - team front end"}/>
                                <br/>
                                <Button target= "_blank" href="https://www.linkedin.com/in/alice-gangneux-05ab16196/">
                                    <LinkedInIcon />
                                </Button>
                                <Button target= "_blank" href="mailto:alice.gangneux@insa-lyon.fr">
                                    <EmailIcon />
                                </Button>
                            </Grid>
                            <Grid item xs >
                                <img src={estelle} className={classes.width} alt={"photo de estelle - team front end"}/>
                                <br/>
                                <Button target= "_blank" href="https://www.linkedin.com/in/estelle-monier/">
                                    <LinkedInIcon />
                                </Button>
                                <Button target= "_blank" href="mailto:estelle.monier@insa-lyon.fr">
                                    <EmailIcon />
                                </Button>
                            </Grid>
                            <Grid item xs >
                                <img src={thomas} className={classes.width} alt={"photo de thomas - team back end"}/>
                                <br/>
                                <Button target= "_blank" href="mailto:thomas.lorrain@insa-lyon.fr">
                                    <EmailIcon />
                                </Button>
                            </Grid>
                            <Grid item xs >
                                <img src={bastien} className={classes.width} alt={"photo de bastien - team back end"}/>
                                <br/>
                                <Button target= "_blank" href="https://www.linkedin.com/in/bastien-fontaine-a9a96b196/">
                                    <LinkedInIcon />
                                </Button>
                                <Button target= "_blank" href="mailto:bastien.fontaine@insa-lyon.fr">
                                    <EmailIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>




                </Typography>
                <br/>
            </Box>
        </Box>

    );
}

export default Contact;