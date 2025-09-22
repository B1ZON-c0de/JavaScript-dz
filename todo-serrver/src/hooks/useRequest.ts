import axios from 'axios';
import { useEffect, useState } from 'react';
import type { ITodo } from '../types/types';

export function useRequest() {
  const [value, setValue] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchTodos = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:3000/todos');
      setValue(response.data);
    } catch (e) {
      if (e instanceof Error) {
        setError('Не удалось получить задачи');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const completeTodo = async (id: string) => {
    setError('');
    const prevTodos = value;
    setValue((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, pending: true } : todo))
    );
    try {
      await axios.patch(`http://localhost:3000/todos/${id}`, {
        completed: true,
      });
      setValue((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, pending: false, completed: true } : todo
        )
      );
    } catch (e) {
      if (e instanceof Error) {
        setError('Не удалось изменить задачу');
        setValue(prevTodos);
      }
    }
  };

  const addTodo = async (newText: string) => {
    setError('');
    const newTodo = {
      id: Date.now().toString(),
      pending: false,
      text: newText.trim(),
      completed: false,
    };
    const prevTodos = value;
    try {
      await axios.post(`http://localhost:3000/todos/`, newTodo);
      setValue((prev) => [...prev, newTodo]);
    } catch (e) {
      if (e instanceof Error) {
        setError('Не удалось добавить задачу');
        setValue(prevTodos);
      }
    }
  };

  const deleteTodo = async (id: string) => {
    setError('');
    const prevTodos = value;
    setValue((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, pending: true } : todo))
    );
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setValue((prev) => prev.filter((todo) => todo.id !== id));
    } catch (e) {
      if (e instanceof Error) {
        setError('Не удалось удалить задачу');
        setValue(prevTodos);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    value,
    isLoading,
    error,
    completeTodo,
    addTodo,
    deleteTodo,
  };
}
