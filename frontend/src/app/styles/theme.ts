import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1E1E1E',
        },
        secondary: {
            main: '#C49A6C',
        },
        background: {
            default: '#F5F5F5',
        },
    },

    typography: {
        fontFamily: 'Inter, sans-serif',

        h1: {
            fontSize: '48px',
            fontWeight: 700,
        },

        h2: {
            fontSize: '36px',
            fontWeight: 700,
        },

        body1: {
            fontSize: '16px',
        },
    },

    shape: {
        borderRadius: 12,
    },
});