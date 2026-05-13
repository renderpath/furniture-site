import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface Order {
    id: number;
    name: string;
    phone: string;
    category: string;
    comment: string;
    status: string;
    created_at: string;
}

export const loginAdmin = async (
    login: string,
    password: string
) => {
    const response = await axios.post(
        `${API_URL}/api/admin/login`,
        {
            login,
            password,
        }
    );

    return response.data;
};

export const getOrders = async (): Promise<Order[]> => {
    const token = localStorage.getItem('admin_token');

    const response = await axios.get(
        `${API_URL}/api/admin/orders`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data.orders;
};

export const updateOrderStatus = async (
    orderId: number,
    status: string
) => {
    const token = localStorage.getItem('admin_token');

    const response = await axios.patch(
        `${API_URL}/api/admin/orders/${orderId}/status`,
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

export const deleteOrder = async (orderId: number) => {
    const token = localStorage.getItem('admin_token');

    const response = await axios.delete(
        `${API_URL}/api/admin/orders/${orderId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};