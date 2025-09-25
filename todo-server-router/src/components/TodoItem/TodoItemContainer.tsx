import TodoItemLayout from './TodoItemLayout';

interface IProps {
  id: string;
  text: string;
  completed: boolean;
  pending?: boolean;
  completeTodo: (id: string) => void;
}

const TodoItemContainer = ({
  id,
  text,
  completed,
  completeTodo,
  pending,
}: IProps) => {
  const handleTodo = () => {
    completeTodo(id);
  };

  return (
    <TodoItemLayout
      id={id}
      pending={pending}
      handleTodo={handleTodo}
      text={text}
      completed={completed}
    />
  );
};

export default TodoItemContainer;
