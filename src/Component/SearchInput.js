/* eslint-disable no-use-before-define*/
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Button} from "@material-ui/core";


export default function ComboBox() {

    const universities = [
        { title: 'Aalto University', country: 'Finlande', ref: 'aalto-university'},
        { title : 'a-test0', country: 'France', ref: 'test0'},
        { title : 'b-test1', country: 'France', ref: 'test1'},
        { title : 'c-test2', country: 'France', ref: 'test2'},
        { title : 'd-test3', country: 'France', ref: 'test3'},
        { title : 'e-test4', country: 'France', ref: 'test4'},
        { title : 'f-test5', country: 'France', ref: 'test5'},
        { title : 'g-test6', country: 'France', ref: 'test6'},
        { title : 'h-test7', country: 'France', ref: 'test7'},
        { title : 'i-test8', country: 'France', ref: 'test8'},
        { title : 'j-test9', country: 'France', ref: 'test9'},
        { title : 'k-test10', country: 'France', ref: 'test10'},
    ];
    const [value, setValue] = React.useState(null);
    let ref, i;
    if (value != null){
        for(i=0;i<universities.length;i++) {
            if(value.title === universities[i].title){
                ref = "./universite/" + universities[i].ref;
            }
        }

    }


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
                style={{ width: 300, position: 'absolute', left: '50%', top: '60%', transform: 'translate(-50%, -50%)'}}
                renderInput={(params) => (
                    <TextField {...params} label="Rechercher une université" variant="outlined" />
                )}
            />
            <br/><br/><br/><br/><br/>
            <Button variant="contained" color='theme.palette.primary.light' href={ref}>
                Rechercher
            </Button>
        </div>

    );
}






