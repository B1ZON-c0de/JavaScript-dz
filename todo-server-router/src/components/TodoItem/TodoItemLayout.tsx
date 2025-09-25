import { Link } from 'react-router-dom';

interface IProps {
  id: string;
  text: string;
  completed: boolean;
  pending?: boolean;
  handleTodo: () => void;
}
const TodoItemLayout = ({
  id,
  text,
  completed,
  handleTodo,
  pending,
}: IProps) => {
  return (
    <li className={`${completed && 'bg-success/15 text-neutral'}`}>
      <Link
        className="task-element"
        to={`task/${id}`}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest('input[type="checkbox"]')) {
            e.preventDefault();
          }
        }}
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
            className={`font-semibold ${
              completed && 'line-through opacity-75'
            }`}
          >
            {text.length > 40 ? `${text.slice(0, 39)}...` : text}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default TodoItemLayout;
