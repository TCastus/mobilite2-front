import Home from "../Views/Home";
import Experience from "../Views/Experience";
import Finance from "../Views/Finance";
import Mobilite from "../Views/Mobilite";
import Universite from "../Views/Universite";
import Apropos from "../Views/A_Propos";
import Contact from "../Views/Contact";
import MentionsLegales from "../Views/MentionsLegales";

/*
Constant used for route generation in ../App.js
To create the routes & navbar, we iterate through this array of objects
 */

export const routeIndex = {
    navigation: [
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
            name:"Universités",
            component: Universite,
            path: '/universite'
        },
    ],
    footer: [
        {
            name: "A propos",
            component: Apropos,
            path: '/a-propos'
        },
        {
            name: "Contact",
            component: Contact,
            path: '/contact'
        },
        {
            name: "Mentions légales",
            component: MentionsLegales,
            path: '/mentions-legales'
        }
    ],
    other: [
        {

        }
    ]
};
