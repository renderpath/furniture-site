import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '../../shared/ui/container/container';

interface Props {
    onOrderClick: () => void;
}

const navItems = [
    { label: 'Каталог', href: '#catalog' },
    { label: 'Проекты', href: '#projects' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contacts' },
];

export const Header = ({ onOrderClick }: Props) => {
    return (
        <Box
            component="header"
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 20,
                py: 2,
                backgroundColor: 'rgba(11, 15, 23, 0.9)',
                backdropFilter: 'blur(14px)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <Container>
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Mebel Studio
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                component={item.href.startsWith('/') ? Link : 'a'}
                                to={item.href.startsWith('/') ? item.href : undefined}
                                href={!item.href.startsWith('/') ? item.href : undefined}
                                color="inherit"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>

                    <Button variant="contained" onClick={onOrderClick}>
                        Заказать замер
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};