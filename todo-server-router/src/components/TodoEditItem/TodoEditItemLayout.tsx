import { ArrowLeft, Trash2 } from 'lucide-react';
import type { ChangeEvent, RefObject } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  textArea: string;
  completed: boolean;
  textRef: RefObject<HTMLTextAreaElement | null>;
  handleTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleDeleteTodo: () => void;
  handleSafeButton: () => void;
}

const TodoEditItemLayout = ({
  textArea,
  completed,
  handleTextArea,
  handleDeleteTodo,
  handleSafeButton,
  textRef,
}: IProps) => {
  return (
    <div className="card-todo flex flex-col">
      <div className="flex justify-between">
        <Link to="/">
          <button className="btn btn-neutral">
            <ArrowLeft />
            Назад
          </button>
        </Link>
        <button onClick={handleDeleteTodo} className="btn btn-error text-lg">
          <Trash2 />
          Удалить
        </button>
      </div>
      <h1>Задача</h1>
      <div className="space-y-5">
        <textarea
          ref={textRef}
          disabled={completed}
          value={textArea}
          onChange={(e) => {
            handleTextArea(e);
          }}
          className="textarea resize-none focus:outline-0 h-30 w-full items-center text-lg font-semibold bg-base-300 shadow-[inset_0_2px_6px_oklch(70%_0.08_319.62/0.5),inset_0_-2px_4px_oklch(60%_0.10_319.62/0.4)]
         focus:shadow-[inset_0_3px_8px_oklch(55%_0.12_319.62/0.6),inset_0_-3px_6px_oklch(50%_0.12_319.62/0.5)] border-none  transition"
        ></textarea>
        <button
          disabled={completed}
          onClick={handleSafeButton}
          className="btn btn-success w-full text-lg font-semibold"
        >
          {completed ? 'Задача уже выполнена' : 'Сохранить'}
        </button>
      </div>
    </div>
  );
};

export default TodoEditItemLayout;
