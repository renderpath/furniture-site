import { Box, Button, Stack, Typography } from '@mui/material';

import { Container } from '../../shared/ui/container/container';

const navItems = [
    { label: 'Каталог', href: '#catalog' },
    { label: 'Проекты', href: '#projects' },
    { label: 'О нас', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contacts' },
];

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 5,
                backgroundColor: '#05070B',
                color: '#fff',
                borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <Container>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: 3,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 1,
                                fontWeight: 800,
                            }}
                        >
                            Mebel Studio
                        </Typography>

                        <Typography sx={{ color: '#AAB0BF' }}>
                            Корпусная мебель на заказ
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                href={item.href}
                                color="inherit"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>

                <Typography
                    sx={{
                        mt: 4,
                        color: '#6B7280',
                        fontSize: 14,
                    }}
                >
                    © 2026 Mebel Studio. Все права защищены.
                </Typography>
            </Container>
        </Box>
    );
};