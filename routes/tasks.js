import express from 'express';
import Task from '../models/task.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Ошибка при получении задач' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ message: 'Ошибка при добавлении задачи' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Задача удалена' });
    } catch (err) {
        res.status(500).json({ message: 'Ошибка при удалении задачи' });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: 'Ошибка при обновлении задачи' });
    }
});

export default router;
