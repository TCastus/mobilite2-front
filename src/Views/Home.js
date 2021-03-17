import React from 'react';
import '../Assets/Style/App.css';
import TestApi from "../Component/APITest";


function Home() {
    return (
        <div className="Accueil">
            <h1> Accueil </h1>
            <TestApi/>
        </div>
    );
}

export default Home;