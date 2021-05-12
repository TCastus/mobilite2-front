import {TextField} from "@material-ui/core";
import React from "react";


export default function TextFieldPaysDISABLED () {
    return(
        <TextField
            disabled
            id="outlined-disabled"
            label="Pays"
            variant="filled"
            size="small"
        />
    );
}