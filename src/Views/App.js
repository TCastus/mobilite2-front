import '../Assets/Style/App.css';
import React from 'react';
import Navbar from '../Component/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routeIndex} from '../Route/route';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "../Theme";
import FooterAppBar from "../Component/FooterAppBar";

/**
 * Main component of the mobilite app
 * Generates routes using a description file,
 * and creates the browser
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    /* Generate a list of <Route> components using the description in route.js */
    const gen_routes = Object.keys(routeIndex).map((category, cat_index) => {
        return routeIndex[category].map((route, route_index) => {
            return <Route exact path={route.path}
                key={"route_" + cat_index + "_" + route_index}
                component={route.component}/>;
        });
    });

    return (
        <div className="App">
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar routes={routeIndex.navigation}/>

                    <Switch>
                        {gen_routes}
                    </Switch>

                    <FooterAppBar routes={routeIndex.footer}/>
                </MuiThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;