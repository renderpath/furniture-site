import { Button, MenuItem, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface OrderFormData {
    name: string;
    phone: string;
    category: string;
    comment: string;
}

export const OrderForm = () => {
    const { register, handleSubmit, reset } = useForm<OrderFormData>();

    const onSubmit = (data: OrderFormData) => {
        console.log('Заявка:', data);
        reset();
    };

    return (
        <Stack
            component="form"
            spacing={2}
            onSubmit={handleSubmit(onSubmit)}
        >
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