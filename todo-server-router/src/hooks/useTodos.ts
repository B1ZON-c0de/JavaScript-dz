import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import {
  setSearch,
  toggleSort,
  filterTodos,

} from '../store/todoSlice.ts';
import {  fetchTodos,
  completeTodo,
  addTodo,
  deleteTodo,
  updateTodo} from '../store/todoThunk.ts';
import { useDebounce } from './useDebounce';

export function useTodos() {
  const dispatch = useAppDispatch();
  const {
    items: todos,
    filteredItems,
    search,
    isSorted,
    isLoading,
    error,
  } = useAppSelector((state) => state.todos);

  const debouncedSearch = useDebounce(search, 700);

  const handleSearchInput = (value: string) => {
    dispatch(setSearch(value));
  };

  const handleButtonSort = () => {
    dispatch(toggleSort());
  };

  const handleCompleteTodo = (id: string) => {
    dispatch(completeTodo(id));
  };

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id: string, newText: string) => {
    dispatch(updateTodo({ id, newText }));
  };


  useEffect(() => {
    dispatch(filterTodos());
  }, [debouncedSearch, isSorted, todos, dispatch]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return {
    todos: filteredItems,
    updateTodo: handleUpdateTodo,
    completeTodo: handleCompleteTodo,
    isLoading,
    error,
    addTodo: handleAddTodo,
    deleteTodo: handleDeleteTodo,
    handleButtonSort,
    handleSearchInput,
    search,
  };
}