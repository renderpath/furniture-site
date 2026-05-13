import axios from 'axios';

export interface OrderFormData {
    name: string;
    phone: string;
    category: string;
    comment?: string;
}

export const createOrder = async (data: OrderFormData) => {
    const response = await axios.post('http://localhost:5001/api/orders', data);

    return response.data;
};