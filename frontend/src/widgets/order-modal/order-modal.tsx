import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { OrderForm } from '../../features/order-form/order-form';

interface Props {
    open: boolean;
    onClose: () => void;
    defaultComment?: string;
    defaultCategory?: string;
}

export const OrderModal = ({
                               open,
                               onClose,
                               defaultComment = '',
                               defaultCategory = '',
                           }: Props) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                Оставить заявку

                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 12,
                        top: 12,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Box sx={{ pt: 1 }}>
                    <OrderForm
                        defaultComment={defaultComment}
                        defaultCategory={defaultCategory}
                    />
                </Box>
            </DialogContent>
        </Dialog>
    );
};