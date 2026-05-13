import axios from 'axios';

export interface Order {
    id: number;
    name: string;
    phone: string;
    category: string;
    comment: string;
    status: string;
    created_at: string;
}

export const getOrders = async () => {
    const token = localStorage.getItem('admin_token');

    const response = await axios.get(
        'http://localhost:5001/api/admin/orders',
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data.orders as Order[];
};

export const updateOrderStatus = async (
    id: number,
    status: string
) => {
    const token = localStorage.getItem('admin_token');

    const response = await axios.patch(
        `http://localhost:5001/api/admin/orders/${id}/status`,
        {
            status,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export const deleteOrder = async (id: number) => {
    const token = localStorage.getItem('admin_token');

    const response = await axios.delete(
        `http://localhost:5001/api/admin/orders/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};