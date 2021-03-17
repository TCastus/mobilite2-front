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
        role: {
            guest: 'rgba(154,163,229,0.8)',
            reporter: '#354185',
            developer: '#040822',
            maintainer: '#d3d3e2',
            owner: '#7b3af6',
        }
    },
});