import React from 'react';
import '../Assets/Style/App.css';
import {Button, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import PageHeader from "../Component/PageHeader";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

    },
    grid: {
        border: '2px solid white',
        padding: 10,
        margin: theme.spacing(1, 'auto'),
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        background: "whitesmoke",
    },
    title: {
        color: '#c59b08',
        padding: 10,
        font: 'small-caps bold 24px/1 sans-serif',
    },
    title2: {
        color: '#c59b08',
        padding: 10,
        font: 'small-caps bold 20px/1 sans-serif',
    },
    content : {
        padding: 10,
    },
}));

function Finance() {
    const classes = useStyles();
    return (
        <Box component="div">
            <PageHeader title="Financer sa mobilité"/>
            <Box component= "div"  width="65%" mx="auto">
                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    L’INSA Lyon est chargé de gérer et distribuer à ses étudiants les subventions
                    annuelles perçues par Erasmus+, la Région AURA et le Ministère de l’Enseignement
                    Supérieur. Selon les montant de ces subventions, l’établissement définit une répartition et un calendrier.
                    Le cumul des dispositifs de bourses ne sera possible que dans la limite des crédits
                    attribués à l’INSA par les financeurs.
                    <br/>
                </Typography>

                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    <Typography className={classes.title} align={'center'}>LA BOURSE REGION BRMIE <br/> (Bourse Région Mobilité
                        Internationale Etudiants)</Typography>
                    <Typography className={classes.title2}>Destination :</Typography>
                    <Typography variant={'h6'} className={classes.content}>Tout pays étranger autre que son pays d’origine<br/> </Typography>
                    <Typography className={classes.title2}>Source :</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        <Button target= "_blank" href="https://www.auvergnerhonealpes.fr/aide/73/89-se-former-a-l-etranger-avec-la-bourse-regionale-mobilite-internationale-etudiant-enseignement-superieur-recherche-innovation.htm">
                            Conseil Régional Auvergne-Rhône-Alpes
                        </Button>
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Critères d’éligibilité (sous réserve de modifications) :</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Effectuer un séjour prévu dans le règlement des études et attesté par l’établissement
                        d’accueil, d’une durée minimum de 4 semaines pour un stage, de 8 semaines pour
                        un échange académique.
                        <br/>
                        L’inscription en ligne sur l’extranet de la Région est obligatoire avant le départ à
                        l’étranger.
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Calendrier de candidature à la bourse Région :</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        • pour un échange académique au S1 ou à l’année N : inscription mai-juin année N-1
                        <br/>
                        • pour un échange académique au S2 année N+1, inscription à l’automne N
                        <br/>
                        • pour un stage : contactez bourse.region@insa-lyon.fr dès la signature de la
                        convention de stage
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Montant :</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        sur la base de 95 € par semaine, le nombre de semaines financées
                        est déterminé chaque année en fonction de l’enveloppe reçue par l’INSA. La BRMIE ne
                        couvre pas la totalité du séjour.
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Contact INSA :</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        bourse.region@insa-lyon.fr
                    </Typography>
                </Typography>

                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    <Typography className={classes.title} align={'center'}>
                        LA BOURSE ERASMUS+
                    </Typography>
                    <Typography className={classes.title2}>Destination : </Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Pays de l’Union Européenne agréés par la Commission Européenne, de
                        l’AELE et la Turquie (Hors Suisse).
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Source : </Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        <Button target= "_blank" href="https://www.generation-erasmus.fr/sejour-bourse-erasmus-etudiant">
                            Agence Erasmus+
                        </Button>
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Critères d’éligibilité (sous réserve de modifications) :</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        La bourse Erasmus+ est versée :
                        <br/>
                        - pour une mobilité d’études de 3 mois minimum chez un partenaire Erasmus+
                        de l’INSA Lyon
                        <br/>
                        - pour un stage de 2 mois minimum.
                        <br/>
                        Les étudiants en double-diplôme chez un partenaire Erasmus+ sont éligibles pour
                        les 2 années. Les étudiants non européens inscrits à l’INSA Lyon peuvent également
                        prétendre à cette bourse.
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Montant : </Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Le montant de la bourse est décidé chaque année en fonction du
                        montant de la subvention annuelle versée à l’INSA Lyon par l’Agence Erasmus+
                        France, de la durée du séjour, du pays de destination et du type de mobilité.
                        <br/>
                        Le montant actuel en mobilité d’étude se situe :
                        <br/>
                        - entre 810€ et 1110€ par semestre en échanges,
                        <br/>
                        - entre 1170€ et 1603€ par semestre pour les double-diplômes (et entre
                        2070€ et 2837€ si départ pour l’année).
                        <br/>
                        Le montant actuel de la bourse de stage se situe entre 420€ et 520€ par
                        mois.
                        <br/>
                        Un montant complémentaire pourra être reversé en fonction de la durée
                        exacte de votre mobilité et du reliquat de la subvention, à votre retour.
                        Les informations exactes sur les montants d’allocation ainsi que les formalités
                        Erasmus+ à remplir seront communiquées par mail courant juin, à l’ensemble
                        des étudiants concernés.
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Contact INSA : </Typography>
                    <Typography variant={'h6'} className={classes.content}>scolerasmus@insa-lyon.fr</Typography>
                </Typography>

                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    <Typography className={classes.title} align={'center'}>LA BOURSE AMI - AIDE À LA MOBILITÉ INTERNATIONALE</Typography>
                    <Typography className={classes.title2}>Destination : </Typography>
                    <Typography variant={'h6'} className={classes.content}>Toutes</Typography>
                    <Typography className={classes.title2}>Source : </Typography>
                    <Typography variant={'h6'} className={classes.content}>Ministère de l’Enseignement Supérieur et de la Recherche</Typography>
                    <Typography className={classes.title2}>Critères d’éligibilité (sous réserve de modifications) :</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        • Effectuer une mobilité d’études ou de stage d’une durée minimale de 2 mois
                        à l’étranger.
                        <br/>
                        • Bénéficier d’une bourse du CROUS pour l’année de la mobilité ou allocation
                        annuelle accordée dans le cadre du dispositif des aides spécifiques.
                        <br/>
                        • Préparer un diplôme national.
                        <br/>
                        L’aide est accordée en prenant en compte la durée du séjour et certaines spécificités (échange, double-diplôme, stage). Un mail est envoyé en juin aux étudiants
                        pour leur expliquer les démarches.
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Montant : </Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Voici à titre indicatif les montants accordés par étudiant en 2019-2020 :
                        <br/>
                        • 1 semestre d’échange : 800€
                        <br/>
                        • 1 semestre en double-diplôme : 1200€
                        <br/>
                        • 1 an d’échange : 1600€
                        <br/>
                        • 1 an en double-diplôme : 2400€
                        <br/>
                        • 2e année en double-diplôme : 1200€
                        <br/>
                        NB : au cours de sa scolarité, l’étudiant ne pourra percevoir une aide AMI
                        supérieure à 3600€ (stages et études cumulés)
                        <br/>
                    </Typography>
                    <Typography className={classes.title2}>Contact INSA : </Typography>
                    <Typography variant={'h6'} className={classes.content}>mobilitesortante@insa-lyon.fr</Typography>
                </Typography>

                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    <Typography className={classes.title} align={'center'}>LA BOURSE FSI - FONDS DE SOUTIEN POUR L’INTERNATIONAL</Typography>
                    <Typography className={classes.title2}>Destination : </Typography>
                    <Typography variant={'h6'} className={classes.content}>Toutes</Typography>
                    <Typography className={classes.title2}>Source : </Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Financement interne à partir des Frais de Dossier Mobilité Internationale
                        (FDMI) payés par tous les candidats à la mobilité sortante
                        Critères d’éligibilité (sous réserve de modifications) :
                        Tout élève en échange académique s’étant acquitté du FDMI, sur présentation
                        d’une demande d’aide financière exceptionnelle.
                    </Typography>
                    <Typography className={classes.title2}>Montant :</Typography>
                    <Typography variant={'h6'} className={classes.content}>800€ en 2019-2020</Typography>
                    <Typography className={classes.title2}>Contact INSA : </Typography>
                    <Typography variant={'h6'} className={classes.content}>mobilitesortante@insa-lyon.fr</Typography>
                </Typography>

                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    <Typography className={classes.title} align={'center'}>AIDES FINANCIÈRES DES PROGRAMMES FITEC</Typography>
                    <Typography className={classes.title2}>Destination : </Typography>
                    <Typography variant={'h6'} className={classes.content}>Les établissements FITEC partenaires en Argentine, au Brésil et au Mexique.</Typography>
                    <br/>
                    <Typography className={classes.title2}>Source : </Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Ministère de l’Europe et des Affaires étrangères, le ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation et les ministères des pays concernés
                    </Typography>
                    <br/>
                    <Typography className={classes.title2}>Critères d’éligibilité : </Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Tout élève ingénieur en échange académique (suivi ou
                        non d’un stage) ayant postulé pour un de ces établissements.
                        Les dossiers de candidature sont automatiquement envoyés par la Direction
                        des Relations Internationales aux étudiants autorisés à faire un échange et
                        admis dans un établissement partenaire FITEC. Ces étudiants renvoient alors
                        les justificatifs liés à leur mobilité. Les aides sont versées pendant ou à l’issue
                        de la mobilité.
                    </Typography>
                    <Typography className={classes.title2}>Contact INSA : </Typography>
                    <Typography variant={'h6'} className={classes.content}>haridian.melgar-perez@insa-lyon.fr - Chargée de Projet Amérique Latine</Typography>
                </Typography>

                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    <Typography className={classes.title} align={'center'}>AIDES FINANCIÈRES DU PROGRAMME UNITECH</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        Les étudiants sélectionnés pour le programme UNITECH bénéficieront d’une aide
                        à la mobilité de 1000€, cumulable avec une bourse Erasmus+.
                    </Typography>
                </Typography>

                <Typography align="left" variant={'h6'}  className={classes.grid}>
                    <Typography className={classes.title} align={'center'}>AUTRES BOURSES ÉVENTUELLES : RENSEIGNEZ-VOUS !</Typography>
                    <Typography variant={'h6'} className={classes.content}>
                        • Conseil Régional ou commune d’origine
                        <br/>
                        • L’université d’accueil
                        <br/>
                        • Les services consulaires, en France, du pays d’accueil
                        <br/>
                        • Comités d’Entreprise
                        <br/>
                        • Rotary, AMOPA...
                        <br/>
                        • Bourses IGB (exemple : BB2)
                        <br/>
                        • Bourse de la fondation
                    </Typography>
                    <Typography variant={'h6'} className={classes.content} align={"right"}>
                        <Button target= "_blank" href="https://moodle.insa-lyon.fr/pluginfile.php/142587/mod_resource/content/2/Passeport-JI-2020.pdf">
                            Informations extraites du Passeport JI 2020
                        </Button>
                        <br/>
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
}

export default Finance;