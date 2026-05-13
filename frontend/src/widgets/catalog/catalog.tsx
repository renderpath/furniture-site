import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { Container } from '../../shared/ui/container/container';

const catalogItems = [
    {
        title: 'Кухни',
        category: 'kitchens',
        price: 'от 90 000 ₽',
        image:
            'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Шкафы',
        category: 'wardrobes',
        price: 'от 70 000 ₽',
        image:
            'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Гардеробные',
        category: 'dressing',
        price: 'от 85 000 ₽',
        image:
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Прихожие',
        category: 'hallway',
        price: 'от 45 000 ₽',
        image:
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
];

export const Catalog = () => {
    return (
        <Box
            id="catalog"
            sx={{
                py: 12,
                scrollMarginTop: '120px',
                backgroundColor: '#080B10',
                color: '#fff',
            }}
        >
            <Container>
                <Box
                    sx={{
                        mb: 5,
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 3,
                        alignItems: { xs: 'flex-start', md: 'flex-end' },
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 1,
                                fontSize: { xs: 32, md: 48 },
                                fontWeight: 900,
                            }}
                        >
                            Популярные категории
                        </Typography>

                        <Typography sx={{ color: '#AAB0BF', maxWidth: 560 }}>
                            Посмотрите основные направления мебели на заказ
                            или перейдите в полный каталог.
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        to="/catalog"
                        variant="outlined"
                        sx={{
                            color: '#fff',
                            borderColor: '#2F6DF6',
                        }}
                    >
                        Перейти в каталог
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {catalogItems.map((item) => (
                        <Grid
                            key={item.title}
                            size={{ xs: 12, sm: 6, md: 3 }}
                        >
                            <Card
                                sx={{
                                    height: 360,
                                    overflow: 'hidden',
                                    backgroundColor: '#101827',
                                    border:
                                        '1px solid rgba(255,255,255,0.08)',
                                    transition: '0.3s',

                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                    },
                                }}
                            >
                                <CardActionArea
                                    component={Link}
                                    to={`/catalog?category=${item.category}`}
                                    sx={{ height: '100%' }}
                                >
                                    <Box
                                        sx={{
                                            height: '100%',
                                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <CardContent sx={{ color: '#fff' }}>
                                            <Typography
                                                sx={{
                                                    fontSize: 24,
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: '#C7CBD6',
                                                    mb: 2,
                                                }}
                                            >
                                                {item.price}
                                            </Typography>

                                            <Button variant="contained">
                                                Смотреть каталог
                                            </Button>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};