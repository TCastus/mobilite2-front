import React from "react";

import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import EuroIcon from '@material-ui/icons/Euro';
import DescriptionIcon from '@material-ui/icons/Description';

import Home from "../Views/Home";
import Experience from "../Views/Experience";
import Finance from "../Views/Finance";
import Mobilite from "../Views/Mobilite";
import Apropos from "../Views/A_Propos";
import Contact from "../Views/Contact";
import MentionsLegales from "../Views/MentionsLegales";
import UniDetail from "../Views/UniDetail";
import Rechercher from "../Views/Rechercher";



/*
Constant used for route generation in ../App.js
To create the routes & navbar, we iterate through this array of objects
 */

export const routeIndex = {
    navigation: [
        {
            name: "Accueil",
            component: Home,
            path: '/',
            icon: <HomeIcon />,
        },
        {
            name: "Avis",
            component: Experience,
            path: '/experience',
            icon: <RecordVoiceOverIcon />,
        },
        {
            name: "Rechercher",
            component: Rechercher,
            path: '/rechercher',
            icon: <EuroIcon />,
        },
        {
            name: "Financements",
            component: Finance,
            path: '/finance',
            icon: <EuroIcon />,
        },
        {
            name:"Mobilités",
            component: Mobilite,
            path: '/mobilite',
            icon: <DescriptionIcon />
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
            name:"Détail Université",
            component: UniDetail,
            path: '/universite/:id'
        },
    ]

};
