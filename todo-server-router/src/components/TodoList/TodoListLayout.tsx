import type { ChangeEvent } from 'react';
import type { ITodo } from '../../types/types';
import InputAddContainer from '../InputAdd/InputAddContainer';
import InputSearchContainer from '../InputSearch/InputSearchContainer';
import TodoItemContainer from '../TodoItem/TodoItemContainer';
interface IProps {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
  search: string;
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonSort: () => void;
  addTodo: (val: string) => void;
  completeTodo: (id: string) => void;
}
const TodoListLayout = ({
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
    <>
      <div className="card-todo">
        <h1>Todo List</h1>
        <div className="flex flex-col gap-4">
          <InputSearchContainer
            search={search}
            handleButtonSort={handleButtonSort}
            handleSearchInput={handleSearchInput}
          />

          <InputAddContainer addTodo={addTodo} />
        </div>
        <ul>
          {isLoading ? (
            <div className="flex justify-center py-3">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : error ? (
            <div className="no-todos">{error}</div>
          ) : todos.length > 0 ? (
            todos.map(({ id, text, completed, pending }) => (
              <TodoItemContainer
                key={id}
                id={id}
                text={text}
                completed={completed}
                completeTodo={completeTodo}
                pending={pending}
              />
            ))
          ) : (
            <div className="no-todos">Нет задач</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default TodoListLayout;
