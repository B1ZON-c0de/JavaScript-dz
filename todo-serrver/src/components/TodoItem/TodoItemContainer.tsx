import TodoItemLayout from './TodoItemLayout';

interface IProps {
  id: string;
  text: string;
  completed: boolean;
  pending?: boolean;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

const TodoItemContainer = ({
  id,
  text,
  completed,
  completeTodo,
  pending,
  deleteTodo,
}: IProps) => {
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
