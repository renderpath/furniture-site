import { Box, Grid, Paper, Typography } from '@mui/material';

import { Container } from '../../shared/ui/container/container';

const steps = [
    {
        number: '01',
        title: 'Оставляете заявку',
        text: 'Связываемся с вами, уточняем задачу и пожелания.',
    },
    {
        number: '02',
        title: 'Делаем замер',
        text: 'Выезжаем на объект и фиксируем точные размеры.',
    },
    {
        number: '03',
        title: 'Готовим проект',
        text: 'Создаём дизайн, рассчитываем стоимость и сроки.',
    },
    {
        number: '04',
        title: 'Изготавливаем мебель',
        text: 'Запускаем производство после согласования проекта.',
    },
    {
        number: '05',
        title: 'Доставляем и устанавливаем',
        text: 'Привозим мебель, собираем и проверяем результат.',
    },
];

export const WorkSteps = () => {
    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: '#0B0F17',
                color: '#fff',
            }}
        >
            <Container>
                <Box sx={{ mb: 5 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 1,
                            fontSize: { xs: 30, md: 42 },
                            fontWeight: 800,
                        }}
                    >
                        Как мы работаем
                    </Typography>

                    <Typography sx={{ color: '#AAB0BF' }}>
                        От первой заявки до готовой мебели у вас дома
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {steps.map((step) => (
                        <Grid key={step.number} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Paper
                                sx={{
                                    height: '100%',
                                    p: 3,
                                    backgroundColor: '#101827',
                                    color: '#fff',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <Typography
                                    sx={{
                                        mb: 2,
                                        color: '#2F6DF6',
                                        fontSize: 34,
                                        fontWeight: 800,
                                    }}
                                >
                                    {step.number}
                                </Typography>

                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontSize: 20,
                                        fontWeight: 700,
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#AAB0BF',
                                    }}
                                >
                                    {step.text}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};