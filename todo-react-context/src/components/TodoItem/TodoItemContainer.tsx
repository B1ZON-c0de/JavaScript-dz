import TodoItemLayout from './TodoItemLayout';
import { useTodos } from '../../hooks/contextHooks/useTodos';

interface IProps {
  id: string;
  text: string;
  completed: boolean;
  pending?: boolean;
}

const TodoItemContainer = ({ id, text, completed, pending }: IProps) => {
  const { completeTodo, deleteTodo } = useTodos();

  const handleTodo = () => {
    completeTodo(id);
  };

  const handleDeleteButton = () => {
    deleteTodo(id);
  };

  return (
    <TodoItemLayout
      pending={pending}
      handleTodo={handleTodo}
      text={text}
      completed={completed}
      handleDeleteButton={handleDeleteButton}
    />
  );
};

export default TodoItemContainer;
