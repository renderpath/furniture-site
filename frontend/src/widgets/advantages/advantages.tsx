import { Box, Grid, Paper, Typography } from '@mui/material';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import { Container } from '../../shared/ui/container/container';

const advantages = [
    {
        icon: <DesignServicesOutlinedIcon />,
        title: 'Индивидуальный проект',
        text: 'Разрабатываем мебель под ваши размеры, задачи и интерьер.',
    },
    {
        icon: <HandymanOutlinedIcon />,
        title: 'Собственное производство',
        text: 'Контролируем качество на каждом этапе изготовления.',
    },
    {
        icon: <VerifiedOutlinedIcon />,
        title: 'Качественные материалы',
        text: 'Используем надёжную фурнитуру и проверенные материалы.',
    },
    {
        icon: <LocalShippingOutlinedIcon />,
        title: 'Доставка и сборка',
        text: 'Доставляем, собираем и устанавливаем мебель на объекте.',
    },
];

export const Advantages = () => {
    return (
        <Box
            sx={{
                py: 8,
                backgroundColor: '#0B0F17',
                color: '#fff',
            }}
        >
            <Container>
                <Grid container spacing={3}>
                    {advantages.map((item) => (
                        <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                            <Paper
                                sx={{
                                    height: '100%',
                                    p: 3,
                                    backgroundColor: '#101827',
                                    color: '#fff',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <Box
                                    sx={{
                                        mb: 2,
                                        color: '#2F6DF6',
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#AAB0BF',
                                        fontSize: 14,
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};