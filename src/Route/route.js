import Home from "../Views/Home";
import Experience from "../Views/Experience";
import Finance from "../Views/Finance";
import Mobilite from "../Views/Mobilite";
import Universite from "../Views/Universite";

/*
Constant used for route generaction in ../App.js
To create the routes & navbar, we iterate through this array of objects
 */
export const routeList = [
    {
        name: "Accueil",
        component: Home,
        path: '/'
    },
    {
        name: "Avis",
        component: Experience,
        path: '/experience'
    },
    {
        name: "Financements",
        component: Finance,
        path: '/finance'
    },
    {
        name:"Mobilités",
        component: Mobilite,
        path: '/mobilite'
    },
    {
        name: "Universités",
        component: Universite,
        path: '/universite'
    }
];