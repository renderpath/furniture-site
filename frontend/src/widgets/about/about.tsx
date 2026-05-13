import { Box, Grid, Paper, Stack, Typography } from '@mui/material';

import { Container } from '../../shared/ui/container/container';

const stats = [
    {
        value: '8+',
        label: 'лет опыта',
    },
    {
        value: '450+',
        label: 'готовых проектов',
    },
    {
        value: '30',
        label: 'дней средний срок',
    },
];

export const About = () => {
    return (
        <Box
            id="about"
            sx={{
                py: 12,
                backgroundColor: '#0B0F17',
                color: '#fff',
                scrollMarginTop: '100px',
            }}
        >
            <Container>
                <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80"
                            alt="Производство мебели"
                            sx={{
                                width: '100%',
                                height: { xs: 360, md: 520 },
                                objectFit: 'cover',
                                borderRadius: 6,
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={3}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: 32, md: 48 },
                                    fontWeight: 900,
                                }}
                            >
                                Делаем мебель под ваш дом, а не наоборот
                            </Typography>

                            <Typography sx={{ color: '#AAB0BF', fontSize: 18 }}>
                                Мы проектируем и изготавливаем корпусную мебель по индивидуальным размерам:
                                от компактных решений для небольших квартир до больших кухонь,
                                гардеробных и систем хранения.
                            </Typography>

                            <Typography sx={{ color: '#AAB0BF', fontSize: 18 }}>
                                Берём на себя весь процесс: замер, проектирование, подбор материалов,
                                производство, доставку и установку.
                            </Typography>

                            <Grid container spacing={2}>
                                {stats.map((item) => (
                                    <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
                                        <Paper
                                            sx={{
                                                p: 3,
                                                backgroundColor: '#101827',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: 34,
                                                    fontWeight: 900,
                                                    color: '#5B8CFF',
                                                }}
                                            >
                                                {item.value}
                                            </Typography>

                                            <Typography sx={{ color: '#AAB0BF' }}>
                                                {item.label}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};