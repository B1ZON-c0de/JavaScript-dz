import { useEffect } from "react";
import Background from "./components/Background";
import TodoListContainer from "./components/TodoList/TodoListContainer";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks.ts";
import { fetchTodos } from "./store/todoThunk.ts";

function App() {
  const status = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(fetchTodos());
  }, [status, dispatch]);
  return (
    <>
      <Background>
        <TodoListContainer />
      </Background>
    </>
  );
}

export default App;
