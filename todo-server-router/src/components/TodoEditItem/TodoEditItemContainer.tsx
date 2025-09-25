import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import TodoEditItemLayout from './TodoEditItemLayout';
import type { ITodo } from '../../types/types';
import { useNavigate, useParams } from 'react-router-dom';

interface IProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newText: string) => void;
}

const TodoEditItemContainer = ({ todos, deleteTodo, updateTodo }: IProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const currentTodo = useMemo(() => {
    return todos.find((el) => el.id === params.id);
  }, [params.id, todos]);
  const [textArea, setTextArea] = useState(currentTodo?.text || '');
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleDeleteTodo = () => {
    if (!currentTodo) return;
    deleteTodo(currentTodo.id);
    navigate('/');
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };
  const handleSafeButton = () => {
    if (!currentTodo) return;
    updateTodo(currentTodo.id, textArea);
    navigate('/');
  };

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  return (
    <TodoEditItemLayout
      textRef={textAreaRef}
      completed={!currentTodo ? false : currentTodo.completed}
      textArea={textArea}
      handleTextArea={handleTextArea}
      handleDeleteTodo={handleDeleteTodo}
      handleSafeButton={handleSafeButton}
    />
  );
};

export default TodoEditItemContainer;
