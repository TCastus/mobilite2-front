import {MenuItem, TextField} from "@material-ui/core";
import React from "react";

const currencies = [
    {
        value: 'Choisir',
        label: 'Choisir un département',
    },
    {
        value: 'TC',
        label: 'Télécomunications, Services et Usages',
    },
    {
        value: 'BIM',
        label: 'Biosciences BIM',
    },
    {
        value: 'BB',
        label: 'Biosciences BB',
    },
    {
        value: 'GCU',
        label: 'Génie Civil et Urbanisme',
    },
    {
        value: 'GEn',
        label: 'Génie Energétique et Environnement',
    },
    {
        value: 'GM',
        label: 'Génie Mécanique',
    },
    {
        value: 'IF',
        label: 'Informatique',
    },
    {
        value: 'GE',
        label: 'Génie Electrique',
    },
    {
        value: 'GI',
        label: 'Génie Industriel',
    },
    {
        value: 'SGM',
        label: 'Science et Génie des Matériaux',
    },
];

export default function DepartChoix () {
    const [currency, setCurrency] = React.useState('Choisir');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return(
        <TextField
            id="filled-select-currency"
            select
            label="Département"
            value={currency}
            onChange={handleChange}
            variant="filled"
        >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}