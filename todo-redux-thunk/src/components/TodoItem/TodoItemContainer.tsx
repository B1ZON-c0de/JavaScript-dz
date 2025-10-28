import TodoItemLayout from "./TodoItemLayout";
import { useAppDispatch } from "../../hooks/storeHooks.ts";
import { completeTodo, deleteTodo } from "../../store/todoThunk.ts";

interface IProps {
  id: string;
  text: string;
  completed: boolean;
  pending?: boolean;
}

const TodoItemContainer = ({ id, text, completed, pending }: IProps) => {
  const dispatch = useAppDispatch();
  const handleTodo = () => {
    dispatch(completeTodo(id));
  };

  const handleDeleteButton = () => {
    dispatch(deleteTodo(id));
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
