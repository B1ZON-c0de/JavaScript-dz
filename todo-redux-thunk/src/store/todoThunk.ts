import { createAppAsyncThunk } from "./withTypes.ts";
import axios from "axios";

export const fetchTodos = createAppAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue("Не удалось получить задачи");
      }
    }
  },
);

export const completeTodo = createAppAsyncThunk(
  "todos/completeTodo",
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.patch(`http://localhost:3000/todos/${id}`, {
        completed: true,
      });
      return id;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue("Не удалось завершить задачу");
      }
    }
  },
);

export const addTodo = createAppAsyncThunk(
  "todos/addTodo",
  async (newText: string, { rejectWithValue }) => {
    const newTodo = {
      id: Date.now().toString(),
      pending: false,
      text: newText.trim(),
      completed: false,
    };
    try {
      await axios.post(`http://localhost:3000/todos/`, newTodo);
      return newTodo;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue("Не удалось добавить задачу");
      }
    }
  },
);

export const deleteTodo = createAppAsyncThunk(
  "todos/deleteTodo",
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      return id;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue("Не удалось удалить задачу");
      }
    }
  },
);
