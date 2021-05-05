import React,{useState} from 'react';
import {Button} from "@material-ui/core";

function TypeLogement(props) {

    // eslint-disable-next-line react/prop-types
    const [description,setDescription] = useState(props.textApercu);
    const [isExpanded,setIsExpanded] = useState(false);

    const handleClick = () => {
        // eslint-disable-next-line react/prop-types
        setDescription(props.textComplet);
        setIsExpanded(true);
    };

    const handleClickMoins = () => {
        // eslint-disable-next-line react/prop-types
        setDescription(props.textApercu);
        setIsExpanded(false);
    };

    return (<>
        {/* eslint-disable-next-line react/prop-types */}
        <h4>Logement</h4>
        <p>{description}</p>
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

