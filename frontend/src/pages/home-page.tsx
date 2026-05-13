import { useState } from 'react';
import { Box } from '@mui/material';

import { Header } from '../widgets/header/header';
import { Hero } from '../widgets/hero/hero';
import { Advantages } from '../widgets/advantages/advantages';
import { Catalog } from '../widgets/catalog/catalog';
import { WorkSteps } from '../widgets/work-steps/work-steps';
import { OrderModal } from '../widgets/order-modal/order-modal';

export const HomePage = () => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const openOrderModal = () => {
        setIsOrderModalOpen(true);
    };

    const closeOrderModal = () => {
        setIsOrderModalOpen(false);
    };

    return (
        <Box>
            <Header onOrderClick={openOrderModal} />
            <Hero onOrderClick={openOrderModal} />
            <Advantages />
            <Catalog />
            <WorkSteps />

            <OrderModal
                open={isOrderModalOpen}
                onClose={closeOrderModal}
            />
        </Box>
    );
};