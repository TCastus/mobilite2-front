import '../Assets/Style/App.css';
import React from 'react';
import Nav from '../Route/Nav';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routeList} from '../Route/route';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "../Theme";

/**
 * Main component of the mobilite app
 * Generates routes using a description file,
 * and creates the browser
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    /*
    Generate a list of <Route> components using the description in route.js
     */
    const gen_routes = routeList.map((route, index) => {
        console.log(route.path, route.component);
        return <Route exact path={route.path}
            key={"route_" + index}
            component={route.component}/>;
    });

    return (
        <div className="App">
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Nav routes={routeList}/>

                    <Switch>
                        {gen_routes}
                    </Switch>
                </MuiThemeProvider>
            </BrowserRouter>
        </div>

    );
}

export default App;