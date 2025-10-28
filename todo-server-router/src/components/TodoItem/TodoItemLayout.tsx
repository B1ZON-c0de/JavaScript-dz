import { Trash2 } from 'lucide-react';

interface IProps {
  text: string;
  completed: boolean;
  pending?: boolean;
  handleTodo: () => void;
  handleDeleteButton: () => void;
}
const TodoItemLayout = ({
  text,
  completed,
  handleTodo,
  pending,
  handleDeleteButton,
}: IProps) => {
  return (
    <li
      onClick={handleTodo}
      className={`${completed && 'bg-success/15 text-neutral'}`}
    >
      <div>
        <input
          type="checkbox"
          className="mr-10 checkbox text-primary"
          checked={completed}
          onChange={handleTodo}
          disabled={pending}
        />
        <span
          className={`font-semibold ${completed && 'line-through opacity-75'}`}
        >
          {text}
        </span>
      </div>

      <button
        disabled={pending}
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteButton();
        }}
        className="btn btn-circle btn-error"
      >
        <Trash2 color="#500323" />
      </button>
    </li>
  );
};

export default TodoItemLayout;
