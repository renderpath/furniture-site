import { Box, Button, Stack, Typography } from '@mui/material';

import { Container } from '../../shared/ui/container/container';

interface Props {
    onOrderClick: () => void;
}

export const Header = ({ onOrderClick }: Props) => {
    return (
        <Box
            sx={{
                py: 2,
                backgroundColor: '#fff',
                borderBottom: '1px solid #EAEAEA',
            }}
        >
            <Container>
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        Furniture
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Button color="inherit">Каталог</Button>
                        <Button color="inherit">О нас</Button>
                        <Button color="inherit">Контакты</Button>

                        <Button variant="contained" onClick={onOrderClick}>
                            Заказать
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};