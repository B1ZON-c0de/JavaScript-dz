import type { ChangeEvent } from 'react';
import type { ITodo } from '../../types/types';
import TodoListLayout from './TodoListLayout';
interface IProps {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
  search: string;
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonSort: () => void;
  completeTodo: (id: string) => void;
  addTodo: (val: string) => void;
}
const TodoListContainer = ({
  todos,
  isLoading,
  error,
  completeTodo,
  addTodo,
  handleButtonSort,
  handleSearchInput,
  search,
}: IProps) => {
  return (
    <TodoListLayout
      completeTodo={completeTodo}
      todos={todos}
      isLoading={isLoading}
      error={error}
      addTodo={addTodo}
      handleButtonSort={handleButtonSort}
      handleSearchInput={handleSearchInput}
      search={search}
    />
  );
};

export default TodoListContainer;
