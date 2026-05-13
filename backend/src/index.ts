import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db';

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

app.post('/api/orders', async (req, res) => {
    try {
        const { name, phone, category, comment } =
            req.body as OrderRequestBody;

        if (!name || !phone || !category) {
            return res.status(400).json({
                success: false,
                message: 'Заполните обязательные поля',
            });
        }

        const result = await db.query(
            `
      INSERT INTO orders (
        name,
        phone,
        category,
        comment
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
            [name, phone, category, comment || '']
        );

        return res.status(201).json({
            success: true,
            order: result.rows[0],
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Ошибка сервера',
        });
    }
});

app.get('/api/admin/orders', async (_, res) => {
    try {
        const result = await db.query(`
      SELECT *
      FROM orders
      ORDER BY created_at DESC
    `);

        return res.json({
            success: true,
            orders: result.rows,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Ошибка сервера',
        });
    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});