import { useRequest } from './useRequestTodos';
import type { ITodo } from '../types/types';
import { useDebounce } from './useDebounce';
import { useEffect, useMemo, useState, type ChangeEvent } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [search, setSearch] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const {
    value,
    isLoading,
    error,
    completeTodo,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useRequest();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target?.value);
  };

  const debouncedValue = useDebounce(search, 700);

  const displayedTodos = useMemo(() => {
    const newTodos = [...todos];
    if (isSorted) {
      newTodos.sort((a, b) => a.text.localeCompare(b.text));
    }
    return newTodos;
  }, [todos, isSorted]);

  const filteredTodos = useMemo(() => {
    if (!debouncedValue) return displayedTodos;
    const newTodos = [...displayedTodos].filter((todo) =>
      todo.text.toLowerCase().includes(debouncedValue.toLowerCase())
    );
    return newTodos;
  }, [displayedTodos, debouncedValue]);

  const handleButtonSort = () => {
    setIsSorted(!isSorted);
  };

  useEffect(() => {
    setTodos(value);
  }, [value]);

  return {
    todos: filteredTodos,
    updateTodo,
    completeTodo,
    isLoading,
    error,
    addTodo,
    deleteTodo,
    handleButtonSort,
    handleSearchInput,
    search,
  };
}
