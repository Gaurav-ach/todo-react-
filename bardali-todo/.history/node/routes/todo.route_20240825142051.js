import express from 'express';
import { creatTodo, deleteTodo, getTodo, getTodos, updateStatus, updateTodo } from '../controllers/todo.controller.js';
import upload from '../middleware/molterconfig.js';

const router=express.Router()

router.post('/todo',upload.single.,creatTodo)
router.get('/todo',getTodos)
router.get('/todo/:id',getTodo)
router.put('/todo/:id',updateTodo)
router.delete('/todo/:id',deleteTodo)
router.put('/todostatus/:id',updateStatus)

export default router;