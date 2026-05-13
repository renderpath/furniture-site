import {
    Box,
    Button,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { Container } from '../../shared/ui/container/container';

interface Props {
    onOrderClick: () => void;
}

export const Contacts = ({ onOrderClick }: Props) => {
    return (
        <Box
            id="contacts"
            sx={{
                py: 12,
                backgroundColor: '#080B10',
                color: '#fff',
                scrollMarginTop: '100px',
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 2,
                                fontSize: { xs: 32, md: 48 },
                                fontWeight: 900,
                            }}
                        >
                            Обсудим ваш проект?
                        </Typography>

                        <Typography
                            sx={{
                                mb: 4,
                                color: '#AAB0BF',
                                fontSize: 18,
                                maxWidth: 560,
                            }}
                        >
                            Оставьте заявку — мы свяжемся с вами, уточним размеры,
                            пожелания и подготовим предварительный расчёт.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            onClick={onOrderClick}
                        >
                            Оставить заявку
                        </Button>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={2}>
                            <Paper
                                component="a"
                                href="tel:+79990000000"
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    gap: 2,
                                    alignItems: 'center',
                                    backgroundColor: '#101827',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <PhoneOutlinedIcon color="primary" />

                                <Box>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Телефон
                                    </Typography>

                                    <Typography sx={{ color: '#AAB0BF' }}>
                                        +7 999 000-00-00
                                    </Typography>
                                </Box>
                            </Paper>

                            <Paper
                                component="a"
                                href="mailto:example@yandex.ru"
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    gap: 2,
                                    alignItems: 'center',
                                    backgroundColor: '#101827',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <EmailOutlinedIcon color="primary" />

                                <Box>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Почта
                                    </Typography>

                                    <Typography sx={{ color: '#AAB0BF' }}>
                                        example@yandex.ru
                                    </Typography>
                                </Box>
                            </Paper>

                            <Paper
                                component="a"
                                href="https://yandex.ru/maps"
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    gap: 2,
                                    alignItems: 'center',
                                    backgroundColor: '#101827',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <LocationOnOutlinedIcon color="primary" />

                                <Box>
                                    <Typography sx={{ fontWeight: 800 }}>
                                        Адрес
                                    </Typography>

                                    <Typography sx={{ color: '#AAB0BF' }}>
                                        Ваш город, адрес производства или офиса
                                    </Typography>
                                </Box>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};