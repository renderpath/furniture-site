import { useState } from 'react';
import { Alert, Button, MenuItem, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { createOrder, type OrderFormData } from '../../shared/api/orders';

export const OrderForm = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { register, handleSubmit, reset } = useForm<OrderFormData>();

    const onSubmit = async (data: OrderFormData) => {
        try {
            setSuccessMessage('');
            setErrorMessage('');

            await createOrder(data);

            setSuccessMessage('Заявка успешно отправлена');
            reset();
        } catch {
            setErrorMessage('Не удалось отправить заявку. Попробуйте позже.');
        }
    };

    return (
        <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
            {successMessage && (
                <Alert severity="success">
                    {successMessage}
                </Alert>
            )}

            {errorMessage && (
                <Alert severity="error">
                    {errorMessage}
                </Alert>
            )}

            <TextField
                label="Ваше имя"
                fullWidth
                {...register('name', { required: true })}
            />

            <TextField
                label="Телефон"
                fullWidth
                {...register('phone', { required: true })}
            />

            <TextField
                select
                label="Что хотите заказать?"
                defaultValue=""
                fullWidth
                {...register('category', { required: true })}
            >
                <MenuItem value="Кухня">Кухня</MenuItem>
                <MenuItem value="Шкаф">Шкаф</MenuItem>
                <MenuItem value="Гардеробная">Гардеробная</MenuItem>
                <MenuItem value="Прихожая">Прихожая</MenuItem>
                <MenuItem value="Другое">Другое</MenuItem>
            </TextField>

            <TextField
                label="Комментарий"
                multiline
                rows={4}
                fullWidth
                {...register('comment')}
            />

            <Button type="submit" variant="contained" size="large">
                Отправить заявку
            </Button>
        </Stack>
    );
};