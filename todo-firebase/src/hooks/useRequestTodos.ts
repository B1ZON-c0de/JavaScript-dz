import { ref, onValue, push, remove, update } from 'firebase/database';
import { useEffect, useState } from 'react';
import type { ITodo } from '../types/types';
import { db } from '../firebase';

export function useRequestTodos() {
  const [value, setValue] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const todosDbRef = ref(db, 'todos');

  const completeTodo = async (id: string) => {
    setError('');
    const todoDbRef = ref(db, `todos/${id}`);

    try {
      await update(todoDbRef, {
        completed: true,
      });
    } catch (e) {
      if (e instanceof Error) {
        setError('Не удалось изменить задачу');
      }
    }
  };

  const addTodo = async (newText: string) => {
    setError('');
    try {
      await push(todosDbRef, {
        text: newText.trim(),
        completed: false,
      });
    } catch (e) {
      if (e instanceof Error) {
        setError('Не удалось добавить задачу');
      }
    }
  };

  const deleteTodo = async (id: string) => {
    setError('');
    const todoDbRef = ref(db, `todos/${id}`);
    try {
      await remove(todoDbRef);
    } catch (e) {
      if (e instanceof Error) {
        setError('Не удалось удалить задачу');
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};
      setValue(
        Object.keys(loadedTodos).map((key) => ({
          id: key,
          ...loadedTodos[key],
        }))
      );
      setIsLoading(false);
    });
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
