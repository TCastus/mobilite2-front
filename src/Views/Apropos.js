import React from 'react';
import '../Assets/Style/App.css';
import {Box, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PageHeader from "../Component/PageHeader";
import Grid from "@material-ui/core/Grid";
import louis from "../Assets/aPropos/louis.png";
import esther from "../Assets/aPropos/esther.png";
import alice from "../Assets/aPropos/alice.png";
import estelle from "../Assets/aPropos/estelle.png";
import thomas from "../Assets/aPropos/thomas.png";
import bastien from "../Assets/aPropos/bastien.png";
import {theme} from "../Theme";




const useStyles = makeStyles((theme) =>
    ({
        style:{
            alignItems:"center",
            font: 'small-caps bold 24px/1 sans-serif',
        },
        title: {
            color: theme.palette.third.gold,
            padding: 5,
            margin: 15,
            font: theme.typography,
            fontVariantCaps: theme.fontVariantCaps.smallCaps,
            fontWeight: theme.fontType.bold,

        },
        title2: {
            color: theme.palette.third.gold,
            padding: 10,
            font: theme.typography,
            fontVariantCaps: theme.fontVariantCaps.smallCaps,
            fontWeight: theme.fontType.bold,

        },
        content: {
            backgroundColor: theme.palette.third.white,
            color: theme.palette.third.darkGrey,
            padding: 30,
            margin: theme.spacing(1, 'auto'),
            borderWidth: '3px',
            borderRadius: '5px 5px 5px 5px',
            background: theme.palette.third.white,
            textAlign: 'justify',

        },

        contentMembers: {
            backgroundColor: theme.palette.third.white,
            color: theme.palette.third.darkGrey,
            padding: 30,
            margin: theme.spacing(1, 'auto'),
            borderWidth: '3px',
            borderRadius: '5px 5px 5px 5px',
            background: theme.palette.third.white,
            textAlign: 'center',

        },



        BoxType:{
            background: theme.palette.third.lightgray,
        }
    })
);


function Apropos() {

    const classes = useStyles();

    return (
        <Box component="div" className= {classes.BoxType}>
            <PageHeader title={"A propos"} subtitle={"Qu'est-ce que c'est que ce site ?"} />
            <Box component= "div" width="75%" mx="auto" >
                <Box component="div" className={classes.title}>
                    <Typography variant={'h3'} >
                        Mobilité, une application par les étudiants, pour les étudiants <br /> <br />
                        Notre objectif ? <br/>
                        Aider les étudiants à choisir l’échange qui leur correspond le mieux, afin de leur garantir un voyage inoubliable.
                    </Typography>
                </Box>

                <Typography variant={"h2"} className={classes.title2}>
                    L&apos;Histoire
                </Typography>

                <Typography variant={'h6'} className={classes.content}>
                    Avant la création de ce site, les étudiants recevaient énormément d’informations quant aux échanges dès la 3ème année, sans vraiment
                    s’y être préparé au FIMI ou dans leurs études précédentes. Il leur fallait choisir assez rapidement une destination dans laquelle
                    ils allaient passer 6 mois, voire 1 an de leur vie, et malgré les nombreuses conférences et journées mises en place pour aiguiller
                    les étudiants dans leur choix, ils n’avaient pas un endroit spécial pour se retrouver et avoir un avis concret des étudiants déjà
                    partis en échange.<br/><br/>
                    C’est ainsi que ce site est né. Regroupant toutes les informations qui permettent aux étudiants de choisir leur destination,
                    notre site leur permet de retrouver au même endroit des informations sur la vie dans toutes les universités partenaires à l’INSA de Lyon,
                    sur les bourses auxquelles ils ont accès ou encore sur les informations spécifiques à leur département. Combiné avec le site Move On,
                    trouver son échange devient un véritable jeu d’enfant.
                </Typography>
                <Typography variant={"h2"} className={classes.title2}>
                    Qui sommes-nous ?
                </Typography>
                <Typography variant={'h6'} className={classes.content}>
                    Nous sommes une équipe de 6 étudiants du département Télécommunications Services et Usages en 3ème année à l’INSA Lyon, et avons
                    repris l&apos;idée d&apos;un Projet Web lancé deux ans plus tôt par l&apos;ASTUS.
                    Nous réalisons ce site pour la responsable des relations internationales en TC, Oana Iova, dans le cadre de notre Projet Web de 3ème année.
                    Nous sommes évidemment accompagnés de nos professeurs avec qui nous avons fait des points réguliers sur l’avancement du site, et qui nous
                    ont aidé tout au long du processus de création de ce site.
                </Typography>
            </Box>

            <Box component="div" mx="auto" width="95%" >
                <Grid container className={classes.contentMembers} alignItems="center" width >
                    <Grid item xs={6} >
                        <img src={louis} height="85%" width="85%" alt={"photo de louis - responsable du projet"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={'h6'}>
                            Toujours à l’écoute, Louis a su être un véritable pilier pour son équipe en les aidant à chaque difficulté rencontrée,
                            en divisant le travail de manière structurée et organisée, et en poussant ses équipiers vers le haut. Avec lui, le code
                            doit être propre et concis. C’est grâce à ses talents de leader, de développeur et ses grandes capacités
                            d’organisation que toute l’équipe a pu avancer ensemble de manière régulière.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={'h6'}>
                            Nous vous présentons les filles de l’équipe ! Chacune plus motivées l’une que l’autre à apprendre de nouvelles choses afin
                            de rendre le site toujours plus agréable à utiliser (et toujours plus beau, pour votre plus grand plaisir).
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={esther} height="85%" width="85%" alt={"photo de esther - team front end"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={alice} height="85%" width="85%" alt={"photo de alice - team front end"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={'h6'}>
                            Du design du site sur Canva à son implémentation en ReactJS, elles ont su se coordonner et s’entraider lors de leurs
                            difficultés rencontrées (et croyez-nous, il y en a eu beaucoup !).
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={'h6'}>
                            Avec l’aide de Louis et de la team back-end pour la
                            mise en commun des avancées du projet, elles ont pu venir à bout de ce site, et elles espèrent très fort qu’il vous plaira !
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={estelle} height="85%" width="85%" alt={"photo de estelle - team front end"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={thomas} height="85%" width="85%" alt={"photo de thomas - team back end"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={'h6'}>
                            Et enfin, last but not least, nos hommes de l’ombre : la team back-end ! Ce sont eux qui sont responsables de l’envers du
                            décor de tout le site : la création et la gestion de bases de données n’ont plus aucun secret pour eux !
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={'h6'}>
                            Avançant de pair avec Louis et la team front-end, ces as du Python ont également énormément appris de leur côté,
                            pour vous assurer un site fonctionnel, maintenable et durable !
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={bastien} height="85%" width="85%" alt={"photo de bastien - team back end"}/>
                    </Grid>
                </Grid>
            </Box>
            <Box component="div" mx="auto" width="70%">
                <Typography variant={"h2"} className={classes.title2}>
                    Nos projets pour la suite ?
                </Typography>
                <Typography variant={'h6'} className={classes.content}>
                    Pour l’instant, ce site est dédié aux étudiants de TC et de BS, mais nous souhaiterions qu’à l’avenir, il soit utilisé pour tous
                    les départements de l’INSA Lyon. Pour tous les étudiants, trouver un échange qui leur correspond est une étape importante dans
                    leur vie étudiante, personnelle et même professionnelle. Grâce à son implémentation simple, il est facile de modifier notre site
                    pour ajouter de nouvelles informations : il serait donc possible de le déployer pour tous les départements. <br/> <br/>

                    Aider les étudiants est notre priorité, nous espérons donc regrouper une réelle communauté sur ce site afin qu’il puisse regrouper
                    le plus de témoignages possibles et permettre d’aiguiller au mieux les élèves qui en ont besoin.<br/> <br/>

                    Nous vous souhaitons une bonne visite de notre site !<br/>
                    -	Toute l’équipe.

                </Typography>
                <br/> <br/>
            </Box>
        </Box>

    );
}

export default Apropos;