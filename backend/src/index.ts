import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db';
import jwt from 'jsonwebtoken';
import { adminCredentials } from './config/admin';
import { authMiddleware } from './middleware/auth';

dotenv.config();

const app = express();

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174'
    ],
    credentials: true,
}));

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

app.get('/api/admin/orders', authMiddleware , async (_, res) => {
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

app.post('/api/admin/login', async (req, res) => {
    try {
        const { login, password } = req.body;

        if (
            login !== adminCredentials.login ||
            password !== adminCredentials.password
        ) {
            return res.status(401).json({
                success: false,
                message: 'Неверный логин или пароль',
            });
        }

        const token = jwt.sign(
            {
                role: 'admin',
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: '7d',
            }
        );

        return res.json({
            success: true,
            token,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Ошибка сервера',
        });
    }
});

app.patch(
    '/api/admin/orders/:id/status',
    authMiddleware,
    async (req, res) => {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const result = await db.query(
                `
        UPDATE orders
        SET status = $1
        WHERE id = $2
        RETURNING *
        `,
                [status, id]
            );

            return res.json({
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
    }
);

app.delete(
    '/api/admin/orders/:id',
    authMiddleware,
    async (req, res) => {
        try {
            const { id } = req.params;

            await db.query(
                `
        DELETE FROM orders
        WHERE id = $1
        `,
                [id]
            );

            return res.json({
                success: true,
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message: 'Ошибка сервера',
            });
        }
    }
);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});