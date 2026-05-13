import { Box, Button, Stack, Typography } from '@mui/material';

import { Container } from '../../shared/ui/container/container';

interface Props {
    onOrderClick: () => void;
}

export const Hero = ({ onOrderClick }: Props) => {
    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: '#0B0F17',
                color: '#fff',
                minHeight: '620px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container>
                <Stack spacing={4} sx={{ maxWidth: 620 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: 36, md: 64 },
                            fontWeight: 800,
                            lineHeight: 1.1,
                        }}
                    >
                        Корпусная мебель на заказ
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: 18, md: 22 },
                            color: '#C7CBD6',
                            maxWidth: 520,
                        }}
                    >
                        Кухни, шкафы, гардеробные и мебель по индивидуальным размерам
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button variant="contained" size="large" onClick={onOrderClick}>
                            Рассчитать проект
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                color: '#fff',
                                borderColor: '#2F6DF6',
                            }}
                        >
                            Смотреть проекты
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};