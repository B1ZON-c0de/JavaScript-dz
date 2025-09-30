import { useEffect, useReducer } from 'react';
import type { ITodo } from '../types/types';
import axios from 'axios';
import { BASE_URL, INITIAL_STTATE } from '../constants/constanst';
import { todoReducer } from '../shared/todoReducer';

export function useRequest() {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STTATE);

  const fetchTodos = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await axios.get<ITodo[]>(BASE_URL);
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
    } catch (e) {
      if (e instanceof Error) {
        throw new Error('Не удалось получить задачи');
      }
      dispatch({ type: 'FETCH_ERROR', payload: 'Не удалось получить задачи' });
    }
  };

  const addTodo = async (newText: string) => {
    const newTodo: ITodo = {
      id: Date.now().toString(),
      text: newText.trim(),
      completed: false,
      pending: false,
    };
    try {
      await axios.post(BASE_URL, newTodo);
      dispatch({ type: 'ADD_SUCCESS', payload: newTodo });
    } catch (e) {
      if (e instanceof Error) {
        throw new Error('Не удалось добавить задачу');
      }
      dispatch({
        type: 'FETCH_ERROR',
        payload: 'Не удалось добавить задачу',
      });
    }
  };

  const deleteTodo = async (id: string) => {
    dispatch({ type: 'SET_PENDING', payload: { id, pending: true } });
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      dispatch({ type: 'DELETE_SUCCESS', payload: { id } });
    } catch (e) {
      if (e instanceof Error) {
        throw new Error('Не удалось удалить задачу');
      }
      dispatch({ type: 'FETCH_ERROR', payload: 'Не удалось удалить задачу' });
      dispatch({ type: 'SET_PENDING', payload: { id, pending: false } });
    }
  };

  const completeTodo = async (id: string) => {
    dispatch({ type: 'SET_PENDING', payload: { id, pending: true } });
    try {
      await axios.patch(`${BASE_URL}/${id}`, { completed: true });
      dispatch({ type: 'COMPLETE_SUCCESS', payload: { id } });
    } catch (e) {
      if (e instanceof Error) {
        throw new Error('Не удалось изменить задачу');
      }
      dispatch({
        type: 'FETCH_ERROR',
        payload: 'Не удалось изменить задачу',
      });
      dispatch({ type: 'SET_PENDING', payload: { id, pending: false } });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    ...state,
    fetchTodos,
    addTodo,
    deleteTodo,
    completeTodo,
  };
}
