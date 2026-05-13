import { Container as MuiContainer } from '@mui/material';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Container = ({ children }: Props) => {
    return (
        <MuiContainer maxWidth="xl">
            {children}
        </MuiContainer>
    );
};