import React,{useState} from 'react';
import {Button, PropTypes, Typography} from "@material-ui/core";

TypeLogement.propTypes = {
    textApercu: PropTypes.string.isRequired,
    textComplet: PropTypes.string.isRequired,
};

function TypeLogement({textApercu, textComplet}) {

    const [description,setDescription] = useState(textApercu);
    const [isExpanded,setIsExpanded] = useState(false);

    const handleClick = () => {
        setDescription(textComplet);
        setIsExpanded(true);
    };

    const handleClickMoins = () => {
        setDescription(textApercu);
        setIsExpanded(false);
    };

    return (<>
        <Typography variant={"h4"}>Logement</Typography>
        <Typography variant={"body1"}>{description}</Typography>
        {
            !isExpanded ? (
                <Button onClick={handleClick} variant="contained">Voir plus</Button>
            ) :(
                <Button onClick={handleClickMoins} variant="contained">Voir moins</Button>
            )

        }

    </>);

}

export default TypeLogement;

