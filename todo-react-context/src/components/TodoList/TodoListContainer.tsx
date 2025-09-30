import { useSearch } from '../../hooks/contextHooks/useSearch';
import TodoListLayout from './TodoListLayout';

const TodoListContainer = () => {
  const { filteredTodos } = useSearch();

  return <TodoListLayout todos={filteredTodos} />;
};

export default TodoListContainer;
