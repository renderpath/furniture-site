import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',

        primary: {
            main: '#2F6DF6',
            light: '#5B8CFF',
            dark: '#1746B8',
            contrastText: '#FFFFFF',
        },

        secondary: {
            main: '#C49A6C',
            light: '#D7B18A',
            dark: '#9D7447',
            contrastText: '#FFFFFF',
        },

        background: {
            default: '#0B0F17',
            paper: '#101827',
        },

        text: {
            primary: '#FFFFFF',
            secondary: '#AAB0BF',
        },

        success: {
            main: '#22C55E',
        },

        error: {
            main: '#EF4444',
        },

        warning: {
            main: '#F59E0B',
        },

        divider: 'rgba(255,255,255,0.08)',
    },

    typography: {
        fontFamily: 'Inter, sans-serif',

        h1: {
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1.1,
        },

        h2: {
            fontSize: '42px',
            fontWeight: 800,
            lineHeight: 1.2,
        },

        h3: {
            fontSize: '32px',
            fontWeight: 800,
            lineHeight: 1.2,
        },

        h4: {
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: 1.3,
        },

        h5: {
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: 1.3,
        },

        h6: {
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 1.3,
        },

        body1: {
            fontSize: '16px',
            lineHeight: 1.6,
        },

        body2: {
            fontSize: '14px',
            lineHeight: 1.5,
        },

        button: {
            fontSize: '15px',
            fontWeight: 600,
            textTransform: 'none',
        },
    },

    shape: {
        borderRadius: 16,
    },

    spacing: 4,

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#0B0F17',
                    color: '#FFFFFF',
                    margin: 0,
                    padding: 0,
                    minWidth: '320px',
                    overflowX: 'hidden',
                },

                '*': {
                    boxSizing: 'border-box',
                },

                a: {
                    color: 'inherit',
                    textDecoration: 'none',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    padding: '12px 24px',
                    boxShadow: 'none',
                },

                contained: {
                    background: 'linear-gradient(135deg, #2F6DF6, #1746B8)',

                    '&:hover': {
                        boxShadow: 'none',
                        background:
                            'linear-gradient(135deg, #5B8CFF, #2F6DF6)',
                    },
                },

                outlined: {
                    borderWidth: '1px',

                    '&:hover': {
                        borderWidth: '1px',
                    },
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    borderRadius: 20,
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },

        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    backgroundColor: '#161F2F',

                    '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.08)',
                    },

                    '&:hover fieldset': {
                        borderColor: '#2F6DF6',
                    },

                    '&.Mui-focused fieldset': {
                        borderColor: '#2F6DF6',
                    },
                },

                input: {
                    color: '#FFFFFF',
                },
            },
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderColor: 'rgba(255,255,255,0.08)',
                    color: '#FFFFFF',
                },

                head: {
                    fontWeight: 700,
                    backgroundColor: '#161F2F',
                },
            },
        },

        MuiSelect: {
            styleOverrides: {
                select: {
                    color: '#FFFFFF',
                },
            },
        },
    },
});