import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type ITodo } from '../types/types.ts';

const API_BASE = 'http://localhost:3000/todos';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_BASE);
            return response.data;
        } catch (error) {
            console.log("Ошибка: "+ error)
            return rejectWithValue('Не удалось получить задачи');
        }
    }
);

export const completeTodo = createAsyncThunk(
    'todos/completeTodo',
    async (id: string, { rejectWithValue }) => {
        try {
            await axios.patch(`${API_BASE}/${id}`, { completed: true });
            return id;
        } catch (error) {
            console.log("Ошибка: "+ error)
            return rejectWithValue('Не удалось изменить задачу');
        }
    }
);

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (text: string, { rejectWithValue }) => {
        try {
            const newTodo: ITodo = {
                id: Date.now().toString(),
                pending: false,
                text: text.trim(),
                completed: false,
            };
            await axios.post(API_BASE, newTodo);
            return newTodo;
        } catch (error) {
            console.log("Ошибка: "+ error)
            return rejectWithValue('Не удалось добавить задачу');
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id: string, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_BASE}/${id}`);
            return id;
        } catch (error) {
            console.log("Ошибка: "+ error)
            return rejectWithValue('Не удалось удалить задачу');
        }
    }
);

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async ({ id, newText }: { id: string; newText: string }, { rejectWithValue }) => {
        try {
            await axios.patch(`${API_BASE}/${id}`, { text: newText });
            return { id, newText };
        } catch (error) {
            console.log("Ошибка: "+ error)
            return rejectWithValue('Не удалось изменить поле задачи');
        }
    }
);