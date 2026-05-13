import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';

import { Container } from '../../shared/ui/container/container';

const catalogItems = [
    {
        title: 'Кухни',
        price: 'от 90 000 ₽',
        image:
            'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Шкафы',
        price: 'от 70 000 ₽',
        image:
            'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Гардеробные',
        price: 'от 85 000 ₽',
        image:
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Прихожие',
        price: 'от 45 000 ₽',
        image:
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
];

export const Catalog = () => {
    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: '#080B10',
                color: '#fff',
            }}
        >
            <Container>
                <Box
                    sx={{
                        mb: 4,
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 2,
                        alignItems: 'end',
                    }}
                >
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 1,
                                fontSize: { xs: 30, md: 42 },
                                fontWeight: 800,
                            }}
                        >
                            Каталог
                        </Typography>

                        <Typography sx={{ color: '#AAB0BF' }}>
                            Популярные категории корпусной мебели
                        </Typography>
                    </Box>

                    <Button variant="outlined" sx={{ color: '#fff', borderColor: '#2F6DF6' }}>
                        Смотреть всё
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {catalogItems.map((item) => (
                        <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Card
                                sx={{
                                    height: 320,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 3,
                                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1)), url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: '#fff',
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 800, fontSize: 22 }}>
                                        {item.title}
                                    </Typography>

                                    <Typography sx={{ color: '#C7CBD6' }}>
                                        {item.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};