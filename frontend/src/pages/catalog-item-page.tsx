import { useState } from 'react';

import {
    Box,
    Button,
    Chip,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material';

import { Link, useParams } from 'react-router-dom';

import { Header } from '../widgets/header/header';
import { Footer } from '../widgets/footer/footer';
import { OrderModal } from '../widgets/order-modal/order-modal';

import { Container } from '../shared/ui/container/container';

import { catalogItems } from '../shared/config/catalog-items';

const categoryLabels: Record<string, string> = {
    kitchens: 'Кухня',
    wardrobes: 'Шкаф',
    dressing: 'Гардеробная',
    hallway: 'Прихожая',
};

export const CatalogItemPage = () => {
    const { id } = useParams();

    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const item = catalogItems.find(
        (catalogItem) => catalogItem.id === Number(id)
    );

    if (!item) {
        return (
            <Box sx={{ backgroundColor: '#080B10', minHeight: '100vh' }}>
                <Header onOrderClick={() => setIsOrderModalOpen(true)} />

                <Container>
                    <Box sx={{ py: 10, color: '#fff' }}>
                        <Typography
                            variant="h3"
                            sx={{ mb: 3, fontWeight: 800 }}
                        >
                            Карточка не найдена
                        </Typography>

                        <Button
                            component={Link}
                            to="/catalog"
                            variant="contained"
                        >
                            Вернуться в каталог
                        </Button>
                    </Box>
                </Container>

                <Footer />

                <OrderModal
                    open={isOrderModalOpen}
                    onClose={() => setIsOrderModalOpen(false)}
                />
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: '#080B10', minHeight: '100vh' }}>
            <Header onOrderClick={() => setIsOrderModalOpen(true)} />

            <Box sx={{ py: 10, color: '#fff' }}>
                <Container>
                    <Button
                        component={Link}
                        to={`/catalog?category=${item.category}`}
                        variant="outlined"
                        sx={{ mb: 4 }}
                    >
                        Назад в каталог
                    </Button>

                    <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: '100%',
                                    height: { xs: 360, md: 620 },
                                    objectFit: 'cover',
                                    borderRadius: 6,
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Paper
                                sx={{
                                    height: '100%',
                                    p: { xs: 3, md: 5 },
                                    backgroundColor: '#101827',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <Stack spacing={3}>
                                    <Chip
                                        label={categoryLabels[item.category]}
                                        sx={{
                                            width: 'fit-content',
                                            backgroundColor: 'rgba(47, 109, 246, 0.16)',
                                            color: '#5B8CFF',
                                            fontWeight: 700,
                                        }}
                                    />

                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: { xs: 38, md: 56 },
                                            fontWeight: 900,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography sx={{ color: '#AAB0BF', fontSize: 18 }}>
                                        {item.description}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: '#5B8CFF',
                                            fontSize: 28,
                                            fontWeight: 900,
                                        }}
                                    >
                                        {item.price}
                                    </Typography>

                                    <Box>
                                        <Typography
                                            sx={{
                                                mb: 1.5,
                                                fontSize: 20,
                                                fontWeight: 800,
                                            }}
                                        >
                                            Особенности
                                        </Typography>

                                        <Stack spacing={1}>
                                            {item.features.map((feature) => (
                                                <Typography
                                                    key={feature}
                                                    sx={{ color: '#C7CBD6' }}
                                                >
                                                    — {feature}
                                                </Typography>
                                            ))}
                                        </Stack>
                                    </Box>

                                    <Box>
                                        <Typography
                                            sx={{
                                                mb: 1.5,
                                                fontSize: 20,
                                                fontWeight: 800,
                                            }}
                                        >
                                            Материалы
                                        </Typography>

                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            sx={{ flexWrap: 'wrap', gap: 1 }}
                                        >
                                            {item.materials.map((material) => (
                                                <Chip
                                                    key={material}
                                                    label={material}
                                                    sx={{
                                                        backgroundColor: 'rgba(255,255,255,0.08)',
                                                        color: '#fff',
                                                    }}
                                                />
                                            ))}
                                        </Stack>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => setIsOrderModalOpen(true)}
                                    >
                                        Получить расчёт
                                    </Button>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Footer />

            <OrderModal
                open={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                defaultComment={`Интересует: ${item.title}`}
                defaultCategory={categoryLabels[item.category]}
            />
        </Box>
    );
};