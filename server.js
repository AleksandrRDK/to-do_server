import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Сервер работает!');
});

app.use('/api/tasks', taskRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Подключен к MongoDB!');
        app.listen(PORT, () => {
            console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error('Ошибка подключения к MongoDB:', err));
