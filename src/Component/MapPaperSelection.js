import '../Assets/Style/SelectionMap.css';
import React from 'react';
import{ makeStyles } from "@material-ui/core/styles";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
    paper: {
        background: 'cadetblue',
        margin: theme.spacing(2),
        padding: theme.spacing(5),
        textAlign: 'center',
    },
    map: {
        width: '100%',
        height: '400px',
        margin: theme.spacing(2),
        align: "left",
    },
    uniList: {
        align: "right",
    }
}));

export default function MapPaperSelection () {
    const classes = useStyles();
    const [value, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant={'h2'}> Choisissez votre destination </Typography>

            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={classes.map}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>

                </Grid>

                <Grid item xs={6}>

                    <Typography display="inColomn">U</Typography>
                    <Typography display="inColomn">N</Typography>
                    <Typography display="inColomn">I</Typography>
                    <Typography display="inColomn">V</Typography>
                    <Typography display="inColomn">E</Typography>
                    <Typography display="inColomn">R</Typography>
                    <Typography display="inColomn">S</Typography>
                    <Typography display="inColomn">I</Typography>
                    <Typography display="inColomn">T</Typography>
                    <Typography display="inColomn">E</Typography>


                    <Typography variant={'h5'}>Universités</Typography>
                    <br/>
                    <Select labelId="universite" id="select" value={value} open={open} onClose={handleClose} onOpen={handleOpen} onChange={handleChange} >
                        <MenuItem value="10">U1</MenuItem>
                        <MenuItem value="20">U2</MenuItem>
                        <MenuItem value="30">U3</MenuItem>
                        <MenuItem value="40">U3</MenuItem>
                    </Select>
                </Grid>

            </Grid>

        </Paper>
    );
}