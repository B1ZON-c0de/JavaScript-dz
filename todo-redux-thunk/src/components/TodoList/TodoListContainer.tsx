import { useMemo } from "react";
import { useDebounce } from "../../hooks/useDebounce.ts";
import TodoListLayout from "./TodoListLayout";
import { useAppSelector } from "../../hooks/storeHooks.ts";

const TodoListContainer = () => {
  const search = useAppSelector((state) => state.todos.search);
  const isSorted = useAppSelector((state) => state.todos.isSorted);
  const tasks = useAppSelector((state) => state.todos.tasks);

  const debouncedValue = useDebounce(search, 700);

  const displayedTodos = useMemo(() => {
    const newTodos = [...tasks];
    if (isSorted) {
      newTodos.sort((a, b) => a.text.localeCompare(b.text));
    }
    return newTodos;
  }, [tasks, isSorted]);

  const filteredTodos = useMemo(() => {
    if (!debouncedValue) return displayedTodos;
    return [...displayedTodos].filter((task) =>
      task.text.toLowerCase().includes(debouncedValue.toLowerCase()),
    );
  }, [displayedTodos, debouncedValue]);
  return <TodoListLayout todos={filteredTodos} />;
};

export default TodoListContainer;
