import { useState } from 'react';

import {
    Alert,
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import axios from 'axios';

export const AdminLoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            setErrorMessage('');

            const response = await axios.post(
                'http://localhost:5001/api/admin/login',
                {
                    login,
                    password,
                }
            );

            localStorage.setItem('admin_token', response.data.token);

            window.location.href = '/admin';
        } catch {
            setErrorMessage('Неверный логин или пароль');
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#0B0F17',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
            }}
        >
            <Paper
                sx={{
                    width: '100%',
                    maxWidth: 420,
                    p: 4,
                    backgroundColor: '#101827',
                    color: '#fff',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        fontWeight: 800,
                    }}
                >
                    Вход в админку
                </Typography>

                <Stack spacing={2}>
                    {errorMessage && (
                        <Alert severity="error">
                            {errorMessage}
                        </Alert>
                    )}

                    <TextField
                        label="Логин"
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Пароль"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleLogin}
                    >
                        Войти
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};