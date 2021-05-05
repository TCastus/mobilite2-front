import {MenuItem, TextField} from "@material-ui/core";
import React from "react";

const currencies2 = [
    {
        value: 'Choisir',
        label: 'Choisir un niveau de demande',
    },
    {
        value: 'Faible',
        label: 'Demande Faible',
    },
    {
        value: 'Moyen',
        label: 'Demande Moyenne',
    },
    {
        value: 'Fort',
        label: 'Demande Forte',
    },

];

export default function DemandeChoix () {
    const [currency2, setCurrency2] = React.useState('Choisir');

    const handleChange3 = (event) => {
        setCurrency2(event.target.value);
    };
    return(
        <TextField
            id="filled-select-currency"
            select
            label="Demande"
            value={currency2}
            onChange={handleChange3}
            variant="filled"
        >
            {currencies2.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}