import { useMemo, useState } from 'react';

import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import {
    Link,
    useSearchParams,
} from 'react-router-dom';

import { Header } from '../widgets/header/header';
import { Footer } from '../widgets/footer/footer';
import { OrderModal } from '../widgets/order-modal/order-modal';

import { Container } from '../shared/ui/container/container';

import { catalogItems } from '../shared/config/catalog-items';

const filters = [
    { label: 'Все', value: 'all' },
    { label: 'Кухни', value: 'kitchens' },
    { label: 'Шкафы', value: 'wardrobes' },
    { label: 'Гардеробные', value: 'dressing' },
    { label: 'Прихожие', value: 'hallway' },
];

export const CatalogPage = () => {
    const [searchParams, setSearchParams] =
        useSearchParams();

    const selectedCategory =
        searchParams.get('category') || 'all';

    const [isOrderModalOpen, setIsOrderModalOpen] =
        useState(false);

    const [searchValue, setSearchValue] = useState('');

    const filteredItems = useMemo(() => {
        const categoryItems =
            selectedCategory === 'all'
                ? catalogItems
                : catalogItems.filter(
                    (item) =>
                        item.category === selectedCategory
                );

        const searchText = searchValue.toLowerCase();

        return categoryItems.filter((item) => {
            return (
                item.title
                    .toLowerCase()
                    .includes(searchText) ||
                item.description
                    .toLowerCase()
                    .includes(searchText)
            );
        });
    }, [selectedCategory, searchValue]);

    return (
        <Box
            sx={{
                backgroundColor: '#080B10',
                minHeight: '100vh',
            }}
        >
            <Header
                onOrderClick={() => setIsOrderModalOpen(true)}
            />

            <Box
                sx={{
                    py: 10,
                    color: '#fff',
                }}
            >
                <Container>
                    <Stack spacing={3} sx={{ mb: 6 }}>
                        <Button
                            component={Link}
                            to="/"
                            variant="outlined"
                            sx={{
                                width: 'fit-content',
                            }}
                        >
                            На главную
                        </Button>

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: 42, md: 72 },
                                fontWeight: 900,
                            }}
                        >
                            Каталог мебели
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 720,
                                color: '#AAB0BF',
                                fontSize: 18,
                            }}
                        >
                            Выберите категорию мебели и откройте
                            карточку, чтобы посмотреть проект
                            подробнее.
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            mb: 4,
                            overflowX: 'auto',
                            pb: 1,
                        }}
                    >
                        {filters.map((filter) => (
                            <Chip
                                key={filter.value}
                                label={filter.label}
                                clickable
                                color={
                                    selectedCategory === filter.value
                                        ? 'primary'
                                        : 'default'
                                }
                                onClick={() => {
                                    setSearchParams({
                                        category: filter.value,
                                    });
                                }}
                                sx={{
                                    fontSize: 15,
                                    px: 1,
                                }}
                            />
                        ))}
                    </Stack>

                    <TextField
                        label="Поиск по каталогу"
                        value={searchValue}
                        onChange={(event) =>
                            setSearchValue(event.target.value)
                        }
                        fullWidth
                        sx={{ mb: 4 }}
                    />

                    {filteredItems.length === 0 && (
                        <Paper sx={{ p: 4, mb: 4 }}>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    mb: 1,
                                }}
                            >
                                Ничего не найдено
                            </Typography>

                            <Typography color="text.secondary">
                                Попробуйте изменить категорию
                                или поисковый запрос.
                            </Typography>
                        </Paper>
                    )}

                    <Grid container spacing={3}>
                        {filteredItems.map((item) => (
                            <Grid
                                key={item.id}
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 4,
                                }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
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
                                        to={`/catalog/${item.id}`}
                                    >
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{
                                                width: '100%',
                                                height: 280,
                                                objectFit: 'cover',
                                            }}
                                        />

                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    color: '#fff',
                                                    fontSize: 24,
                                                    fontWeight: 800,
                                                    mb: 1,
                                                }}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: '#AAB0BF',
                                                    mb: 2,
                                                }}
                                            >
                                                {item.description}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: '#5B8CFF',
                                                    fontWeight: 800,
                                                    fontSize: 18,
                                                }}
                                            >
                                                {item.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Footer />

            <OrderModal
                open={isOrderModalOpen}
                onClose={() =>
                    setIsOrderModalOpen(false)
                }
            />
        </Box>
    );
};