import '../Assets/Style/App.css';
import React, {useState} from 'react';
import Navbar from '../Component/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routeIndex} from '../Route/route';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "../Theme";
import FooterAppBar from "../Component/FooterAppBar";
import SnackBarComponent from "../Component/SnackBarComponent";

/**
 * Main component of the mobilite app
 * Generates routes using a description file,
 * and creates the browser
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const [errorMessage, setError] = useState("");

    /* Generate a list of <Route> components using the description in route.js */
    const gen_routes = Object.keys(routeIndex).map((category, cat_index) => {
        return routeIndex[category].map((route, route_index) => {
            return <Route exact path={route.path}
                key={"route_" + cat_index + "_" + route_index}
                render={(props) => <route.component {...props} errorHandler={setError}/>} />;
        });
    });

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>

                <BrowserRouter basename={process.env.NODE_ENV==="production" ? '/mobilite2-front/': ''}>
                    <CssBaseline />
                    <Navbar routes={routeIndex.navigation}/>

                    <Switch>
                        {gen_routes}
                    </Switch>

                    {(errorMessage !== "") ? <SnackBarComponent type={"error"} message={errorMessage}/> : null}
                    <FooterAppBar routes={routeIndex.footer}/>
                </BrowserRouter>

            </MuiThemeProvider>
        </div>
    );
}

export default App;