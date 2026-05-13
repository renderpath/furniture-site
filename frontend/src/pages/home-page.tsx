import { useState } from 'react';
import { Box } from '@mui/material';

import { Header } from '../widgets/header/header';
import { Hero } from '../widgets/hero/hero';
import { Advantages } from '../widgets/advantages/advantages';
import { Catalog } from '../widgets/catalog/catalog';
import { WorkSteps } from '../widgets/work-steps/work-steps';
import { OrderModal } from '../widgets/order-modal/order-modal';
import { About } from '../widgets/about/about';
import { Projects } from '../widgets/projects/projects';
import { Faq } from '../widgets/faq/faq';
import { Contacts } from '../widgets/contacts/contacts';
import { Footer } from '../widgets/footer/footer';

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
            <About />
            <WorkSteps />
            <Projects />
            <Faq />
            <Contacts onOrderClick={openOrderModal} />
            <Footer />
            
            <OrderModal
                open={isOrderModalOpen}
                onClose={closeOrderModal}
            />
        </Box>
    );
};