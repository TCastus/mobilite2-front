import React from 'react';
//import styles from'../Assets/Style/App.css';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {blueGrey} from "@material-ui/core/colors";
//import Box from '@material-ui/core/Box';
import '../Assets/Style/style.css';
import SecurityIcon from '@material-ui/icons/Security';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import FormControl from "@material-ui/core/formcontrol";
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
    title: {
        height: '12vh',
        color: theme.palette.primary.light,
        background: 'rgba(100,100,100,100)',
        margin: '0px',
        padding: 2,
        textAlign: 'center',
        backgroundImage: `url("../Assets/images/plane.svg")`,


    },

    avis: {
        textAlign: 'center',
        margin: '0px',
        padding: 2,
        height: '20vh',
    },

    Box: {
        border: '2px solid white',
        color: theme.palette.secondary,
        padding: 10,
        //textAlign: 'center',
        //width: '200px',
        //height: '200px',
        margin: '20px',
        borderWidth: '3px',
        borderRadius: '0px 0px 10px 0px',
        opacity: 0.75,
        background: "whitesmoke",
    },

    BoxWhite: {
        border: '2px solid black',
        color: theme.palette.secondary,
        //padding: 20,
        //textAlign: 'center',
        //margin: '24px',
        //borderWidth: '3px',
        //borderRadius: '0px 0px 10px 0px',
        background: 'white',
        width: '400px'

    }

}));

function Experience() {
    const classes = useStyles();
    const [value, handleChange] = React.useState(0);


    return (
        <html>
            <body>
                <div className= "header">
                    <h1 className="note">PARTAGER SON EXPERIENCE
                    </h1>
                    <form className={classes.Box} background="white" >
                        <h2>
                            <table>
                                <tr>
                                    <td>
                                        <label htmlFor="Prénom :" color="black">Prenom  </label>
                                    </td>
                                    <td>
                                        <input type="text" name="Prénom" id="Prénom" placeholder="Votre pseudo"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="Nom de Famille :">Nom de Famille  </label>
                                    </td>
                                    <td>
                                        <input type="text" name="Nom de Famille" id="Nom de Famille" placeholder="Nom"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="Département :">Département  </label>
                                    </td>
                                    <td>
                                        <select name ="départ" id="départ">
                                            <option value="TC">TC</option>
                                            <option value="BS">BS</option>
                                            <option value="SGM">SGM</option>
                                            <option value="GM">GM</option>
                                            <option value="GCU">GCU</option>
                                            <option value="GEN">GEN</option>
                                            <option value="IF">IF</option>
                                            <option value="GE">GE</option>
                                            <option value="GI">GI</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="email :"> Email  </label>
                                    </td>
                                    <td>
                                        <input type="text" name="email" id="email" placeholder="email"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="Année de l'échange :"> Année  </label>
                                    </td>
                                    <td>
                                        <input type="text" name="Année de l'échange" id="Année de l'échange" placeholder="Année de l'échange"/>
                                    </td>
                                </tr>
                                <br/>

                                <label textAlign="center">Souhaitez-vous que nous partagions votre e-mail
                                            aux élèves intéressés par votre échange souhaitant vous poser des questions ? </label>
                                <br/>
                                <br/>

                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Choix</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio />} label="Non" />
                                    </RadioGroup>
                                </FormControl>

                            </table>

                        </h2>
                    </form>
                    <div>
                        <h1 className={classes.Box}>
                            <SecurityIcon></SecurityIcon>
                            <label htmlFor = "sécu"> Sécurité </label>
                            <br/>
                            <Rating id = "sécu"
                                name="hover-feedback"
                                //value={value}
                                precision={0.5}

                            />
                            <br/>
                            <AccountBoxIcon></AccountBoxIcon>
                            <label htmlFor = "social"> Contact Humain </label>
                            <br/>
                            <Rating id = "social"
                                name="hover-feedback2"
                                //value={value}
                                precision={0.5}
                                color={blueGrey}

                            />

                            <br/>




                        </h1>
                    </div>
                    <div className={classes.Box}>
                        <h1>
                            Commentaire
                        </h1>
                        <br/>
                        <TextField  className = {classes.BoxWhite} style={{textAlign: 'left'}} hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel" multiline rows={5} />
                    </div>

                    <div>
                        <IconButton aria-label="submit" variant="outlined" edge="start">
                            <label> Submit </label>
                            <SendIcon/>
                        </IconButton>
                    </div>


                </div>

            </body>
        </html>

    );
}

export default Experience;

