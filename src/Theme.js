import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {cyan, pink} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[600],
            light: cyan[300],
            dark:cyan[900],
            contrastText: '#fff',
        },
        secondary: {
            main: pink[200],
            light: pink[50],
            dark: pink[500],
            contrastText: '#000',
        },

        third: {
            cadetblue: '#5F9EA0',
            whitesmoke: '#F5F5F5',
            lightgrey: '#D3D3D3',
            white: '#FFFFFF',
            gold: '#c59b08',
            darkGrey: '#404040',
            lightgray: 'rgba(230,230,230)',

        },

        role: {
            guest: 'rgba(154,163,229,0.8)',
            reporter: '#354185',
            developer: '#040822',
            maintainer: '#d3d3e2',
            owner: '#7b3af6',
        }
    },
    typography: {
        fontFamily: [
            'sans-serif',
            'Roboto',
            'Arial',
        ].join(','),


    },
    fontVariantCaps: {
        smallCaps: 'small-caps',
    },

    fontType: {
        bold: 'bold',
    },

    fontSize: {
        primary: "24px/1",
    },

});

theme.photoSize = {
    width: '50%',
    [theme.breakpoints.up('md')]: {
        width: '100%',
    },
},

theme.typography.h1 = {
    fontSize: '2.5em',
    [theme.breakpoints.up('md')]: {
        fontSize: '4.5em',
    },

};

theme.typography.h2 = {
    fontSize: '1.25em',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5em',
    },


};

theme.typography.h3 = {
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
    },

};

theme.typography.h4 = {
    fontSize: '1.5rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
    },

};


theme.typography.h5 = {
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.3rem',
    },

};

theme.typography.h6 = {
    fontSize: '0.75rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },

};

theme.typography.h7 = {
    fontSize: '0.1rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
};