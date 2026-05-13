import axios from 'axios';

export interface OrderFormData {
    name: string;
    phone: string;
    category: string;
    comment?: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const createOrder = async (data: OrderFormData) => {
    const response = await axios.post(`${API_URL}/api/orders`, data);

    return response.data;
};