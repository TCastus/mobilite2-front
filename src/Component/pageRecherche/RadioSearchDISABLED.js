import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import React from "react";


export default function RadioSearchDISABLED () {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange2 = (event) => {
        setSelectedValue(event.target.value);
    };
    return(
        <RadioGroup row aria-label="position" name="position" defaultValue="end">
            <FormControlLabel value="disabled" disabled control={<Radio color="primary" checked={selectedValue === 'a'} onChange={handleChange2} value="a" name="radio-button-demo" inputProps={{ 'aria-label': 'A' }}/>} label="Oui" />
            <FormControlLabel value="disabled" disabled control={<Radio color="primary" checked={selectedValue === 'b'} onChange={handleChange2} value="b" name="radio-button-demo" inputProps={{ 'aria-label': 'B' }}/>} label="Non" />
        </RadioGroup>
    );
}