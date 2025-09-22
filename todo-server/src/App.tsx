import { useEffect, useMemo, useState, type ChangeEvent } from 'react';
import Background from './components/Background';
import TodoListContainer from './components/TodoList/TodoListContainer';
import { useRequest } from './hooks/useRequest';
import type { ITodo } from './types/types';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [search, setSearch] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const { value, isLoading, error, completeTodo, addTodo, deleteTodo } =
    useRequest();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target?.value);
  };

  const debouncedValue = useDebounce(search, 700);

  const displayedTodos = useMemo(() => {
    const newTodos = [...todos];
    if (isSorted) {
      newTodos.sort((a, b) => a.text.localeCompare(b.text));
    }
    return newTodos;
  }, [todos, isSorted]);

  const filteredTodos = useMemo(() => {
    if (!debouncedValue) return displayedTodos;
    const newTodos = [...displayedTodos].filter((todo) =>
      todo.text.toLowerCase().includes(debouncedValue.toLowerCase())
    );
    return newTodos;
  }, [displayedTodos, debouncedValue]);

  const handleButtonSort = () => {
    setIsSorted(!isSorted);
  };

  useEffect(() => {
    setTodos(value);
  }, [value]);
  return (
    <>
      <Background>
        <TodoListContainer
          todos={filteredTodos}
          completeTodo={completeTodo}
          isLoading={isLoading}
          error={error}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          handleButtonSort={handleButtonSort}
          handleSearchInput={handleSearchInput}
          search={search}
        />
      </Background>
    </>
  );
}

export default App;
