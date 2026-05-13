import { useEffect, useState } from 'react';

import {
    Alert,
    Button,
    MenuItem,
    Stack,
    TextField,
} from '@mui/material';

import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import {
    createOrder,
    type OrderFormData,
} from '../../shared/api/orders';

interface Props {
    defaultComment?: string;
    defaultCategory?: string;
}

export const OrderForm = ({
                              defaultComment = '',
                              defaultCategory = '',
                          }: Props) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<OrderFormData>({
        defaultValues: {
            name: '',
            phone: '',
            category: defaultCategory,
            comment: defaultComment,
        },
    });

    useEffect(() => {
        reset({
            name: '',
            phone: '',
            category: defaultCategory,
            comment: defaultComment,
        });
    }, [defaultCategory, defaultComment, reset]);

    const onSubmit = async (data: OrderFormData) => {
        try {
            setSuccessMessage('');
            setErrorMessage('');

            await createOrder(data);

            setSuccessMessage(
                'Заявка отправлена. Мы свяжемся с вами в ближайшее время.'
            );

            reset({
                name: '',
                phone: '',
                category: defaultCategory,
                comment: defaultComment,
            });
        } catch {
            setErrorMessage(
                'Не удалось отправить заявку. Попробуйте ещё раз.'
            );
        }
    };

    return (
        <Stack
            component="form"
            spacing={2}
            onSubmit={handleSubmit(onSubmit)}
        >
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
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
                {...register('name', {
                    required: 'Введите имя',

                    minLength: {
                        value: 2,
                        message: 'Минимум 2 символа',
                    },

                    maxLength: {
                        value: 40,
                        message: 'Максимум 40 символов',
                    },

                    pattern: {
                        value: /^[A-Za-zА-Яа-яЁё\s-]+$/,
                        message:
                            'Имя может содержать только буквы',
                    },

                    validate: (value) =>
                        value.trim().length >= 2 ||
                        'Введите корректное имя',
                })}
            />

            <Controller
                name="phone"
                control={control}
                rules={{
                    required: 'Введите телефон',

                    validate: (value) =>
                        value.includes('_')
                            ? 'Введите номер полностью'
                            : true,
                }}
                render={({ field }) => (
                    <TextField
                        label="Телефон"
                        fullWidth
                        value={field.value}
                        onChange={field.onChange}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone?.message}
                        slotProps={{
                            input: {
                                inputComponent: IMaskInput as never,
                                inputProps: {
                                    mask: '+{7} (000) 000-00-00',
                                },
                            },
                        }}
                    />
                )}
            />

            <Controller
                name="category"
                control={control}
                rules={{
                    required: 'Выберите категорию',
                }}
                render={({ field }) => (
                    <TextField
                        select
                        label="Что хотите заказать?"
                        fullWidth
                        value={field.value}
                        onChange={field.onChange}
                        error={Boolean(errors.category)}
                        helperText={errors.category?.message}
                    >
                        <MenuItem value="Кухня">Кухня</MenuItem>
                        <MenuItem value="Шкаф">Шкаф</MenuItem>
                        <MenuItem value="Гардеробная">Гардеробная</MenuItem>
                        <MenuItem value="Прихожая">Прихожая</MenuItem>
                        <MenuItem value="Другое">Другое</MenuItem>
                    </TextField>
                )}
            />

            <TextField
                label="Комментарий"
                multiline
                rows={4}
                fullWidth
                placeholder="Например: нужна кухня 3 метра"
                {...register('comment')}
            />

            <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
            >
                {isSubmitting
                    ? 'Отправляем...'
                    : 'Отправить заявку'}
            </Button>
        </Stack>
    );
};