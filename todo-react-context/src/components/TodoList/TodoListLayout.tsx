import type { ITodo } from '../../types/types';
import InputAddContainer from '../InputAdd/InputAddContainer';
import InputSearchContainer from '../InputSearch/InputSearchContainer';
import TodoItemContainer from '../TodoItem/TodoItemContainer';
import { useTodos } from '../../hooks/contextHooks/useTodos';
interface IProps {
  todos: ITodo[];
}
const TodoListLayout = ({ todos }: IProps) => {
  const { isLoading, error } = useTodos();
  return (
    <>
      <div className="card-todo">
        <h1>Todo List</h1>
        <div className="flex flex-col gap-4">
          <InputSearchContainer />
          <InputAddContainer />
        </div>
        <ul>
          {isLoading ? (
            <div className="flex justify-center py-3">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : todos.length > 0 ? (
            todos.map(({ id, text, completed, pending }) => (
              <TodoItemContainer
                key={id}
                id={id}
                text={text}
                completed={completed}
                pending={pending}
              />
            ))
          ) : error ? (
            <div className="no-todos">{error}</div>
          ) : (
            <div className="no-todos">Нет задач</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default TodoListLayout;
