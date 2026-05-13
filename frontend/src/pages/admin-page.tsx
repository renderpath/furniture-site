import { useEffect, useState } from 'react';

import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    Grid,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';

import {
    deleteOrder,
    getOrders,
    updateOrderStatus,
    type Order,
} from '../shared/api/admin';

const statusLabels: Record<string, string> = {
    new: 'Новая',
    in_progress: 'В работе',
    done: 'Завершена',
};

const statusStyles: Record<string, { backgroundColor: string; color: string }> = {
    new: {
        backgroundColor: 'rgba(47, 109, 246, 0.16)',
        color: '#5B8CFF',
    },
    in_progress: {
        backgroundColor: 'rgba(245, 158, 11, 0.16)',
        color: '#F59E0B',
    },
    done: {
        backgroundColor: 'rgba(34, 197, 94, 0.16)',
        color: '#22C55E',
    },
};

export const AdminPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchValue, setSearchValue] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredOrders = orders.filter((order) => {
        const searchText = searchValue.toLowerCase();

        const matchesSearch =
            order.name.toLowerCase().includes(searchText) ||
            order.phone.toLowerCase().includes(searchText) ||
            order.category.toLowerCase().includes(searchText) ||
            order.comment.toLowerCase().includes(searchText);

        const matchesStatus =
            statusFilter === 'all' ||
            order.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const paginatedOrders = filteredOrders.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    const newOrdersCount = orders.filter(
        (order) => order.status === 'new'
    ).length;

    const inProgressOrdersCount = orders.filter(
        (order) => order.status === 'in_progress'
    ).length;

    const doneOrdersCount = orders.filter(
        (order) => order.status === 'done'
    ).length;

    useEffect(() => {
        const token = localStorage.getItem('admin_token');

        if (!token) {
            window.location.href = '/admin/login';
        }
    }, []);

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const data = await getOrders();

                setOrders(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        void loadOrders();

        const intervalId = window.setInterval(() => {
            void loadOrders();
        }, 5000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    if (isLoading) {
        return (
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#0B0F17',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                p: 4,
                backgroundColor: '#0B0F17',
                minHeight: '100vh',
                color: '#fff',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    mb: 4,
                    fontWeight: 800,
                }}
            >
                Админ панель
            </Typography>

            <Button
                variant="outlined"
                color="error"
                sx={{ mb: 3 }}
                onClick={() => {
                    localStorage.removeItem('admin_token');

                    window.location.href = '/admin/login';
                }}
            >
                Выйти
            </Button>

            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography color="text.secondary">
                            Всего заявок
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 800 }}>
                            {orders.length}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography color="text.secondary">
                            Новые
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 800 }}>
                            {newOrdersCount}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography color="text.secondary">
                            В работе
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 800 }}>
                            {inProgressOrdersCount}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Paper sx={{ p: 3 }}>
                        <Typography color="text.secondary">
                            Завершённые
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 800 }}>
                            {doneOrdersCount}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Box
                sx={{
                    mb: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '1fr 260px',
                    },
                    gap: 2,
                }}
            >
                <TextField
                    label="Поиск по заявкам"
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                        setPage(0);
                    }}
                    fullWidth
                />

                <FormControl fullWidth>
                    <Select
                        value={statusFilter}
                        onChange={(event) => {
                            setStatusFilter(event.target.value);
                            setPage(0);
                        }}
                    >
                        <MenuItem value="all">Все статусы</MenuItem>
                        <MenuItem value="new">Новые</MenuItem>
                        <MenuItem value="in_progress">В работе</MenuItem>
                        <MenuItem value="done">Завершённые</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: '#101827',
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Категория</TableCell>
                            <TableCell>Комментарий</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Действия</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredOrders.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    {orders.length === 0
                                        ? 'Заявок пока нет'
                                        : 'По вашему поиску ничего не найдено'}
                                </TableCell>
                            </TableRow>
                        )}

                        {paginatedOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>

                                <TableCell>{order.name}</TableCell>

                                <TableCell>{order.phone}</TableCell>

                                <TableCell>{order.category}</TableCell>

                                <TableCell>{order.comment}</TableCell>

                                <TableCell sx={{ minWidth: 180 }}>
                                    <FormControl fullWidth size="small">
                                        <Select
                                            value={order.status}
                                            renderValue={(value) => (
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: 999,
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        ...statusStyles[value],
                                                    }}
                                                >
                                                    {statusLabels[value]}
                                                </Box>
                                            )}
                                            onChange={async (event) => {
                                                const newStatus = event.target.value;

                                                try {
                                                    await updateOrderStatus(
                                                        order.id,
                                                        newStatus
                                                    );

                                                    setOrders((prev) =>
                                                        prev.map((item) =>
                                                            item.id === order.id
                                                                ? {
                                                                    ...item,
                                                                    status: newStatus,
                                                                }
                                                                : item
                                                        )
                                                    );
                                                } catch (error) {
                                                    console.error(error);
                                                }
                                            }}
                                        >
                                            <MenuItem value="new">{statusLabels.new}</MenuItem>
                                            <MenuItem value="in_progress">
                                                {statusLabels.in_progress}
                                            </MenuItem>
                                            <MenuItem value="done">{statusLabels.done}</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>

                                <TableCell>
                                    {new Date(order.created_at).toLocaleString()}
                                </TableCell>

                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="small"
                                        onClick={async () => {
                                            const isConfirmed = window.confirm(
                                                'Удалить эту заявку?'
                                            );

                                            if (!isConfirmed) return;

                                            try {
                                                await deleteOrder(order.id);

                                                setOrders((prev) =>
                                                    prev.filter((item) => item.id !== order.id)
                                                );
                                            } catch (error) {
                                                console.error(error);
                                            }
                                        }}
                                    >
                                        Удалить
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <TablePagination
                    component="div"
                    count={filteredOrders.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                    labelRowsPerPage="Заявок на странице:"
                    onPageChange={(_, newPage) => {
                        setPage(newPage);
                    }}
                    onRowsPerPageChange={(event) => {
                        setRowsPerPage(Number(event.target.value));
                        setPage(0);
                    }}
                />
            </TableContainer>
        </Box>
    );
};