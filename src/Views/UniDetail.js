import React from 'react';
import '../Assets/Style/App.css';
import '../Assets/Style/Universite.css';


import Grid from '@material-ui/core/Grid';
import { Star as StarIcon, StarBorder as StarBorderIcon, AttachMoney as AttachMoneyIcon,
    MoneyOff as MoneyOffIcon, Lock as LockIcon, LockOpen as LockOpenIcon, Public as PublicIcon,
    Language as LanguageIcon, MusicNote as MusicNoteIcon, MusicOff as MusicOffIcon } from '@material-ui/icons';


function UniDetail() {
    return (<>
        <div className="header">
            <h1 className="title">Nom de l&apos;universite</h1>
            <h2 className="subtitle">Ville, Pays, Continent</h2>
        </div>
        <div className="presGen">
            <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                    TEst
                </Grid>
                <Grid item sm={6} xs={12}>
                    <h3 className="avis">Les avis des étudiants</h3>
                    <Grid container spacing={2}>
                        <Grid item sm={4} xs={6}>
                            <div className="noteGlobale">
                                Note globale
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={6}>
                            <StarIcon fontSize="large" />
                            <StarIcon fontSize="large" />
                            <StarIcon fontSize="large" />
                            <StarIcon fontSize="large" />
                            <StarBorderIcon fontSize="large" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item sm={1.5} xs={6}>
                            <div className="note">
                                <p>Coût de la vie</p>
                                <AttachMoneyIcon fontSize="small" />
                                <AttachMoneyIcon fontSize="small" />
                                <AttachMoneyIcon fontSize="small" />
                                <AttachMoneyIcon fontSize="small" />
                                <MoneyOffIcon fontSize="small" />
                            </div>
                        </Grid>
                        <Grid item sm={1.5} xs={6}>
                            <div className="note">
                                <p>Sécurité</p>
                                <LockIcon fontSize="small" />
                                <LockIcon fontSize="small" />
                                <LockIcon fontSize="small" />
                                <LockIcon fontSize="small" />
                                <LockOpenIcon fontSize="small" />
                            </div>
                        </Grid>
                        <Grid item sm={1.5} xs={6}>
                            <div className="note">
                                <p>Vie nocturne</p>
                                <MusicNoteIcon fontSize="small" />
                                <MusicNoteIcon fontSize="small" />
                                <MusicNoteIcon fontSize="small" />
                                <MusicNoteIcon fontSize="small" />
                                <MusicOffIcon fontSize="small" />
                            </div>
                        </Grid>
                        <Grid item sm={1.5} xs={6}>
                            <div className="note">
                                <p>Vie culturelle</p>
                                <PublicIcon fontSize="small" />
                                <PublicIcon fontSize="small" />
                                <PublicIcon fontSize="small" />
                                <PublicIcon fontSize="small" />
                                <LanguageIcon fontSize="small" />
                            </div>
                        </Grid>
                    </Grid>
                    <div className="infos">
                        <h4>-Logement </h4>
                        Résidences sur le campus : Oui<br/>
                        Coût approximatif : 500€<br/>
                        <h4>+Les cours</h4>
                        <h4>+Recommandations</h4>
                    </div>
                </Grid>
            </Grid>
        </div>
    </>);
}

export default UniDetail;