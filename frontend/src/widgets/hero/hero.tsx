import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '../../shared/ui/container/container';

interface Props {
    onOrderClick: () => void;
}

export const Hero = ({ onOrderClick }: Props) => {
    return (
        <Box
            sx={{
                minHeight: '720px',
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                backgroundImage:
                    'linear-gradient(90deg, rgba(11,15,23,0.96) 0%, rgba(11,15,23,0.78) 45%, rgba(11,15,23,0.25) 100%), url(https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container>
                <Stack spacing={4} sx={{ maxWidth: 720 }}>
                    <Chip
                        label="Корпусная мебель на заказ"
                        sx={{
                            width: 'fit-content',
                            color: '#fff',
                            backgroundColor: 'rgba(255,255,255,0.12)',
                        }}
                    />

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: 40, md: 72 },
                            fontWeight: 900,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                        }}
                    >
                        Мебель, которая идеально встанет в ваш интерьер
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 560,
                            color: '#C7CBD6',
                            fontSize: { xs: 18, md: 22 },
                        }}
                    >
                        Кухни, шкафы, гардеробные, прихожие и мебель по индивидуальным размерам с замером, проектом и установкой.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button variant="contained" size="large" onClick={onOrderClick}>
                            Рассчитать стоимость
                        </Button>

                        <Button
                            component={Link}
                            to="/catalog"
                            variant="outlined"
                            size="large"
                            sx={{
                                color: '#fff',
                                borderColor: 'rgba(255,255,255,0.35)',
                            }}
                        >
                            Смотреть каталог
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};