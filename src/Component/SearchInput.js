/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import {Button} from "@material-ui/core";

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
    const [value, setValue] = React.useState(null);

    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setValue({
                            title: newValue,
                        });
                    } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setValue({
                            title: newValue.inputValue,
                        });
                    } else {
                        setValue(newValue);
                    }
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={universities}
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                }}
                renderOption={(option) => option.title}
                style={{ width: 300, position: 'absolute', left: '50%', top: '60%', transform: 'translate(-50%, -50%)'}}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Rechercher une université" variant="outlined" />
                )}
            />

            <Button variant="contained" color='theme.palette.primary.light' href={value}>
                Rechercher
            </Button>
        </div>

    );
}

const universities = [
    { title: 'Aalto University', country: 'Finland'},
    { title : 'test0', country: 'France'},
    { title : 'test1', country: 'France'},
    { title : 'test2', country: 'France'},
    { title : 'test3', country: 'France'},
    { title : 'test4', country: 'France'},
    { title : 'test5', country: 'France'},
    { title : 'test6', country: 'France'},
    { title : 'test7', country: 'France'},
    { title : 'test8', country: 'France'},
    { title : 'test9', country: 'France'},
    { title : 'test10', country: 'France'},
];

