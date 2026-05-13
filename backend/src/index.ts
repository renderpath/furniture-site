import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

interface OrderRequestBody {
    name: string;
    phone: string;
    category: string;
    comment?: string;
}

app.get('/', (_, res) => {
    res.json({
        message: 'Backend работает',
    });
});

app.post('/api/orders', (req, res) => {
    const { name, phone, category, comment } = req.body as OrderRequestBody;

    if (!name || !phone || !category) {
        return res.status(400).json({
            success: false,
            message: 'Заполните имя, телефон и категорию',
        });
    }

    const order = {
        id: Date.now(),
        name,
        phone,
        category,
        comment: comment || '',
        status: 'new',
        createdAt: new Date().toISOString(),
    };

    console.log('Новая заявка:', order);

    return res.status(201).json({
        success: true,
        order,
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});