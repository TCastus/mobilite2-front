import '../Assets/Style/App.css';
import React from 'react';
import Nav from './Nav';
import Experience from './Experience';
import Finance from './Finance';
import Mobilite from './Mobilite';
import Universite from './Universite';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/experience' component={Experience}/>
                    <Route path='/finance' component={Finance}/>
                    <Route path='/mobilite' component={Mobilite}/>
                    <Route path='/universite' component={Universite}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;