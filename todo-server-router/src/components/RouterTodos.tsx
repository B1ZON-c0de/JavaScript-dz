import { Routes, Route } from 'react-router-dom';
import TodoListContainer from './TodoList/TodoListContainer';
import { useTodos } from '../hooks/useTodos';
import TodoEditItemContainer from './TodoEditItem/TodoEditItemContainer';
import NotFound from './NotFound';

const RouterTodo = () => {
  const { deleteTodo, updateTodo, ...todoProp } = useTodos();

  return (
    <Routes>
      <Route path="/" element={<TodoListContainer {...todoProp} />} />
      <Route
        path="/task/:id"
        element={
          <TodoEditItemContainer
            todos={todoProp.todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        }
      />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default RouterTodo;
